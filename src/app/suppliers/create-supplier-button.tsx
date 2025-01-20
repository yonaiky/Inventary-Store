"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateSupplierButton() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("") // Limpiar errores previos

    try {
      const response = await fetch("/api/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contactInfo }),
      })

      if (!response.ok) {
        const { message } = await response.json()
        throw new Error(message || "Failed to create supplier")
      }

      // Resetear estado y cerrar el modal
      setOpen(false)
      setName("")
      setContactInfo("")
    } catch (error: any) {
      setError(error.message || "Unexpected error occurred")
      console.error("Failed to create supplier:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Supplier</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Supplier</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contactInfo" className="text-right">
              Contact Info
            </Label>
            <Input
              id="contactInfo"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <Button type="submit" className="ml-auto">
            Create Supplier
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
