'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function RegisterPage() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          username: `${name}.${lastname}`,  
          phoneNumber,
          email,
          password,
          roleId: 2, 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/login"); 
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  return (
    <div className="w-full flex justify-end items-center bg-gradient-to-br from-purple-900 to-blue-100 p-4">
      <div className="w-full max-w-screen-md">
        <div className="bg-white shadow-2xl rounded-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Store System</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">First Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Matos"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="jhon.matos"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="123-456-7890"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              Sign Up
            </Button>
          </form>
          <div className="text-center space-y-2">
            <Link href="/login" className="text-sm text-blue-600 hover:underline">
              Already have an account? Log in
            </Link>
            <div className="text-sm text-gray-600">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
