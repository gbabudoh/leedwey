"use client";

import { 
  Heart, 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Zap,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CorporateSavedPage() {
  const factories = [
    { name: "SinoPrecision Ltd.", location: "Shenzhen, China", category: "High-Precision CNC", rating: 4.9, nodes: 12, speed: "Fast", vetted: true },
    { name: "VisionCore Systems", location: "Guangzhou, China", category: "Industrial Optics", rating: 4.7, nodes: 8, speed: "Ultra", vetted: true },
    { name: "MotorWave Dynamic", location: "Dongguan, China", category: "Servo Motors", rating: 4.8, nodes: 15, speed: "Standard", vetted: true },
    { name: "PrecisionTech Hub", location: "Ningbo, China", category: "Die-Casting", rating: 4.6, nodes: 5, speed: "Fast", vetted: true },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-4xl font-black text-slate-900 tracking-tight">Tier-1 Factory Repository</h1>
           <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              Verified Enterprise Supply Network
           </p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search Verified Nodes..." 
                className="pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600/20 transition-all w-64 shadow-sm"
              />
           </div>
           <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm cursor-pointer">
              <Filter className="w-5 h-5 cursor-pointer" />
           </button>
        </div>
      </div>

      {/* Factories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
         {factories.map((factory) => (
            <div key={factory.name} className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group overflow-hidden flex flex-col cursor-pointer">
               <div className="h-48 bg-slate-900 relative p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
                  <div className="flex items-center justify-between relative z-10">
                     <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[8px] font-black text-white uppercase tracking-widest border border-white/10">
                        Tier-1 Factory
                     </div>
                     <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-rose-400 hover:bg-rose-500 hover:text-white transition-all cursor-pointer">
                        <Heart className="w-4 h-4 fill-rose-400 group-hover:fill-white cursor-pointer" />
                     </button>
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-2xl font-black text-white tracking-tight">{factory.name}</h3>
                     <p className="text-indigo-300 text-xs font-bold flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {factory.location}
                     </p>
                  </div>
               </div>
               
               <div className="p-10 space-y-8 flex-1">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Category</p>
                        <p className="text-xs font-black text-slate-900">{factory.category}</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Capacity Node</p>
                        <p className="text-xs font-black text-slate-900">{factory.nodes} Active</p>
                     </div>
                  </div>

                  <div className="flex items-center justify-between py-6 border-y border-slate-50">
                     <div className="flex items-center gap-2">
                        <div className="flex items-center">
                           {[...Array(5)].map((_, i) => (
                              <Star key={i} className={cn("w-3 h-3", i < 4 ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200")} />
                           ))}
                        </div>
                        <span className="text-xs font-black text-slate-900">{factory.rating}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{factory.speed} Response</span>
                     </div>
                  </div>

                  <button className="w-full py-5 bg-slate-900 text-white font-black rounded-[2rem] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95 cursor-pointer uppercase tracking-widest text-[10px]">
                     Initiate Enterprise RFQ <ArrowRight className="w-4 h-4 cursor-pointer" />
                  </button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
}
