import { Router, Request, Response } from "express";
import { Databases, Query } from "appwrite";
import client from "../lib/AppwriteClient";

const router = Router();
const databases = new Databases(client);

// Search endpoint
router.get("/", async (req: Request, res: Response) => {
    // try {
        const { query } = req.query;

        if (!query) {
            res.status(400).json({ error: "Query parameter is required" });
            return;
        }

        // Replace with your database and collection IDs
        const databaseId = process.env.APPWRITE_DATABASE_ID || "";
        const collectionId = "items";

        // Perform search in the Appwrite database
        const result = await databases.listDocuments(databaseId, collectionId, [
            Query.search("title", query as string),
        ]);

        res.json(result.documents);

    // } catch (error: any) {
    //     console.error("Error searching items:", error.message);
    //     res.status(500).json({ error: "Failed to search items" });
    // }
});

export default router;