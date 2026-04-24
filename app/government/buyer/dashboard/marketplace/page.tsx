"use client";

import { 
  Search, 
  Filter, 
  Package, 
  Globe, 
  Boxes, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Building2,
  ArrowRight,
  ShoppingCart,
  Anchor
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function GovernmentMarketplace() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Public Infrastructure", "Medical Supplies", "Defense Systems", "National Logistics"];

  const products = [
    {
      id: "GOV-9920",
      name: "National Power Grid Nodes",
      lotSize: "1,200 Units",
      price: "$4,200.00 / unit",
      factory: "SinoPrecision National Node",
      status: "Tender Verified",
      image: "Grid lot",
      specs: ["ISO 9001", "Transparency Audited"]
    },
    {
      id: "GOV-8812",
      name: "Medical Grade Logistics Lot",
      lotSize: "5,000 Units",
      price: "$85.00 / unit",
      factory: "VisionCore Public Health",
      status: "Direct Procurement",
      image: "Medical lot",
      specs: ["CE Certified", "Priority Shipping"]
    },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Marketplace Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
           <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              <Anchor className="w-3.5 h-3.5" />
              Public Tender Terminal
           </div>
           <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
             National <span className="text-indigo-600">Sourcing</span>
           </h1>
           <p className="text-slate-500 font-bold max-w-xl text-lg leading-snug">
             Maintaining radical transparency in public procurement across the national industrial mesh.
           </p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search Bulk Lots or Factories..." 
                className="pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600/20 transition-all w-80 shadow-sm"
              />
           </div>
           <button className="p-4 bg-slate-900 text-white rounded-2xl shadow-xl hover:bg-indigo-600 transition-all active:scale-95 cursor-pointer">
              <Filter className="w-5 h-5 cursor-pointer" />
           </button>
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
         {categories.map((cat) => (
           <button 
             key={cat}
             onClick={() => setActiveCategory(cat)}
             className={cn(
               "px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border cursor-pointer",
               activeCategory === cat ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200" : "bg-white text-slate-400 border-slate-100 hover:text-slate-600 hover:bg-slate-50"
             )}
           >
             {cat}
           </button>
         ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Left Column: Product Grid */}
        <div className="lg:col-span-8 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group overflow-hidden flex flex-col cursor-pointer">
                   <div className="h-56 bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest border border-slate-200 shadow-sm">
                         {product.id}
                      </div>
                      <Package className="w-20 h-20 text-slate-300 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                   </div>

                   <div className="p-10 space-y-6 flex-1">
                      <div>
                         <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                         <p className="text-xs font-bold text-slate-400 flex items-center gap-1 mt-1 uppercase tracking-widest">
                            <Building2 className="w-3.5 h-3.5" /> {product.factory}
                         </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lot Size</p>
                            <p className="text-sm font-black text-slate-900">{product.lotSize}</p>
                         </div>
                         <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unit Price</p>
                            <p className="text-sm font-black text-indigo-600">{product.price}</p>
                         </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                         {product.specs.map((spec, i) => (
                           <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest rounded-md border border-indigo-100">
                              {spec}
                           </span>
                         ))}
                      </div>

                      <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{product.status}</span>
                         </div>
                         <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95 cursor-pointer">
                            <ShoppingCart className="w-4 h-4 cursor-pointer" />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <button className="w-full py-6 border-2 border-dashed border-slate-200 rounded-[3rem] text-slate-400 font-black uppercase tracking-[0.3em] hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/30 transition-all text-[10px] cursor-pointer">
              Load More Sourcing Data
           </button>
        </div>

        {/* Right Column: Marketplace Intelligence */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-slate-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <TrendingUp className="w-12 h-12 text-indigo-400 mb-8" />
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Market Pulse</h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Real-time Sourcing Trends</p>
              
              <div className="space-y-6 mb-12">
                 {[
                   { label: "Electronics Hub", trend: "+12.4%", load: 85 },
                   { label: "Industrial Raw", trend: "+18.9%", load: 92 },
                   { label: "Logistics Routing", trend: "-2.1%", load: 45 },
                 ].map((item, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider">{item.label}</span>
                          <span className="text-[10px] font-black text-emerald-400">{item.trend}</span>
                       </div>
                       <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${item.load}%` }}></div>
                       </div>
                    </div>
                 ))}
              </div>

              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-[2rem] hover:bg-indigo-50 transition-all shadow-xl active:scale-95 cursor-pointer uppercase tracking-widest text-xs">
                 Request Capacity Forecast
              </button>
           </div>

           <div className="bg-indigo-600 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
              <ShieldCheck className="w-12 h-12 text-white/50 mb-8" />
              <h3 className="text-2xl font-black mb-4 tracking-tight">Vetted Nodes Only</h3>
              <p className="text-indigo-100 text-sm font-medium leading-relaxed mb-10">
                All factories listed in this terminal have passed physical audit and financial verification. 100% Escrow Protection active.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20">
                 <Globe className="w-8 h-8 text-indigo-200" />
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest">Trade Protocol</p>
                    <p className="text-xs font-bold text-white/70">AES-GCM Node Sync Active</p>
                 </div>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-black text-slate-900 text-xl tracking-tight">Tier-1 Access</h3>
                 <Zap className="w-5 h-5 text-indigo-600 animate-pulse" />
              </div>
              <p className="text-slate-400 text-sm font-bold leading-relaxed mb-10">
                 Connect your node to the global factory mesh to receive instant alerts for production capacity availability.
              </p>
              <button className="w-full py-4 border-2 border-slate-50 text-slate-400 font-black rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all text-[10px] uppercase tracking-widest cursor-pointer">
                 Initialize Mesh Connection
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
