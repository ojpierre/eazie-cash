"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypewriterEffect } from "../components/typewriter-effect";
import { ErrorMessage } from "../components/ErrorMessage";
import { loginUser } from "@/app/services/api";
import { useAuth } from "@/app/context/AuthContext";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { dispatch } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token, user } = await loginUser({ email, password });
      localStorage.setItem("token", token);
      dispatch({ type: "LOGIN", payload: user });
      router.push("/dashboard");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-gradient-to-br from-purple-400 to-purple-600 p-12 flex flex-col justify-center items-center text-white">
        <div className="text-4xl font-bold mb-8">EazieCash</div>
        <TypewriterEffect
          phrases={[
            "Welcome Back!",
            "Access Your Account",
            "Manage Your Finances",
            "Secure and Easy",
          ]}
        />
      </div>
      <div className="w-1/2 bg-white p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Sign In to EazieCash
          </h1>
          {error && <ErrorMessage title="Error" message={error} />}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
