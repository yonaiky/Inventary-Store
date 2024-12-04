"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RegisterUserModal } from "./user/register-user"; 

export function Login() {
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4 w-80">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
      <div className="mt-4">
        <Button variant="outline" onClick={() => setShowRegisterModal(true)}>
          Register
        </Button>
      </div>
      {showRegisterModal && <RegisterUserModal />}
    </div>
  )
}
