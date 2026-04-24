"use client";

import { 
  Heart, 
  Star, 
  MapPin, 
  Search, 
  ShieldCheck,
  Zap,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

export default function SavedFactoriesPage() {
  const factories = [
    {
      id: "F-9002",
      name: "PrecisionTech Shenzhen",
      location: "Shenzhen, China",
      category: "CNC Machining",
      rating: 4.9,
      reviews: 124,
      verified: true,
      image: "P"
    },
    {
      id: "F-8812",
      name: "Vision Electronics Hub",
      location: "Dongguan, China",
      category: "SMT Assembly",
      rating: 4.8,
      reviews: 89,
      verified: true,
      image: "V"
    },
    {
      id: "F-7721",
      name: "SensorWave Dynamics",
      location: "Bao'an, China",
      category: "Sensor R&D",
      rating: 4.7,
      reviews: 56,
      verified: true,
      image: "S"
    },
    {
      id: "F-6601",
      name: "Global Logistics Corp",
      location: "Guangzhou, China",
      category: "3PL Logistics",
      rating: 4.9,
      reviews: 210,
      verified: true,
      image: "G"
    }
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-500" />
            Strategic Partners
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Saved Factories</h1>
          <p className="text-slate-500 font-medium text-sm">Your curated shortlist of high-performance manufacturing nodes.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search favorites..." 
              className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-600/5 transition-all w-full md:w-64"
            />
          </div>
        </div>
      </div>

      {/* Factories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {factories.map((factory) => (
          <div key={factory.id} className="glass-card group hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 rounded-[2.5rem] overflow-hidden flex flex-col">
            <div className="p-8 space-y-6 flex-1">
               <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-indigo-100 group-hover:scale-110 transition-transform">
                     {factory.image}
                  </div>
                  <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                     <Heart className="w-5 h-5 fill-rose-500" />
                  </button>
               </div>

               <div>
                  <div className="flex items-center gap-2 mb-1">
                     <h3 className="text-lg font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{factory.name}</h3>
                     {factory.verified && <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-slate-400 font-bold flex items-center gap-1 uppercase tracking-widest">
                     <MapPin className="w-3 h-3" /> {factory.location}
                  </p>
               </div>

               <div className="flex items-center gap-4 py-4 border-y border-slate-50">
                  <div>
                     <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span className="text-xs font-black">{factory.rating}</span>
                     </div>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{factory.reviews} Audits</p>
                  </div>
                  <div className="w-px h-6 bg-slate-100"></div>
                  <div>
                     <p className="text-xs font-black text-slate-900">{factory.category}</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Main Sector</p>
                  </div>
               </div>
            </div>

            <div className="p-4 bg-slate-50/50 group-hover:bg-white transition-colors border-t border-slate-50">
               <button className="w-full py-4 bg-white border border-slate-100 rounded-2xl text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all shadow-sm flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Contact Node
               </button>
            </div>
          </div>
        ))}

        {/* Add New Slot */}
        <Link href="/products" className="glass-card border-dashed border-2 border-slate-200 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:border-indigo-600 transition-all">
           <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-all">
              <Zap className="w-8 h-8 text-slate-300 group-hover:text-indigo-600" />
           </div>
           <h3 className="font-black text-slate-900 mb-2">Expand Network</h3>
           <p className="text-xs text-slate-400 font-medium">Discover and vet more verified manufacturers.</p>
        </Link>
      </div>
    </div>
  );
}
