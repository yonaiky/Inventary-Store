import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SupplierStats() {
  // En una aplicación real, obtendrás estos datos desde tu backend
  const stats = [
    { title: "Total Suppliers", value: "253" },
    { title: "Active Suppliers", value: "200" },
    { title: "New This Month", value: "12" },
    { title: "Average Response Time", value: "2.4 days" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
