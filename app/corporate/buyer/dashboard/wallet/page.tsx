"use client";

import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  ShieldCheck, 
  History,
  Globe,
  DollarSign,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CorporateWalletPage() {
  const transactions = [
    { id: "TX-99021", type: "ESCROW_RELEASE", amount: "-$375,000", partner: "SinoPrecision Ltd.", date: "Oct 22, 2026", status: "COMPLETED" },
    { id: "TX-98812", type: "MILESTONE_FUND", amount: "+$250,000", partner: "Credit Node Alpha", date: "Oct 20, 2026", status: "COMPLETED" },
    { id: "TX-97741", type: "SERVICE_FEE", amount: "-$1,200", partner: "Leedwey Logistics", date: "Oct 19, 2026", status: "COMPLETED" },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Finance Node Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-4xl font-black text-slate-900 tracking-tight">Escrow Wallet</h1>
           <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Secure Escrow Protocol
           </p>
        </div>
        <div className="flex items-center gap-4">
           <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200 active:scale-95 cursor-pointer text-xs uppercase tracking-widest">
              <DollarSign className="w-4 h-4 cursor-pointer" />
              Initiate Bulk Payment
           </button>
        </div>
      </div>

      {/* Main Wallet Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-slate-200">
               <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
               <div className="flex items-center justify-between mb-12">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                     <Wallet className="w-8 h-8 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available Balance</span>
               </div>
               <p className="text-6xl font-black tracking-tighter mb-4">$842,500</p>
               <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  Full Milestone Protection
               </div>
            </div>

            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
               <div className="flex items-center justify-between mb-12">
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                     <Lock className="w-8 h-8 text-indigo-600" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Committed in Escrow</span>
               </div>
               <p className="text-6xl font-black tracking-tighter text-slate-900 mb-4">$250,000</p>
               <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                  Locked until inspection release
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 bg-slate-100 p-10 rounded-[3.5rem] text-slate-900 relative overflow-hidden shadow-sm">
            <Globe className="w-12 h-12 text-slate-300 mb-8" />
            <h3 className="text-2xl font-black mb-4 tracking-tight">Secure Settlement</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">
               Funds are held in a multi-sig vault. Releases are triggered only upon digital verification of milestones.
            </p>
            <div className="space-y-4">
               {["Verified Node: US-EAST", "Escrow ID: CP-9920", "Audit Trail: Immutable"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                     <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> {t}
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
         <div className="p-10 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
               <History className="w-6 h-6 text-slate-400" />
               Transaction Ledger
            </h3>
            <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700 transition-colors cursor-pointer">Export CSV</button>
         </div>
         <div className="divide-y divide-slate-50">
            {transactions.map((tx) => (
               <div key={tx.id} className="p-10 flex items-center justify-between hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-8 cursor-pointer">
                     <div className={cn(
                        "w-16 h-16 rounded-[2rem] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform cursor-pointer",
                        tx.amount.startsWith("+") ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                     )}>
                        {tx.amount.startsWith("+") ? <ArrowDownLeft className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
                     </div>
                     <div className="cursor-pointer">
                        <p className="text-lg font-black text-slate-900 tracking-tight cursor-pointer">{tx.partner}</p>
                        <div className="flex items-center gap-3 mt-1 cursor-pointer">
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer">{tx.type}</span>
                           <span className="text-slate-200 cursor-pointer">•</span>
                           <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest cursor-pointer">{tx.date}</span>
                        </div>
                     </div>
                  </div>
                  <div className="text-right cursor-pointer">
                     <p className={cn(
                        "text-2xl font-black tracking-tighter cursor-pointer",
                        tx.amount.startsWith("+") ? "text-emerald-600" : "text-slate-900"
                     )}>{tx.amount}</p>
                     <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest cursor-pointer">{tx.status}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
