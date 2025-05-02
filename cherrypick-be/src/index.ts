import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from TypeScript + Express!");
});

const server = app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

server.on("error", (err) => {
	console.error(`Failed to start server: ${err.message}`);
	process.exit(1);
});
