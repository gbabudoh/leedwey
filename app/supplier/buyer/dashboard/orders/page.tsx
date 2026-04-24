"use client";

import { 
  Search, 
  Filter, 
  ArrowUpRight,
  BarChart3,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WholesalerOrdersPage() {
  const orders = [
    { id: "WS-1102", product: "High-Performance GPU Units", volume: "5,000 Units", factory: "SinoPrecision Ltd.", status: "INSPECTION", date: "Oct 22, 2026", total: "$1,250,000" },
    { id: "WS-0992", product: "Industrial Servo Motors", volume: "1,200 Units", factory: "MotorWave Dynamic", status: "PRODUCTION", date: "Oct 20, 2026", total: "$480,000" },
    { id: "WS-0881", product: "CNC Controller Modules", volume: "2,500 Units", factory: "VisionCore Systems", status: "COMPLETED", date: "Oct 15, 2026", total: "$625,000" },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-4xl font-black text-slate-900 tracking-tight">Bulk Orders Manifest</h1>
           <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-600" />
              Global Procurement Node
           </p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search Manifest ID..." 
                className="pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600/20 transition-all w-64 shadow-sm"
              />
           </div>
           <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm cursor-pointer">
              <Filter className="w-5 h-5 cursor-pointer" />
           </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-slate-50 bg-slate-50/30">
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Manifest ID</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Bulk Product</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Node Node</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Volume</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Value</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                     <td className="px-10 py-8 font-black text-slate-900 tracking-tight">{order.id}</td>
                     <td className="px-10 py-8">
                        <div>
                           <p className="font-black text-slate-900 tracking-tight">{order.product}</p>
                           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{order.date}</p>
                        </div>
                     </td>
                     <td className="px-10 py-8 text-sm font-bold text-slate-600">{order.factory}</td>
                     <td className="px-10 py-8 text-sm font-black text-indigo-600">{order.volume}</td>
                     <td className="px-10 py-8 text-sm font-black text-slate-900">{order.total}</td>
                     <td className="px-10 py-8">
                        <span className={cn(
                           "px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest",
                           order.status === "COMPLETED" ? "bg-emerald-50 text-emerald-600" :
                           order.status === "INSPECTION" ? "bg-amber-50 text-amber-600" :
                           "bg-indigo-50 text-indigo-600"
                        )}>
                           {order.status}
                        </span>
                     </td>
                     <td className="px-10 py-8">
                        <button className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:text-indigo-600 group-hover:bg-white transition-all shadow-sm cursor-pointer">
                           <ArrowUpRight className="w-5 h-5 cursor-pointer" />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>

      {/* Analytics Insight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
            <BarChart3 className="w-10 h-10 text-indigo-400 mb-8" />
            <h3 className="text-2xl font-black mb-2 tracking-tight">Replenishment Alert</h3>
            <p className="text-slate-400 text-sm font-bold leading-relaxed mb-8">
               Based on your historical volume, we recommend initiating a new RFQ for &quot;Industrial Motors&quot; within the next 7 days to avoid logistics bottlenecks.
            </p>
            <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-indigo-50 transition-all active:scale-95 text-xs uppercase tracking-widest cursor-pointer">
               Launch Forecast RFQ
            </button>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Active Container Map</h3>
            <div className="space-y-6">
               {[
                 { route: "SZ -> LAX", progress: 65, container: "MAERSK-X99" },
                 { route: "HK -> HAM", progress: 22, container: "EVERGREEN-P4" },
               ].map((ship, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex items-center justify-between">
                        <p className="text-sm font-black text-slate-700">{ship.route}</p>
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{ship.container}</span>
                     </div>
                     <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${ship.progress}%` }}></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
