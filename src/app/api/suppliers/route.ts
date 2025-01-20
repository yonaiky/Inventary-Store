import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todos los proveedores
export async function GET() {
  try {
    const suppliers = await prisma.supplier.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(suppliers, { status: 200 });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return NextResponse.json({ message: "Error fetching suppliers", error: error.message }, { status: 500 });
  }
}

// Crear un nuevo proveedor
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contactInfo } = body;

    if (!name || !contactInfo) {
      return NextResponse.json({ message: "Name and contactInfo are required." }, { status: 400 });
    }

    const newSupplier = await prisma.supplier.create({
      data: { name, contactInfo },
    });

    return NextResponse.json(newSupplier, { status: 201 });
  } catch (error) {
    console.error("Error creating supplier:", error);
    return NextResponse.json({ message: "Error creating supplier", error: error.message }, { status: 500 });
  }
}

// Manejo de métodos no permitidos
export async function OPTIONS() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
