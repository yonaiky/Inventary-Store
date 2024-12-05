import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const suppliers = [
  { name: "Acme Corp", products: 150, revenue: "$1,200,000", status: "Active" },
  { name: "Globex Corporation", products: 89, revenue: "$879,000", status: "Active" },
  { name: "Soylent Corp", products: 65, revenue: "$650,000", status: "Inactive" },
  { name: "Initech", products: 200, revenue: "$2,300,000", status: "Active" },
  { name: "Umbrella Corporation", products: 121, revenue: "$1,100,000", status: "Active" },
]

export function Suppliers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Suppliers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.name}>
                <TableCell className="font-medium">{supplier.name}</TableCell>
                <TableCell>{supplier.products}</TableCell>
                <TableCell>{supplier.revenue}</TableCell>
                <TableCell>{supplier.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

