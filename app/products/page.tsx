"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Search, Grid, List, Globe, ShieldCheck, Star, Package, ArrowUpRight, SlidersHorizontal, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Marketplace Header */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                <Globe className="w-4 h-4" />
                Global B2B Marketplace
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Sourcing Hub</h1>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative">
                  <button 
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 hover:border-indigo-600 transition-all cursor-pointer whitespace-nowrap min-w-[160px] justify-between"
                  >
                     <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-indigo-600" />
                        {selectedCountry}
                     </div>
                     <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isCountryOpen ? "rotate-180 text-indigo-600" : ""}`} />
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

               <div className="flex-1 md:w-80 relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-600 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search secure nodes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                  />
               </div>
               <button className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  <SlidersHorizontal className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar Filters */}
            <aside className="space-y-10">
               <div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest mb-6">Global Region</h3>
                  <div className="space-y-2">
                     {countries.map(country => (
                        <button 
                           key={country}
                           onClick={() => setSelectedCountry(country)}
                           className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all border ${
                              selectedCountry === country 
                              ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100" 
                              : "bg-white border-transparent text-slate-500 hover:bg-slate-50"
                           }`}
                        >
                           {country}
                        </button>
                     ))}
                  </div>
               </div>

               <div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest mb-6">Categories</h3>
                  <div className="space-y-2">
                     {categories.map(cat => (
                        <button 
                           key={cat}
                           onClick={() => setSelectedCategory(cat)}
                           className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all border ${
                              selectedCategory === cat 
                              ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-200" 
                              : "bg-white border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                           }`}
                        >
                           {cat}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100">
                  <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Verified Sourcing</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Only viewing physically audited manufacturing nodes with active certifications.</p>
                  <div className="mt-6">
                     <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-10 h-6 bg-slate-200 rounded-full relative group-hover:bg-slate-300 transition-colors">
                           <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700">Audit Lock</span>
                     </label>
                  </div>
               </div>
            </aside>

            {/* Products List */}
            <div className="lg:col-span-3">
               <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Showing {products.length} Secure Products</p>
                  <div className="flex items-center gap-2">
                     <button 
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-600"}`}
                     >
                        <Grid className="w-5 h-5" />
                     </button>
                     <button 
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-600"}`}
                     >
                        <List className="w-5 h-5" />
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {products.map(product => (
                     <Link 
                        key={product.id} 
                        href={`/products/${product.id}`}
                        className="group p-6 rounded-[2.5rem] border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 flex flex-col h-full"
                     >
                        <div className="aspect-[4/3] rounded-[2rem] bg-slate-50 border border-slate-50 mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-indigo-50/30 transition-colors">
                           <Package className="w-16 h-16 text-slate-200 group-hover:scale-110 group-hover:text-indigo-200 transition-all duration-500" />
                           <div className="absolute top-4 left-4 flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-slate-100 text-[9px] font-extrabold text-slate-900 uppercase tracking-widest">{product.country}</span>
                           </div>
                           <div className="absolute top-4 right-4">
                              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200/50">
                                 <CheckCircle2 className="w-4 h-4 text-white" />
                              </div>
                           </div>
                        </div>

                        <div className="flex-1">
                           <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 text-[8px] font-extrabold uppercase tracking-widest">{product.category}</span>
                              <div className="flex items-center gap-1 text-amber-500">
                                 <Star className="w-3 h-3 fill-current" />
                                 <span className="text-[10px] font-bold">{product.rating}</span>
                              </div>
                           </div>
                           <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-tight">{product.name}</h3>
                           <p className="text-sm text-slate-500 font-medium mb-6 line-clamp-2">{product.description}</p>
                        </div>

                        <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                           <div>
                              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Unit Price From</p>
                              <p className="text-2xl font-extrabold text-slate-900">${product.price.toLocaleString()}</p>
                           </div>
                           <div className="flex flex-col items-end">
                              <div className="flex items-center gap-2 text-indigo-600 font-bold mb-1">
                                 <span className="text-xs uppercase tracking-widest">Sourcing Node</span>
                                 <ArrowUpRight className="w-4 h-4" />
                              </div>
                              <p className="text-[10px] text-slate-400 font-bold truncate max-w-[120px]">{product.manufacturer}</p>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
