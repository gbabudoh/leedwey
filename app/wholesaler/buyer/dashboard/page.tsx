"use client";

import { useSession } from "next-auth/react";
import { 
  Zap,
  Building2,
  TrendingUp,
  Truck,
  Wallet,
  BarChart3,
  Globe,
  Boxes
} from "lucide-react";
import Link from "next/link";

export default function WholesalerDashboard() {
  const { data: session } = useSession();

  const stats = [
    { title: "Bulk Volume", value: "12,400", unit: "units", icon: Boxes, change: "Current Manifest", color: "indigo" },
    { title: "Network Value", value: "$1.2M", unit: "USD", icon: TrendingUp, change: "Total Sourced", color: "emerald" },
    { title: "Logistics Load", value: "8", unit: "Containers", icon: Truck, change: "In Transit", color: "blue" },
    { title: "Credit Facility", value: "$250K", unit: "Available", icon: Wallet, change: "Escrow Backed", color: "amber" },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Wholesaler Command Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
           <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              <Globe className="w-3.5 h-3.5 animate-spin-slow" />
              Global Wholesale Command Center
           </div>
           <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
             Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">{session?.user?.name?.split(" ")[0] || "Partner"}</span>
           </h1>
           <p className="text-slate-500 font-bold max-w-xl text-lg leading-snug">
             Orchestrating high-volume procurement and multi-node factory logistics from a single encrypted terminal.
           </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="/products" className="px-8 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200 active:scale-95 cursor-pointer">
              <Zap className="w-5 h-5 text-indigo-400 cursor-pointer" />
              Initiate Bulk RFQ
           </Link>
        </div>
      </div>

      {/* Stats Grid - Specialized for Wholesaler */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-indigo-50 transition-colors duration-500"></div>
            <div className="relative z-10">
               <div className="flex items-center justify-between mb-8">
                 <div className={`p-5 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-200 group-hover:bg-indigo-600 transition-all duration-500 cursor-pointer`}>
                   <stat.icon className="w-6 h-6 cursor-pointer" />
                 </div>
                 <div className="text-right cursor-pointer">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block cursor-pointer">{stat.change}</span>
                 </div>
               </div>
               <p className="text-sm font-black text-slate-400 mb-1 uppercase tracking-wider cursor-pointer">{stat.title}</p>
               <div className="flex items-baseline gap-2 cursor-pointer">
                  <p className="text-5xl font-black text-slate-900 tracking-tighter cursor-pointer">{stat.value}</p>
                  <span className="text-xs font-black text-slate-400 uppercase cursor-pointer">{stat.unit}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Bulk Sourcing Pipeline */}
        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Bulk Supply Pipeline</h2>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Multi-Node Logistics Monitoring</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100">8 Nodes Active</div>
                 </div>
              </div>

              <div className="space-y-6">
                 {[
                   { id: "WS-1102", name: "High-Performance GPU Units", volume: "5,000 Units", factory: "SinoPrecision Ltd.", status: "INSPECTION", eta: "4 Days", progress: 85 },
                   { id: "WS-0992", name: "Industrial Servo Motors", volume: "1,200 Units", factory: "MotorWave Dynamic", status: "PRODUCTION", eta: "12 Days", progress: 45 },
                   { id: "WS-0881", name: "CNC Controller Modules", volume: "2,500 Units", factory: "VisionCore Systems", status: "SHIPPING", eta: "Arrived", progress: 100 },
                 ].map((order) => (
                   <div key={order.id} className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all group cursor-pointer">
                      <div className="flex items-center justify-between mb-6 cursor-pointer">
                         <div className="flex items-center gap-6 cursor-pointer">
                            <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center border border-slate-100 text-slate-900 font-black shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all cursor-pointer">
                               {order.id.split("-")[1]}
                            </div>
                            <div className="cursor-pointer">
                               <p className="text-xl font-black text-slate-900 cursor-pointer">{order.name}</p>
                               <div className="flex items-center gap-3 mt-1 cursor-pointer">
                                  <span className="text-xs font-black text-indigo-600 uppercase tracking-widest cursor-pointer">{order.volume}</span>
                                  <span className="text-slate-300 cursor-pointer">•</span>
                                  <p className="text-xs text-slate-400 font-bold flex items-center gap-1 cursor-pointer">
                                     <Building2 className="w-3.5 h-3.5 cursor-pointer" /> {order.factory}
                                  </p>
                               </div>
                            </div>
                         </div>
                         <div className="text-right cursor-pointer">
                            <span className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] cursor-pointer">{order.status}</span>
                            <p className="text-[10px] font-black text-slate-400 mt-2 uppercase cursor-pointer">ETA: {order.eta}</p>
                         </div>
                      </div>
                      <div className="space-y-3 cursor-pointer">
                         <div className="h-3 bg-slate-200 rounded-full overflow-hidden cursor-pointer">
                            <div 
                              className="h-full bg-gradient-to-r from-slate-900 to-indigo-600 transition-all duration-1000 cursor-pointer" 
                              style={{ width: `${order.progress}%` }}
                            ></div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Wholesale Intelligence */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-slate-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <BarChart3 className="w-12 h-12 text-indigo-400 mb-8" />
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Market Pulse</h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Wholesale Replenishment Forecast</p>
              
              <div className="space-y-6 mb-12">
                 {[
                   { label: "Electronics Hub", trend: "+12.4%", status: "UP" },
                   { label: "Industrial Parts", trend: "-2.1%", status: "STABLE" },
                   { label: "Raw Materials", trend: "+18.9%", status: "CRITICAL" },
                 ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                       <span className="text-sm font-black uppercase tracking-wider">{item.label}</span>
                       <span className={`text-xs font-black ${item.status === "CRITICAL" ? "text-amber-400" : "text-emerald-400"}`}>{item.trend}</span>
                    </div>
                 ))}
              </div>

              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-[2rem] hover:bg-indigo-50 transition-all shadow-xl active:scale-95 cursor-pointer uppercase tracking-widest text-xs">
                 View Global Report
              </button>
           </div>

           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                 <h3 className="font-black text-slate-900 text-xl tracking-tight">Verified Capacity</h3>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Nodes</span>
              </div>
              <div className="space-y-6">
                 {[
                   { name: "SinoPrecision Shenzhen", cap: "High", load: 72 },
                   { name: "VisionCore Dynamics", cap: "Medium", load: 45 },
                   { name: "MotorWave Hub", cap: "Critical", load: 92 },
                 ].map((node, i) => (
                    <div key={i} className="space-y-2 cursor-pointer group">
                       <div className="flex items-center justify-between cursor-pointer">
                          <p className="text-sm font-black text-slate-700 group-hover:text-indigo-600 transition-colors cursor-pointer">{node.name}</p>
                          <span className={`text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter ${node.cap === "Critical" ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"}`}>
                             {node.cap}
                          </span>
                       </div>
                       <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden cursor-pointer">
                          <div 
                             className={`h-full transition-all duration-1000 ${node.load > 80 ? "bg-rose-500" : "bg-indigo-600"}`}
                             style={{ width: `${node.load}%` }}
                          ></div>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-4 border-2 border-slate-50 text-slate-400 font-black rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all text-xs uppercase tracking-widest cursor-pointer">
                 Manage Supply Nodes
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
