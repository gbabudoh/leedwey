"use client";

import { useState } from "react";
import { 
  Grid, 
  List, 
  Globe, 
  ShieldCheck, 
  Star, 
  Package, 
  ArrowUpRight, 
  SlidersHorizontal, 
  CheckCircle2, 
  ChevronDown 
} from "lucide-react";
import Link from "next/link";

export default function DashboardProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCountry, setSelectedCountry] = useState("Global");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const countries = ["Global", "China", "Vietnam", "India", "Germany", "USA", "Japan"];
  const categories = ["All Categories", "Industrial Components", "Electronics", "Textile", "Raw Materials", "Automotive"];

  const products = [
    {
      id: "1",
      name: "High-Precision CNC X-900 Component",
      description: "Aerospace-grade aluminum alloy component with ±0.005mm tolerance.",
      price: 250,
      manufacturer: "Global PrecisionTech Ltd.",
      minOrder: "5 Units",
      rating: 4.9,
      verified: true,
      country: "China",
      category: "Industrial Components"
    },
    {
      id: "2",
      name: "Military-Grade PCB Controller V4",
      description: "Advanced multi-layer PCB for extreme thermal environments.",
      price: 85,
      manufacturer: "Skyline Electronics",
      minOrder: "100 Units",
      rating: 4.8,
      verified: true,
      country: "Vietnam",
      category: "Electronics"
    },
    {
      id: "3",
      name: "Automated Textile Loom Model S",
      description: "High-speed industrial weaving machinery with AI optimization.",
      price: 12500,
      manufacturer: "TextilePro Machinery",
      minOrder: "1 Unit",
      rating: 4.7,
      verified: true,
      country: "Germany",
      category: "Textile"
    },
    {
        id: "4",
        name: "Liquid Cooling Manifold Assembly",
        description: "Precision engineered thermal management solution for data centers.",
        price: 420,
        manufacturer: "ThermalFlow Systems",
        minOrder: "10 Units",
        rating: 4.9,
        verified: true,
        country: "Japan",
        category: "Industrial Components"
      }
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <Globe className="w-3.5 h-3.5 text-indigo-600" />
            Global Marketplace Node
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Secure Sourcing</h1>
          <p className="text-slate-500 font-medium">Browse physically audited manufacturing nodes.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative">
            <button 
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 hover:border-indigo-600 transition-all cursor-pointer min-w-[140px] justify-between shadow-sm"
            >
              {selectedCountry}
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isCountryOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isCountryOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {countries.map(country => (
                  <button 
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsCountryOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      selectedCountry === country 
                      ? "bg-indigo-50 text-indigo-600" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="p-3 bg-slate-900 text-white rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="space-y-8">
          <div className="glass-card p-6 rounded-[2rem] space-y-6">
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Categories</h3>
              <div className="space-y-1.5">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-200/20 rounded-full blur-xl -mr-8 -mt-8"></div>
                <ShieldCheck className="w-6 h-6 text-indigo-600 mb-3 relative z-10" />
                <h4 className="font-bold text-slate-900 text-xs mb-1 relative z-10">Audit Lock</h4>
                <p className="text-[10px] text-slate-500 font-medium leading-relaxed relative z-10">Only verified factory nodes are currently visible.</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Secure Inventory: {products.length} Products
            </p>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-xl transition-all ${viewMode === "grid" ? "bg-white shadow-md text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-xl transition-all ${viewMode === "list" ? "bg-white shadow-md text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map(product => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`}
                className="glass-card group p-5 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 flex flex-col h-full"
              >
                <div className="aspect-[4/3] rounded-[2rem] bg-slate-50 mb-5 flex items-center justify-center relative overflow-hidden group-hover:bg-indigo-50/50 transition-colors">
                  <Package className="w-12 h-12 text-slate-200 group-hover:scale-110 group-hover:text-indigo-200 transition-all duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm text-[9px] font-black text-slate-900 uppercase tracking-widest">{product.country}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200/50">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 px-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[10px] font-bold">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1 leading-tight">{product.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-4 line-clamp-2">{product.description}</p>
                </div>

                <div className="pt-5 border-t border-slate-50 flex items-center justify-between mt-auto px-1">
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Unit Price</p>
                    <p className="text-xl font-black text-slate-900">${product.price.toLocaleString()}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5 text-indigo-600 font-bold mb-0.5">
                      <span className="text-[10px] uppercase tracking-widest">Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-[9px] text-slate-400 font-bold truncate max-w-[100px]">{product.manufacturer}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
