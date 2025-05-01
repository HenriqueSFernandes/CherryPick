"use client";

import { login, register } from "@/lib/Authenticator";

export default function LoginPage() {
	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget as HTMLFormElement);
		const username = formData.get("email") as string;
		const password = formData.get("password") as string;
		await login(username, password);
	};

	const handleRegister = async (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget as HTMLFormElement);
		const username = formData.get("email") as string;
		const password = formData.get("password") as string;
		const confirmPassword = formData.get("confirm-password") as string;
		await register(username, password, confirmPassword);
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" />
				</div>
				<button type="submit">Login</button>
			</form>

			<h1>Register</h1>
			<form onSubmit={handleRegister}>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" />
				</div>
				<div>
					<label htmlFor="confirm-password">Confirm Password:</label>
					<input
						type="password"
						id="confirm-password"
						name="confirm-password"
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
}
