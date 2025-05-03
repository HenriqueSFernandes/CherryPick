import { Router, Request, Response } from "express";
import { Account, Databases, ID, Query } from "appwrite";
import client from "../lib/AppwriteClient";
import { toItem } from "../types/utils";

const router = Router();
const databases = new Databases(client);

// Replace with your database and collection IDs
const databaseId = process.env.APPWRITE_DATABASE_ID || "";
const collectionId = "pairings2";
const likesCollectionId = "likes";

// Get a pairing by ID
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ error: "Pairing ID is required." });
            return;
        }

        const result = await databases.getDocument(databaseId, collectionId, id);
        if (!result) {
            res.status(404).json({ error: "Pairing not found." });
            return;
        }

        const item1 = toItem(await databases.getDocument(databaseId, "items", result.item1));
        const item2 = toItem(await databases.getDocument(databaseId, "items", result.item2));
        if (!item1 || !item2) {
            res.status(404).json({ error: "One or both items not found." });
            return;
        }

        const pairing: Pairing = {
            id: result.$id,
            item1,
            item2,
        };
        res.status(200).json(pairing);

    } catch (error: any) {
        console.error("Error fetching pairing:", error.message);
        res.status(500).json({ error: "Failed to fetch pairing" });
    }
});

// Create a new pairing
router.post("/", async (req: Request, res: Response) => {
    try {
        const { item1, item2 } = req.body;

        if (!item1 || !item2) {
            res.status(400).json({ error: "Invalid request body. 'userId', 'item1' and 'item2' are required." });
            return;
        }

        const account = new Account(client);
        const user = await account.get();
        if (!user) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }

        const oldPairing = await databases.listDocuments(databaseId, collectionId, [
            Query.equal("item1", item1),
            Query.equal("item2", item2),
        ]);
        if (oldPairing.total > 0) {
            res.status(409).json({ error: "Pairing already exists." });
            return;
        }

        const id = ID.unique();
        const result = await databases.createDocument(databaseId, collectionId, id, {
            item1,
            item2,
        });
        res.status(201).json(result);

    } catch (error: any) {
        console.error("Error creating pairing:", error.message);
        res.status(500).json({ error: "Failed to create pairing" });
    }
});

// Remove a pairing
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Pairing ID is required." });
            return;
        }

        await databases.deleteDocument(databaseId, collectionId, id);
        res.status(204).send();

    } catch (error: any) {
        console.error("Error deleting pairing:", error.message);
        res.status(500).json({ error: "Failed to delete pairing" });
    }
});

// Like a pairing
router.post("/:id/like", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Pairing ID is required." });
            return;
        }

        const account = new Account(client);
        const user = await account.get();
        if (!user) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }

        // Fetch the pairing document
        const pairing = await databases.getDocument(databaseId, collectionId, id);
        if (!pairing) {
            res.status(404).json({ error: "Pairing not found." });
            return;
        }

        // Check if the user has already liked this pairing
        const existingLike = await databases.listDocuments(databaseId, likesCollectionId, [
            Query.equal("user", user.$id),
            Query.equal("pairing", id),
        ]);
        if (existingLike.total > 0) {
            res.status(409).json({ error: "You have already liked this pairing." });
            return;
        }

        // Create a new like document
        const likeId = ID.unique();
        await databases.createDocument(databaseId, likesCollectionId, likeId, {
            user: user.$id,
            pairing: id,
        });

        const likes = pairing.likes + 1;
        const updatedPairing = await databases.updateDocument(databaseId, collectionId, id, {
            likes,
        });

        res.status(200).json(updatedPairing);

    } catch (error: any) {
        console.error("Error liking pairing:", error.message);
        res.status(500).json({ error: "Failed to like pairing" });
    }
});

export default router;