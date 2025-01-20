import { Metadata } from 'next';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Users, BarChart, Settings,ShoppingCart  } from 'lucide-react';
import Link from "next/link";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen">
            <Sidebar className="hidden md:flex">
              <SidebarHeader>
                <h2 className="text-xl font-bold p-4">My Store App</h2>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/suppliers">
                        <Users className="mr-2 h-4 w-4" />
                        Suppliers
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
				  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/products">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Products
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/analytics">
                        <BarChart className="mr-2 h-4 w-4" />
                        Analytics
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>

            <div className="flex-1 flex  overflow-hidden">
              <header className="bg-white shadow-sm z-10">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
                  <SidebarTrigger/>
                  <h1 className="text-2xl font-semibold text-gray-900"></h1>
                </div>
              </header>
              <main >
                <div className="flex-1 flex flex-col">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
