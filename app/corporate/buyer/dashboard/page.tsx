"use client";

import { useSession } from "next-auth/react";
import { 
  Building2,
  BarChart3,
  Globe,
  ShieldCheck,
  Zap,
  TrendingUp,
  FileText,
  Boxes,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CorporateDashboard() {
  const { data: session } = useSession();

  const stats = [
    { title: "Enterprise Volume", value: "48,500", unit: "Units", icon: Boxes, change: "Month-to-Date", color: "indigo" },
    { title: "Credit Facility", value: "$5.2M", unit: "Available", icon: BarChart3, change: "Tier-1 Credit", color: "emerald" },
    { title: "Approval Queue", value: "12", unit: "Pending", icon: Clock, change: "Immediate Action", color: "amber" },
    { title: "Active Nodes", value: "42", unit: "Factories", icon: Globe, change: "Global Network", color: "blue" },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Corporate Command Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
           <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              <Building2 className="w-3.5 h-3.5" />
              Enterprise Resource Command
           </div>
           <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
             Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">Portal</span>
           </h1>
           <p className="text-slate-500 font-bold max-w-xl text-lg leading-snug">
             Consolidating multi-department procurement and institutional logistics into a single verified trade node.
           </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="/corporate/buyer/dashboard/marketplace" className="px-8 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200 active:scale-95 cursor-pointer">
              <Zap className="w-5 h-5 text-indigo-400 cursor-pointer" />
              Launch Enterprise Sourcing
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
        {/* Approval Queue */}
        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Approval Queue</h2>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Pending Departmental Requests</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-amber-50 text-amber-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-amber-100">Action Required</div>
                 </div>
              </div>

              <div className="space-y-6">
                 {[
                   { dept: "Engineering", item: "5,000x Micro-Controllers", val: "$125,000", requester: "Sarah Jenkins", time: "2h ago" },
                   { dept: "Logistics", item: "Ocean Freight: CN -> EU", val: "$42,000", requester: "Mark Thron", time: "5h ago" },
                   { dept: "R&D", item: "Prototype CNC Milling Lot", val: "$18,500", requester: "Dr. Aris", time: "Yesterday" },
                 ].map((req, i) => (
                   <div key={i} className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all group cursor-pointer">
                      <div className="flex items-center justify-between cursor-pointer">
                         <div className="flex items-center gap-6 cursor-pointer">
                            <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center border border-slate-100 text-slate-900 font-black shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all cursor-pointer">
                               {req.dept.charAt(0)}
                            </div>
                            <div className="cursor-pointer">
                               <p className="text-xl font-black text-slate-900 cursor-pointer">{req.item}</p>
                               <div className="flex items-center gap-3 mt-1 cursor-pointer">
                                  <span className="text-xs font-black text-indigo-600 uppercase tracking-widest cursor-pointer">{req.dept}</span>
                                  <span className="text-slate-300 cursor-pointer">•</span>
                                  <p className="text-xs text-slate-400 font-bold flex items-center gap-1 cursor-pointer">
                                     Requested by {req.requester}
                                  </p>
                               </div>
                            </div>
                         </div>
                         <div className="text-right cursor-pointer">
                            <p className="text-xl font-black text-slate-900 cursor-pointer">{req.val}</p>
                            <p className="text-[10px] font-black text-slate-400 mt-1 uppercase cursor-pointer">{req.time}</p>
                         </div>
                      </div>
                      <div className="mt-8 flex items-center gap-4 cursor-pointer">
                         <button className="flex-1 py-4 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all cursor-pointer">Authorize Purchase</button>
                         <button className="px-6 py-4 border-2 border-slate-100 text-slate-400 font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-all cursor-pointer">Decline</button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Corporate Intelligence */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-slate-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <TrendingUp className="w-12 h-12 text-emerald-400 mb-8" />
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Budget Allocation</h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Q4 Procurement Thresholds</p>
              
              <div className="space-y-6 mb-12">
                 {[
                   { label: "Manufacturing", used: 72 },
                   { label: "Infrastructure", used: 45 },
                   { label: "Service Ops", used: 12 },
                 ].map((item, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider">{item.label}</span>
                          <span className="text-[10px] font-black text-emerald-400">{item.used}% Used</span>
                       </div>
                       <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${item.used}%` }}></div>
                       </div>
                    </div>
                 ))}
              </div>

              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-[2rem] hover:bg-indigo-50 transition-all shadow-xl active:scale-95 cursor-pointer uppercase tracking-widest text-xs">
                 Generate Audit Report
              </button>
           </div>

           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-black text-slate-900 text-xl tracking-tight">Enterprise Users</h3>
                 <Users className="w-5 h-5 text-slate-400" />
              </div>
              <div className="space-y-6">
                 {[
                   { name: "Sourcing Team A", status: "Active", permissions: "Full" },
                   { name: "Regional Audit", status: "Active", permissions: "Read-Only" },
                   { name: "External Vendor", status: "Restricted", permissions: "RFQ-Only" },
                 ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-indigo-100 transition-all cursor-pointer group">
                       <div>
                          <p className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{user.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold mt-0.5">{user.permissions} Access</p>
                       </div>
                       <span className="text-[8px] font-black px-2 py-0.5 bg-white rounded-md uppercase tracking-tighter border border-slate-100">{user.status}</span>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-4 border-2 border-slate-50 text-slate-400 font-black rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all text-xs uppercase tracking-widest cursor-pointer">
                 Manage Team Nodes
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
