"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  ShoppingCart,
  TrendingUp,
  MessageSquare,
  Package,
  DollarSign,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F49B41] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const stats = [
    {
      title: "Total Products",
      value: "0",
      icon: Package,
      color: "text-[#F49B41]",
      bgColor: "bg-[#F49B41]/10",
    },
    {
      title: "Active Orders",
      value: "0",
      icon: ShoppingCart,
      color: "text-[#ACC8E5]",
      bgColor: "bg-[#ACC8E5]/10",
    },
    {
      title: "Messages",
      value: "0",
      icon: MessageSquare,
      color: "text-[#F49B41]",
      bgColor: "bg-[#F49B41]/10",
    },
    {
      title: "Revenue",
      value: "$0",
      icon: DollarSign,
      color: "text-[#ACC8E5]",
      bgColor: "bg-[#ACC8E5]/10",
    },
  ];

  const quickActions = [
    {
      title: "Add Product",
      description: "List a new product in your catalog",
      icon: Package,
      href: "/dashboard/products/new",
      color: "from-[#F49B41] to-[#e88a2e]",
    },
    {
      title: "View Orders",
      description: "Manage your orders and shipments",
      icon: ShoppingCart,
      href: "/dashboard/orders",
      color: "from-[#ACC8E5] to-[#8fb3d9]",
    },
    {
      title: "Messages",
      description: "Communicate with buyers and sellers",
      icon: MessageSquare,
      href: "/messages",
      color: "from-[#F49B41] to-[#e88a2e]",
    },
    {
      title: "Analytics",
      description: "View your business insights",
      icon: TrendingUp,
      href: "/dashboard/analytics",
      color: "from-[#ACC8E5] to-[#8fb3d9]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDF0F3]">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {session.user?.name?.split(" ")[0]}!
            </h1>
            <p className="text-gray-600">Here's what's happening with your business today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-lg`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action) => (
                <Link key={action.title} href={action.href}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}
                      >
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest order activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No orders yet</p>
                  <Link href="/dashboard/orders">
                    <Button variant="outline" className="mt-4">
                      View All Orders
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Latest conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No messages yet</p>
                  <Link href="/messages">
                    <Button variant="outline" className="mt-4">
                      Go to Messages
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

