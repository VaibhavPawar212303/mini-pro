"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/app/lib/auth";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(email); // Save login
    router.push(redirectPath); // Redirect to enroll
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="link-text">
          Don’t have an account?{" "}
          <span className="link" onClick={() => router.push(`/register?redirect=${redirectPath}`)}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
