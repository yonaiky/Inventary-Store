import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProducts() {
  return await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  })
}

export async function createProduct(data: {
  name: string
  description: string
  price: number
  stock: number
  categoryId: number
}) {
  return await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
      categoryId: data.categoryId,
    },
  })
}

