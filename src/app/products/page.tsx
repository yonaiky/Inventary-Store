import { Suspense } from "react"
import { ProductsTable } from "./products-table"
import { CreateProductButton } from "./create-product-button"

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <div className="mb-4">
        <CreateProductButton />
      </div>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsTable />
      </Suspense>
    </div>
  )
}

