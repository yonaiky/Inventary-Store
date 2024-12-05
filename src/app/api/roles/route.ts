import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todos los roles
export async function GET() {
  try {
    const roles = await prisma.role.findMany();
    return NextResponse.json(roles);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching roles", error: error.message }, { status: 500 });
  }
}

// Crear un nuevo rol
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newRole = await prisma.role.create({
      data: body,
    });
    return NextResponse.json(newRole, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating role", error: error.message }, { status: 500 });
  }
}

// Actualizar un rol por ID
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ message: "Role ID is required" }, { status: 400 });
    }

    const updatedRole = await prisma.role.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(updatedRole);
  } catch (error) {
    return NextResponse.json({ message: "Error updating role", error: error.message }, { status: 500 });
  }
}

// Eliminar un rol por ID
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"), 10);

    if (!id) {
      return NextResponse.json({ message: "Role ID is required" }, { status: 400 });
    }

    await prisma.role.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Role deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting role", error: error.message }, { status: 500 });
  }
}
