import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: '.env' })

import searchRoutes from "./routes/search";

const app = express();
const port = process.env.PORT || 3001;

// Use the search route
app.use("/search", searchRoutes);

app.get("/", (req, res) => {
    res.send("Hello from TypeScript + Express!");
});

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

server.on("error", (err) => {
    console.error(`Failed to start server: ${err.message}`);
    process.exit(1);
});