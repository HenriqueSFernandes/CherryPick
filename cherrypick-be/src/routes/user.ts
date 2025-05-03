import { Router, Request, Response } from "express";
import { Databases, Query } from "appwrite";
import client from "../lib/AppwriteClient";

const router = Router();
const databases = new Databases(client);

// Replace with your database and collection IDs
const databaseId = process.env.APPWRITE_DATABASE_ID || "";
const likesCollectionId = process.env.APPWRITE_LIKES_COLLECTION_ID || "";
const pairingsCollectionId = process.env.APPWRITE_PAIRINGS_COLLECTION_ID || "";

// Get pairings liked by a user
router.get("/:userId/likes", async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            res.status(400).json({ error: "User ID is required." });
            return;
        }

        // Query the likes collection for documents where the user matches
        const likesResult = await databases.listDocuments(databaseId, likesCollectionId, [
            Query.equal("userId", userId),
        ]);

        if (likesResult.documents.length === 0) {
            res.status(404).json({ error: "No liked pairings found for this user." });
            return;
        }

        // Extract pairing IDs from the likes documents
        const pairingIds = likesResult.documents.map((like) => like.pairingId);

        // Query the pairings collection for the liked pairings
        const pairingsResult = await databases.listDocuments(databaseId, pairingsCollectionId, [
            Query.equal("$id", pairingIds),
        ]);

        res.status(200).json(pairingsResult.documents);

    } catch (error: any) {
        console.error("Error fetching liked pairings:", error.message);
        res.status(500).json({ error: "Failed to fetch liked pairings." });
    }
});

export default router;