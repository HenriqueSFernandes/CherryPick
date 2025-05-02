import { Router, Request, Response } from "express";
import { Account, Databases, ID } from "appwrite";
import client from "../lib/AppwriteClient";
import { toItem } from "../types/utils";

const router = Router();
const databases = new Databases(client);

// Replace with your database and collection IDs
const databaseId = process.env.APPWRITE_DATABASE_ID || "";
const collectionId = "pairings";

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
            user: result.userId,
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

        const pairing: Pairing = {
            id: ID.unique(),
            user: user.$id,
            item1: item1,
            item2: item2,
        };

        const result = await databases.createDocument(databaseId, collectionId, pairing.id, {
            user: pairing.user,
            item1: pairing.item1,
            item2: pairing.item2,
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

export default router;