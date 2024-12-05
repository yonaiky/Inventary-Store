import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// Inicio de sesión
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { identifier, password } = body; // `identifier` puede ser correo o nombre de usuario

    if (!identifier || !password) {
      return NextResponse.json({
        message: "Identifier and password are required",
      }, { status: 400 });
    }

    // Buscar al usuario por correo o nombre de usuario
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { username: identifier },
        ],
      },
    });

    if (!user) {
      return NextResponse.json({
        message: "Invalid username or email",
      }, { status: 401 });
    }
	console.log("Contraseña proporcionada:", password);
	console.log("Contraseña encriptada almacenada:", user.password);
    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
	
	
    if (!isPasswordValid) {
      return NextResponse.json({
        message: "Invalid password",
      }, { status: 401 });
    }

    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json({
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error during login",
      error: error.message,
    }, { status: 500 });
  }
}
