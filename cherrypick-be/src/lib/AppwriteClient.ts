import { Client } from "appwrite";

const client = new Client();

client
	.setEndpoint(process.env.APPWRITE_ENDPOINT || "")
	.setProject(process.env.APPWRITE_PROJECT || "");

export default client;
