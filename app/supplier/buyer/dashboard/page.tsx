"use client";

import { useSession } from "next-auth/react";
import { 
  Truck,
  Zap,
  Globe,
  Factory,
  BarChart3,
  Warehouse,
  Activity
} from "lucide-react";
import Link from "next/link";

export default function SupplierDashboard() {
  useSession();

  const stats = [
    { title: "Material Load", value: "820", unit: "Tons", icon: Warehouse, change: "Inbound Pipeline", color: "indigo" },
    { title: "Factory Mesh", value: "18", unit: "Connected", icon: Globe, change: "Live Sync", color: "emerald" },
    { title: "Supply Velocity", value: "JIT-0.5", unit: "Days", icon: Activity, change: "Optimized", color: "blue" },
    { title: "Procurement Cap", value: "$1.8M", unit: "Available", icon: BarChart3, change: "Escrow Backed", color: "amber" },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Supplier Command Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
           <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              <Factory className="w-3.5 h-3.5" />
              Supplier Procurement Terminal
           </div>
           <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
             Material <span className="text-emerald-600">Sourcing</span>
           </h1>
           <p className="text-slate-500 font-bold max-w-xl text-lg leading-snug">
             Optimizing raw material inbound streams and just-in-time logistics for high-output production terminals.
           </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="/supplier/buyer/dashboard/marketplace" className="px-8 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-emerald-600 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200 active:scale-95 cursor-pointer">
              <Zap className="w-5 h-5 text-emerald-400 cursor-pointer" />
              Source Raw Materials
           </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group cursor-pointer relative overflow-hidden">
            <div className="relative z-10">
               <div className="flex items-center justify-between mb-8">
                 <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-200 group-hover:bg-emerald-600 transition-all duration-500 cursor-pointer">
                   <stat.icon className="w-6 h-6 cursor-pointer" />
                 </div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.change}</span>
               </div>
               <p className="text-sm font-black text-slate-400 mb-1 uppercase tracking-wider">{stat.title}</p>
               <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                  <span className="text-xs font-black text-slate-400 uppercase">{stat.unit}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inbound Sourcing Streams */}
        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Material Streams</h2>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Inbound Factory Inventory Pipeline</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-indigo-100">Live Logistics</div>
                 </div>
              </div>

              <div className="space-y-6">
                 {[
                   { item: "Aluminum Alloy 6061", quantity: "20 Tons", source: "Mining Site X-9", eta: "14h", status: "TRANSIT", progress: 75 },
                   { item: "Liquid Cooling Agent", quantity: "5,000L", source: "ChemStream Hub", eta: "2 Days", status: "READY", progress: 100 },
                   { item: "Precision Fasteners", quantity: "100k Units", source: "FastenCore Ltd.", eta: "5 Days", status: "PROCURED", progress: 30 },
                 ].map((stream, i) => (
                   <div key={i} className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all group cursor-pointer">
                      <div className="flex items-center justify-between mb-6 cursor-pointer">
                         <div className="flex items-center gap-6 cursor-pointer">
                            <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center border border-slate-100 text-slate-900 font-black shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all cursor-pointer">
                               <Truck className="w-6 h-6" />
                            </div>
                            <div className="cursor-pointer">
                               <p className="text-xl font-black text-slate-900 cursor-pointer">{stream.item}</p>
                               <div className="flex items-center gap-3 mt-1 cursor-pointer">
                                  <span className="text-xs font-black text-emerald-600 uppercase tracking-widest cursor-pointer">{stream.quantity}</span>
                                  <span className="text-slate-300 cursor-pointer">•</span>
                                  <p className="text-xs text-slate-400 font-bold flex items-center gap-1 cursor-pointer">
                                     From {stream.source}
                                  </p>
                               </div>
                            </div>
                         </div>
                         <div className="text-right cursor-pointer">
                            <span className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] cursor-pointer">{stream.status}</span>
                            <p className="text-[10px] font-black text-slate-400 mt-2 uppercase cursor-pointer">ETA: {stream.eta}</p>
                         </div>
                      </div>
                      <div className="space-y-3 cursor-pointer">
                         <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden cursor-pointer">
                            <div 
                              className="h-full bg-gradient-to-r from-emerald-600 to-indigo-600 transition-all duration-1000 cursor-pointer" 
                              style={{ width: `${stream.progress}%` }}
                            ></div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Supplier Analytics */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-emerald-600 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <Activity className="w-12 h-12 text-white/50 mb-8" />
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Supply Mesh</h3>
              <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mb-10">JIT Delivery Accuracy</p>
              
              <div className="space-y-6 mb-12">
                 {[
                   { label: "On-Time Ratio", val: "99.2%" },
                   { label: "Lead Time", val: "1.2 Days" },
                   { label: "Stock Buffer", val: "15%" },
                 ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/20">
                       <span className="text-xs font-black uppercase tracking-wider">{stat.label}</span>
                       <span className="text-sm font-black text-white">{stat.val}</span>
                    </div>
                 ))}
              </div>

              <button className="w-full py-5 bg-white text-emerald-600 font-black rounded-[2rem] hover:bg-emerald-50 transition-all shadow-xl active:scale-95 cursor-pointer uppercase tracking-widest text-xs">
                 View Logistics Map
              </button>
           </div>

           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                 <h3 className="font-black text-slate-900 text-xl tracking-tight">Active Capacity</h3>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Terminal Load</span>
              </div>
              <div className="space-y-6">
                 {[
                   { name: "Shenzhen Hub", load: 72 },
                   { name: "Dongguan Terminal", load: 45 },
                   { name: "Yantian Port Terminal", load: 92 },
                 ].map((node, i) => (
                    <div key={i} className="space-y-2 cursor-pointer group">
                       <div className="flex items-center justify-between cursor-pointer">
                          <p className="text-sm font-black text-slate-700 group-hover:text-emerald-600 transition-colors cursor-pointer">{node.name}</p>
                          <span className="text-[10px] font-black text-slate-400 cursor-pointer">{node.load}%</span>
                       </div>
                       <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden cursor-pointer">
                          <div 
                             className={`h-full transition-all duration-1000 ${node.load > 80 ? "bg-rose-500" : "bg-emerald-600"}`}
                             style={{ width: `${node.load}%` }}
                          ></div>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-4 border-2 border-slate-50 text-slate-400 font-black rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all text-xs uppercase tracking-widest cursor-pointer">
                 Orchestrate Inventory
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
