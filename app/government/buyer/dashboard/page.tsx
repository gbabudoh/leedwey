"use client";

import { useSession } from "next-auth/react";
import { 
  ShieldCheck,
  Globe,
  FileText,
  Zap,
  Scale,
  History,
  Lock,
  Building
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function GovernmentDashboard() {
  useSession();

  const stats = [
    { title: "Public Expenditure", value: "$12.4M", unit: "USD", icon: Scale, change: "Current Quarter", color: "indigo" },
    { title: "Compliance Score", value: "99.8", unit: "Index", icon: ShieldCheck, change: "Audit Verified", color: "emerald" },
    { title: "Active Tenders", value: "24", unit: "Open", icon: FileText, change: "Bidding Phase", color: "blue" },
    { title: "Verified Vendors", value: "1,200", unit: "Nodes", icon: Globe, change: "Regional Mesh", color: "amber" },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Government Command Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
           <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              <Building className="w-3.5 h-3.5" />
              Public Procurement Authority
           </div>
           <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
             National <span className="text-indigo-600">Sourcing</span>
           </h1>
           <p className="text-slate-500 font-bold max-w-xl text-lg leading-snug">
             Maintaining radical transparency and regulatory compliance across the national industrial procurement network.
           </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="/government/buyer/dashboard/marketplace" className="px-8 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200 active:scale-95 cursor-pointer">
              <Zap className="w-5 h-5 text-indigo-400 cursor-pointer" />
              Access Public Tenders
           </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group cursor-pointer relative overflow-hidden">
            <div className="relative z-10">
               <div className="flex items-center justify-between mb-8">
                 <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-200 group-hover:bg-indigo-600 transition-all duration-500 cursor-pointer">
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
        {/* Transparency Ledger */}
        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Transparency Ledger</h2>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Blockchain-Verified Procurement Logs</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100">Immutable Data</div>
                 </div>
              </div>

              <div className="space-y-6">
                 {[
                   { id: "TX-99021-G", item: "Regional Power Grid Components", val: "$4.2M", node: "Node-S1", hash: "0x882...F21", status: "VERIFIED" },
                   { id: "TX-98812-G", item: "Medical Grade Logistics Lot", val: "$850,000", node: "Node-M4", hash: "0x771...E10", status: "AUDITING" },
                   { id: "TX-97741-G", item: "Public Transit Spare Parts", val: "$1.2M", node: "Node-T9", hash: "0x992...A05", status: "VERIFIED" },
                 ].map((tx, i) => (
                   <div key={i} className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all group cursor-pointer">
                      <div className="flex items-center justify-between cursor-pointer">
                         <div className="flex items-center gap-6 cursor-pointer">
                            <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center border border-slate-100 text-slate-900 font-black shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all cursor-pointer">
                               <Lock className="w-6 h-6" />
                            </div>
                            <div className="cursor-pointer">
                               <p className="text-xl font-black text-slate-900 cursor-pointer">{tx.item}</p>
                               <div className="flex items-center gap-3 mt-1 cursor-pointer">
                                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest cursor-pointer">{tx.id}</span>
                                  <span className="text-slate-300 cursor-pointer">•</span>
                                  <p className="text-[10px] text-slate-400 font-mono cursor-pointer">
                                     Hash: {tx.hash}
                                  </p>
                               </div>
                            </div>
                         </div>
                         <div className="text-right cursor-pointer">
                            <p className="text-xl font-black text-slate-900 cursor-pointer">{tx.val}</p>
                            <span className={cn(
                               "inline-block px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest mt-2",
                               tx.status === "VERIFIED" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"
                            )}>{tx.status}</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Government Intelligence */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-slate-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <History className="w-12 h-12 text-indigo-400 mb-8" />
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Regulatory Pulse</h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Regional Compliance Forecast</p>
              
              <div className="space-y-6 mb-12">
                 {[
                   { label: "ISO 9001 Alignment", score: 98 },
                   { label: "Environmental ESG", score: 92 },
                   { label: "Labor Compliance", score: 99 },
                 ].map((item, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider">{item.label}</span>
                          <span className="text-[10px] font-black text-emerald-400">{item.score}%</span>
                       </div>
                       <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${item.score}%` }}></div>
                       </div>
                    </div>
                 ))}
              </div>

              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-[2rem] hover:bg-indigo-50 transition-all shadow-xl active:scale-95 cursor-pointer uppercase tracking-widest text-xs">
                 Publish Compliance Report
              </button>
           </div>

           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-black text-slate-900 text-xl tracking-tight">Audit Trail Nodes</h3>
                 <Scale className="w-5 h-5 text-slate-400" />
              </div>
              <div className="space-y-6">
                 {[
                   { name: "Central Audit Node", status: "SYNCED" },
                   { name: "Regional Oversight", status: "SYNCED" },
                   { name: "Public Watchdog", status: "STANDBY" },
                 ].map((node, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-indigo-100 transition-all cursor-pointer group">
                       <div>
                          <p className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{node.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold mt-0.5">Real-time Data Stream</p>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className={cn("w-2 h-2 rounded-full", node.status === "SYNCED" ? "bg-emerald-500" : "bg-slate-300")}></div>
                          <span className="text-[8px] font-black text-slate-400 uppercase">{node.status}</span>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-4 border-2 border-slate-50 text-slate-400 font-black rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all text-xs uppercase tracking-widest cursor-pointer">
                 Verify Ledger Integrity
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
