"use client";

import { 
  Wallet, 
  ArrowUpRight, 
  ShieldCheck, 
  Lock, 
  Clock, 
  Building2,
  Zap,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function IndividualWalletPage() {
  const balances = [
    { label: "Available Funds", value: "$4,240.00", icon: Wallet, color: "indigo" },
    { label: "Locked in Escrow", value: "$8,000.00", icon: Lock, color: "amber" },
    { label: "Total Protected", value: "$12,240.00", icon: ShieldCheck, color: "emerald" },
  ];

  const transactions = [
    { id: "TX-9901", order: "LD-9283", factory: "PrecisionTech", amount: -2450.00, status: "LOCKED", date: "Oct 22, 2026", type: "Escrow Hold" },
    { id: "TX-9882", order: "LD-8812", factory: "Vision Electronics", amount: -5550.00, status: "LOCKED", date: "Oct 20, 2026", type: "Escrow Hold" },
    { id: "TX-9755", order: "LD-7721", factory: "SensorWave Hub", amount: -5600.00, status: "RELEASED", date: "Oct 15, 2026", type: "Payout" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            Financial Node
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Escrow Wallet</h1>
          <p className="text-slate-500 font-medium text-sm">Manage your capital and track milestone-based releases.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-6 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all flex items-center gap-3 shadow-xl shadow-slate-200 active:scale-95">
            <ArrowUpRight className="w-5 h-5" />
            Top Up Balance
          </button>
        </div>
      </div>

      {/* Balance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {balances.map((item) => (
          <div key={item.label} className="glass-card p-8 rounded-[3rem] group hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className={cn(
                "p-4 rounded-2xl transition-all shadow-sm",
                item.color === "indigo" ? "bg-indigo-50 text-indigo-600" :
                item.color === "amber" ? "bg-amber-50 text-amber-600" :
                "bg-emerald-50 text-emerald-600"
              )}>
                <item.icon className="w-6 h-6" />
              </div>
              <TrendingUp className="w-4 h-4 text-slate-300" />
            </div>
            <p className="text-sm font-bold text-slate-500 mb-1">{item.label}</p>
            <p className="text-4xl font-black text-slate-900 tracking-tight">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Transaction History */}
        <div className="lg:col-span-8 space-y-6">
           <div className="glass-card rounded-[3rem] overflow-hidden border border-slate-100">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                 <h2 className="text-2xl font-black text-slate-900">Capital Registry</h2>
                 <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700">Export Ledger</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-slate-50/50">
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction</th>
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Date</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {transactions.map((tx) => (
                         <tr key={tx.id} className="group hover:bg-slate-50/50 transition-all">
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                     <Building2 className="w-5 h-5" />
                                  </div>
                                  <div>
                                     <p className="font-bold text-slate-900">{tx.type}</p>
                                     <p className="text-xs text-slate-400 font-medium">Order {tx.order} • {tx.factory}</p>
                                  </div>
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <p className={cn(
                                 "font-black text-sm",
                                 tx.amount < 0 ? "text-slate-900" : "text-emerald-600"
                               )}>
                                  {tx.amount < 0 ? "" : "+"}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                               </p>
                            </td>
                            <td className="px-8 py-6">
                               <span className={cn(
                                 "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                                 tx.status === "LOCKED" ? "text-amber-600 bg-amber-50 border-amber-100" : "text-emerald-600 bg-emerald-50 border-emerald-100"
                               )}>
                                  {tx.status}
                               </span>
                            </td>
                            <td className="px-8 py-6 text-right">
                               <p className="text-xs font-bold text-slate-400">{tx.date}</p>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
           <div className="glass-dark p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-100">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-8" />
              <h3 className="text-2xl font-black mb-4 leading-tight">Elite Protection</h3>
              <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
                Leedwey Escrow ensures your funds are only released when production evidence is verified. 
              </p>
              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <p className="text-xs font-bold text-slate-300">ISO 27001 Certified Node</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <p className="text-xs font-bold text-slate-300">Biometric Auth Required</p>
                 </div>
              </div>
              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-[2rem] hover:bg-emerald-50 transition-all active:scale-95">
                 Security Protocols
              </button>
           </div>

           <div className="glass-card p-8 rounded-[3rem] border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                    <Clock className="w-5 h-5" />
                 </div>
                 <h3 className="font-black text-slate-900">Pending Releases</h3>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Next Milestone</p>
                 <p className="font-black text-slate-900">$2,450.00</p>
                 <p className="text-[10px] text-slate-400 font-medium">Expected release: Oct 28</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
