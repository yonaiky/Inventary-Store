import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todos los usuarios
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching users", error: error.message }, { status: 500 });
  }
}

// Crear un nuevo usuario
export async function POST(request : Request) {
  try {
    const body = await request.json();
    const newUser = await prisma.user.create({
      data: body,
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 500 });
  }
}

// Actualizar un usuario por ID
export async function PUT(request : Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ message: "Error updating user", error: error.message }, { status: 500 });
  }
}

// Eliminar un usuario por ID
export async function DELETE(request : Request) {
	try {
	  const { searchParams } = new URL(request.url);
	  const idParam = searchParams.get("id");
  
	  if (!idParam) {
		return NextResponse.json({ message: "User ID is required" }, { status: 400 });
	  }
  
	  const id = parseInt(idParam, 10);
  
	  if (isNaN(id)) {
		return NextResponse.json({ message: "Invalid User ID" }, { status: 400 });
	  }
  
	  await prisma.user.delete({
		where: { id },
	  });
	  return NextResponse.json({ message: "User deleted successfully" });
	} catch (error) {
	  return NextResponse.json({ message: "Error deleting user", error: error.message }, { status: 500 });
	}
  }
  