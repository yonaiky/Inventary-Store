'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirigir al usuario si el inicio de sesión es exitoso
        router.push("/login/register"); 
      } else {
        // Mostrar el error si el inicio de sesión falla
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  return (
	<main className="flex min-h-screen flex-col items-center justify-center p-24">
 <div className="w-full flex justify-end items-center bg-gradient-to-br from-purple-900 to-blue-100 p-4">
      <div className="w-full max-w-screen-md">
        <div className="bg-white shadow-2xl rounded-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Store System</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Username or Email</Label>
              <Input
                id="email"
                type="text"  // Cambié de 'email' a 'text' para aceptar tanto email como nombre de usuario
                placeholder="you@example.com"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">Remember me</label>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <div className="text-center space-y-2">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </Link>
            <div className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/login/register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
   
  );
}
