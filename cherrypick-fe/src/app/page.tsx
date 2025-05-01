"use client";
import { Client } from "appwrite";

const client = new Client();
client
	.setEndpoint("http://144.91.115.254/v1")
	.setProject("68139ae300328e5249a3");

export default function Home() {
	return <p>hello</p>;
}
