"use client";

import { 
  TrendingUp, 
  Wallet, 
  ArrowUpRight, 
  Lock, 
  Unlock, 
  Clock, 
  Building,
  ShieldCheck,
  ChevronRight,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PayoutsPage() {
  const stats = [
    { label: "Total Revenue", value: "$142,500", icon: TrendingUp, color: "indigo" },
    { label: "Available to Withdraw", value: "$42,200", icon: Wallet, color: "emerald" },
    { label: "Locked in Escrow", value: "$88,400", icon: Lock, color: "amber" },
    { label: "Pending Approval", value: "$11,900", icon: Clock, color: "slate" },
  ];

  const transactions = [
    { id: "TX-9283", type: "WITHDRAWAL", amount: -5000, status: "COMPLETED", date: "Oct 22, 2026", method: "Bank Transfer" },
    { id: "TX-9284", type: "ESCROW_RELEASE", amount: 9800, status: "COMPLETED", date: "Oct 20, 2026", method: "Order #LD-9283" },
    { id: "TX-9285", type: "ESCROW_RELEASE", amount: 4900, status: "COMPLETED", date: "Oct 18, 2026", method: "Order #LD-9283" },
    { id: "TX-9286", type: "DEPOSIT", amount: 12500, status: "LOCKED", date: "Oct 23, 2026", method: "Order #LD-9285" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
            <Wallet className="w-3.5 h-3.5 text-indigo-600" />
            Escrow Liquidity Hub
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Payout Terminal</h1>
          <p className="text-slate-500 font-medium">Manage your factory earnings and monitor milestone-locked liquidity.</p>
        </div>

        <button className="px-8 py-4 bg-slate-900 text-white rounded-[2rem] font-black shadow-2xl shadow-slate-300 hover:bg-indigo-600 transition-all flex items-center gap-3 active:scale-95 group">
           Withdraw Funds <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-8 rounded-[2.5rem] group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100/50">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
              stat.color === "indigo" ? "bg-indigo-600 text-white shadow-indigo-100" :
              stat.color === "emerald" ? "bg-emerald-500 text-white shadow-emerald-100" :
              stat.color === "amber" ? "bg-amber-500 text-white shadow-amber-100" :
              "bg-slate-900 text-white shadow-slate-100"
            )}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Funds Visualization */}
        <div className="lg:col-span-8 space-y-8">
           <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="flex items-center justify-between mb-10">
                 <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                   <Unlock className="w-6 h-6 text-indigo-600" /> Funds Pipeline
                 </h3>
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded-full border border-slate-100">
                    <Info className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Next Release: Oct 25</span>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm font-bold">
                       <span className="text-slate-500">Milestone Progress (Global Average)</span>
                       <span className="text-indigo-600">62% Optimized</span>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner">
                       <div className="h-full bg-indigo-600 rounded-full w-[62%] relative group/bar transition-all duration-1000">
                          <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full m-0.5 animate-pulse"></div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">In-Production</p>
                       <p className="text-2xl font-black text-slate-900">$48,200</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Under Review</p>
                       <p className="text-2xl font-black text-slate-900">$12,400</p>
                    </div>
                    <div className="p-6 bg-indigo-600 rounded-[2rem] text-white shadow-xl shadow-indigo-100">
                       <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest mb-2">Ready to Node</p>
                       <p className="text-2xl font-black">$42,200</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass-card rounded-[3rem] overflow-hidden border border-slate-100">
              <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
                 <h3 className="text-2xl font-black text-slate-900">Transaction Registry</h3>
                 <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-800 transition-colors">Export Ledger</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-slate-50/30">
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">ID</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type & Method</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {transactions.map((tx) => (
                          <tr key={tx.id} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                             <td className="px-10 py-8 font-mono font-bold text-slate-500">{tx.id}</td>
                             <td className="px-10 py-8">
                                <div>
                                   <p className="font-bold text-slate-900 mb-0.5">{tx.type.replace("_", " ")}</p>
                                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tx.method}</p>
                                </div>
                             </td>
                             <td className="px-10 py-8">
                                <span className={cn(
                                  "font-black",
                                  tx.amount < 0 ? "text-rose-500" : "text-emerald-500"
                                )}>
                                  {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toLocaleString()}
                                </span>
                             </td>
                             <td className="px-10 py-8 text-sm font-bold text-slate-500">{tx.date}</td>
                             <td className="px-10 py-8 text-right">
                                <span className={cn(
                                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                  tx.status === "COMPLETED" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                                )}>
                                   {tx.status}
                                </span>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Financial Info Sidebar */}
        <div className="lg:col-span-4 space-y-8">
           <div className="p-10 rounded-[3rem] bg-indigo-600 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <Building className="w-10 h-10 text-indigo-200 mb-6" />
              <h3 className="text-xl font-bold mb-1">Settlement Account</h3>
              <p className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] mb-8">Verified Corporate Node</p>
              
              <div className="space-y-4 mb-10">
                 <div className="p-5 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-indigo-200 font-bold uppercase tracking-widest mb-1">Entity Name</p>
                    <p className="text-sm font-bold">PrecisionTech Mfg Ltd.</p>
                 </div>
                 <div className="p-5 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-indigo-200 font-bold uppercase tracking-widest mb-1">Routing Node</p>
                    <p className="text-sm font-bold">SWIFT: PTCH****67</p>
                 </div>
              </div>

              <button className="w-full py-5 bg-white text-indigo-600 font-black rounded-[2rem] hover:bg-indigo-50 transition-all flex items-center justify-center gap-3">
                 Edit Bank Node <ChevronRight className="w-4 h-4" />
              </button>
           </div>

           <div className="glass-card p-10 rounded-[3rem] space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                 <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Trade Integrity</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                Your factory node maintains a <span className="text-emerald-600 font-black">99.8% Financial Reliability</span> score. This allows for accelerated milestone releases and lower platform escrow fees.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                 <p className="text-[10px] text-emerald-700 font-black uppercase tracking-widest">Active Reward</p>
                 <p className="text-xs font-bold text-emerald-600">0.5% Escrow Rebate Active</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
