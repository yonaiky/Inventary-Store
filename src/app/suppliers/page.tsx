import { Suspense } from "react"
import { SuppliersTable } from "./suppliers-table"
import { CreateSupplierButton } from "./create-supplier-button"
import { SupplierStats } from "./supplier-stats"
import { SupplierCharts } from "./supplier-charts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Supplier Dashboard</h1>

        <div className="mb-8">
          <SupplierStats />
        </div>

        <Tabs defaultValue="table" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="table">Suppliers Table</TabsTrigger>
            <TabsTrigger value="charts">Supplier Charts</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Suppliers</CardTitle>
                <CreateSupplierButton />
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div className="text-center py-4">Loading suppliers...</div>}>
                  <SuppliersTable />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="charts">
            <SupplierCharts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

