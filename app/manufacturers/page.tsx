"use client";

import { Navbar } from "@/components/layout/navbar";
import { Building2, Search, Filter, ShieldCheck, MapPin, Star } from "lucide-react";
import Link from "next/link";

export default function ManufacturersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest font-sans">Audited Facilities</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Verified Manufacturers</h1>
              <p className="text-slate-500 font-medium text-lg mt-4">Source directly from verified, high-precision manufacturing units worldwide.</p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search by factory name..." 
                    className="pl-12 pr-6 py-3.5 rounded-2xl bg-white border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none w-[300px] transition-all font-medium"
                  />
               </div>
               <button className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
                  <Filter className="w-5 h-5 text-slate-600 cursor-pointer" />
               </button>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-12 overflow-x-auto">
           <div className="flex items-center gap-3 pb-4">
              {["All Factories", "Industrial Parts", "Electronics", "Textiles", "Automotive", "Medical Gear", "Chemicals"].map((cat, i) => (
                 <button 
                  key={cat}
                  className={`px-6 py-2.5 rounded-xl whitespace-nowrap font-bold text-sm transition-all cursor-pointer ${
                    i === 0 ? "bg-slate-900 text-white shadow-lg shadow-slate-200" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                 >
                    {cat}
                 </button>
              ))}
           </div>
        </section>

        {/* Manufacturers List (Demo Grid) */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/50 hover:border-indigo-100 transition-all group cursor-pointer">
                    <div className="flex items-start justify-between mb-8 cursor-pointer">
                       <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform cursor-pointer">
                          <Building2 className="w-10 h-10 text-slate-400 group-hover:text-indigo-600 transition-colors cursor-pointer" />
                       </div>
                       <div className="flex flex-col items-end cursor-pointer">
                          <div className="flex items-center gap-1 text-amber-500 font-bold mb-1 cursor-pointer">
                             <Star className="w-4 h-4 fill-current cursor-pointer" />
                             <span className="cursor-pointer">4.{9-i}</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">{10+i*2} Years exp.</span>
                       </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2 cursor-pointer">Global PrecisionTech Ltd.</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-6 cursor-pointer">
                       <MapPin className="w-4 h-4 cursor-pointer" />
                       <span className="cursor-pointer">Shenzhen, High-Tech Zone</span>
                    </div>

                    <div className="space-y-4 mb-8 cursor-pointer">
                       <div className="flex items-center justify-between text-sm cursor-pointer">
                          <span className="text-slate-500 font-medium cursor-pointer">Core Capabilities:</span>
                          <span className="text-slate-900 font-bold cursor-pointer">CNC, 3D Print, Mold</span>
                       </div>
                       <div className="flex items-center justify-between text-sm cursor-pointer">
                          <span className="text-slate-500 font-medium cursor-pointer">Daily Capacity:</span>
                          <span className="text-slate-900 font-bold cursor-pointer">50,000+ Units</span>
                       </div>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer">
                       <Link href={`/manufacturers/${i}`} className="flex-1 py-3.5 bg-slate-900 text-white font-bold rounded-2xl text-center hover:bg-slate-800 transition-all cursor-pointer">
                          View Factory
                       </Link>
                       <button className="p-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all cursor-pointer">
                          <ShieldCheck className="w-5 h-5 text-emerald-600 cursor-pointer" />
                       </button>
                    </div>
                 </div>
              ))}
           </div>

           {/* Pagination */}
           <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-xl bg-slate-900 text-white font-bold cursor-pointer">1</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 cursor-pointer">2</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 cursor-pointer">3</button>
              <span className="flex items-center px-2 text-slate-400">...</span>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 cursor-pointer">12</button>
           </div>
        </section>
      </main>
    </div>
  );
}
