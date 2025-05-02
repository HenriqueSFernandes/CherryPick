import { Router, Request, Response } from "express";
import { Databases, ID, Query } from "appwrite";
import client from "../lib/AppwriteClient";

const router = Router();
const databases = new Databases(client);

const fetchBookFromOpenLibrary = async (query: string) => {
    // Search for books matching the query
    const searchResponse = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
    let book;

    if (!searchResponse.ok) {
        throw new Error("Failed to fetch search results")
    }

    const searchResult = await searchResponse.json()

    if (searchResult.docs && searchResult.docs.length > 0) {
        book = searchResult.docs[0]

        // If the book has a work key, fetch its description
        if (book.key) {
            const workKey = book.key.replace("/works/", "")
            const workResponse = await fetch(`https://openlibrary.org/works/${workKey}.json`)

            if (workResponse.ok) {
                const workData = await workResponse.json()
                if (workData.description) {
                    if (typeof workData.description === "object" && workData.description.value) {
                        book.description = workData.description.value
                    } else if (typeof workData.description === "string") {
                        book.description = workData.description
                    }

                    book.description = cropDescription(book.description);
                    return book;
                }
            } else {
                return null;
            }
        }
    } else {
        return null;
    }
}

const cropDescription = (description: string): string => {
    const delimiter = "---";
    const index = description.indexOf(delimiter);
    return index !== -1 ? description.substring(0, index).trim() : description;
};

// Search endpoint
router.get("/", async (req: Request, res: Response) => {
    try {
        const { query } = req.query;

        if (!query) {
            res.status(400).json({ error: "Query parameter is required" });
            return;
        }

        // Replace with your database and collection IDs
        const databaseId = process.env.APPWRITE_DATABASE_ID || "";
        const collectionId = "items";

        // Perform search in the Appwrite database
        let result = await databases.listDocuments(databaseId, collectionId, [
            Query.search("title", query as string),
        ]);

        let book: Item;
        if (result.documents.length === 0) {
            // If no results found in the database, try to fetch a book from Open Library
            let newBook = await fetchBookFromOpenLibrary(query as string);

            if (newBook) {
                let storedBook = {
                    title: newBook.title,
                    author: newBook.author_name ? newBook.author_name.join(", ") : "Unknown author",
                    cover: newBook.cover_i ? `https://covers.openlibrary.org/b/id/${newBook.cover_i}-L.jpg` : undefined,
                    description: newBook.description || null,
                    type: "book",
                }
                let bookId = ID.unique();
                await databases.createDocument(databaseId, collectionId, bookId, storedBook);

                book = {
                    id: bookId,
                    ...storedBook,
                    type: "book",  // To avoid type error
                }

            } else {
                res.status(404).json({ error: "No results found" });
                return;
            }
            
        } else {
            // If results found in the database, return them
            book = {
                id: result.documents[0].$id,
                title: result.documents[0].title,
                author: result.documents[0].author,
                cover: result.documents[0].cover,
                description: result.documents[0].description,
                type: result.documents[0].type,
            }
        }

        res.status(200).json(book);

    } catch (error: any) {
        console.error("Error searching items:", error.message);
        res.status(500).json({ error: "Failed to search items" });
    }
});

export default router;