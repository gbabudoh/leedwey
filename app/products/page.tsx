"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock products data - replace with actual data from API
  const products = [
    {
      id: "1",
      name: "Industrial Steel Components",
      description: "High-quality steel components for manufacturing",
      price: 1250,
      currency: "USD",
      image: "/api/placeholder/400/300",
      manufacturer: "SteelWorks Inc.",
      minOrder: 100,
    },
    {
      id: "2",
      name: "Electronic Circuit Boards",
      description: "Premium PCB boards with advanced circuitry",
      price: 45,
      currency: "USD",
      image: "/api/placeholder/400/300",
      manufacturer: "TechElectronics",
      minOrder: 500,
    },
    {
      id: "3",
      name: "Textile Manufacturing Equipment",
      description: "State-of-the-art textile production machinery",
      price: 15000,
      currency: "USD",
      image: "/api/placeholder/400/300",
      manufacturer: "TextilePro",
      minOrder: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDF0F3]">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Catalog</h1>
            <p className="text-gray-600">Discover products from verified manufacturers worldwide</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="relative h-48 bg-[#F3E5D7] rounded-t-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400">Product Image</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-[#F49B41]">
                            ${product.price.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500">Min. order: {product.minOrder}</p>
                        </div>
                        <Button>View Details</Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">by {product.manufacturer}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-32 h-32 bg-[#F3E5D7] rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-400 text-sm">Image</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-[#F49B41]">
                                ${product.price.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-500">
                                Min. order: {product.minOrder} • by {product.manufacturer}
                              </p>
                            </div>
                            <Button>View Details</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

