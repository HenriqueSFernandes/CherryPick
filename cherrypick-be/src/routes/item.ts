import { Router, Request, Response } from "express";
import { Databases, Query } from "appwrite";
import client from "../lib/AppwriteClient";
import { toItem } from "../types/utils";

const router = Router();
const databases = new Databases(client);

// Replace with your database and collection IDs
const databaseId = process.env.APPWRITE_DATABASE_ID || "";
const pairingsCollectionId = "pairings";

// Get all related pairings for an item
router.get("/:id/pairings", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ error: "Item ID is required." });
            return;
        }

        // Query pairings where the item is either `item1` or `item2`
        const result = await databases.listDocuments(databaseId, pairingsCollectionId, [
            Query.or([
                Query.equal("item1", id),
                Query.equal("item2", id),
            ]),
        ]);


        const pairs = [];
        for (const doc of result.documents) {
            // Fetch the item details for item1 and item2
            const item1 = toItem(await databases.getDocument(databaseId, "items", doc.item1));
            const item2 = toItem(await databases.getDocument(databaseId, "items", doc.item2));

            if (item1 && item2) {
                pairs.push({
                    id: doc.$id,
                    user: doc.user,
                    item1: item1,
                    item2: item2,
                });
            }
        }

        res.status(200).json(pairs);

    } catch (error: any) {
        console.error("Error fetching related pairings:", error.message);
        res.status(500).json({ error: "Failed to fetch related pairings" });
    }
});

router.get("/:id/ai-pairings", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ error: "Item ID is required." });
            return;
        }

        // Query pairings where the item is either `item1` or `item2`
        const result = await databases.listDocuments(databaseId, pairingsCollectionId, [
            Query.or([
                Query.equal("item1", id),
                Query.equal("item2", id),
            ]),
        ]);


        const pairs = [];
        for (const doc of result.documents) {
            // Fetch the item details for item1 and item2
            const item1 = toItem(await databases.getDocument(databaseId, "items", doc.item1));
            const item2 = toItem(await databases.getDocument(databaseId, "items", doc.item2));

            if (item1 && item2) {
                pairs.push({
                    id: doc.$id,
                    user: doc.user,
                    item1: item1,
                    item2: item2,
                });
            }
        }

        res.status(200).json(pairs);

    } catch (error: any) {
        console.error("Error fetching related pairings:", error.message);
        res.status(500).json({ error: "Failed to fetch related pairings" });
    }
});

export default router;