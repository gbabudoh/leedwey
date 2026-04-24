"use client";

import { 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Star,
  Award,
  Crown,
  Lock,
  Globe,
  Users,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function VerificationPage() {
  const progress = 65;

  const roadmap = [
    { title: "Onboarding Node Vetting", status: "COMPLETED", date: "Oct 12, 2026", desc: "Corporate identity and legal framework verified." },
    { title: "Physical Facility Audit", status: "IN_PROGRESS", date: "Expected Oct 28", desc: "Audit agent scheduled for on-site production vetting." },
    { title: "Milestone Integrity Check", status: "LOCKED", date: "Pending Audit", desc: "Verifying 3 successful escrow-based trade deliveries." },
    { title: "ISO 9001 Integration", status: "LOCKED", date: "Pending Milestone", desc: "Syncing international quality certificates to the ledger." },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Elite Hero Header */}
      <div className="relative bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -mr-80 -mt-80"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-8">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em]">Trust Tier Protocol v2.4</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Factory Node <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Elite Verification</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Your business is currently qualifying for Tier 1 Elite status. Complete the facility audit to unlock priority sourcing.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-[2rem] hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30 active:scale-95 flex items-center gap-3">
                 Level Up Roadmap <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Circular Widget */}
          <div className="relative shrink-0 flex flex-col items-center">
             <div className="w-64 h-64 rounded-full border-[12px] border-white/5 flex flex-col items-center justify-center relative bg-white/5 backdrop-blur-2xl shadow-2xl">
                <div className="absolute inset-0 rounded-full border-[12px] border-indigo-500 border-t-transparent -rotate-45"></div>
                <Award className="w-12 h-12 text-indigo-400 mb-2" />
                <span className="text-4xl font-black text-white">{progress}%</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Trust Score</span>
             </div>
             <div className="mt-8 px-6 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Growth Phase Active</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Compliance Roadmap */}
        <div className="lg:col-span-8 space-y-8">
           <div className="glass-card p-12 rounded-[3.5rem] relative overflow-hidden group">
              <div className="flex items-center justify-between mb-12">
                 <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    <ShieldCheck className="w-7 h-7 text-indigo-600" /> Verification Roadmap
                 </h3>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">4 Node Protocol Stages</span>
              </div>

              <div className="space-y-12 relative">
                 <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-slate-100"></div>
                 
                 {roadmap.map((item, i) => (
                   <div key={i} className="flex items-start gap-10 relative z-10 group/item">
                      <div className={cn(
                        "w-14 h-14 rounded-[1.5rem] flex items-center justify-center shadow-xl transition-all duration-500",
                        item.status === "COMPLETED" ? "bg-emerald-500 text-white shadow-emerald-200" :
                        item.status === "IN_PROGRESS" ? "bg-indigo-600 text-white shadow-indigo-200 animate-pulse scale-110" :
                        "bg-white text-slate-300 border-2 border-dashed border-slate-200"
                      )}>
                        {item.status === "COMPLETED" ? <CheckCircle2 className="w-7 h-7" /> : 
                         item.status === "IN_PROGRESS" ? <Zap className="w-7 h-7" /> : 
                         <Lock className="w-6 h-6" />}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between mb-2">
                           <h4 className={cn(
                             "text-lg font-black transition-colors",
                             item.status === "COMPLETED" ? "text-slate-900" :
                             item.status === "IN_PROGRESS" ? "text-indigo-600" : "text-slate-400"
                           )}>{item.title}</h4>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                        </div>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xl mb-3">{item.desc}</p>
                        <span className={cn(
                          "text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full",
                          item.status === "COMPLETED" ? "bg-emerald-50 text-emerald-600" :
                          item.status === "IN_PROGRESS" ? "bg-indigo-50 text-indigo-600" : "bg-slate-100 text-slate-400"
                        )}>{item.status.replace("_", " ")}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Elite Benefits */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                 <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Globe className="w-6 h-6" />
                 </div>
                 <h4 className="text-xl font-black text-slate-900 mb-2">Global Exposure</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed">Platinum factories are featured in the &quot;Verified Supplier&quot; section for Fortune 500 buyers.</p>
              </div>
              <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                 <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Zap className="w-6 h-6" />
                 </div>
                 <h4 className="text-xl font-black text-slate-900 mb-2">Instant Payouts</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed">Unlock immediate fund release upon QC approval without waiting for port manifest verification.</p>
              </div>
           </div>
        </div>

        {/* Sidebar Status Hub */}
        <div className="lg:col-span-4 space-y-8">
           <div className="p-10 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              <Crown className="w-12 h-12 text-amber-400 mb-8" />
              <h3 className="text-2xl font-black mb-1">Platinum Node</h3>
              <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em] mb-10">Locked Protocol</p>
              
              <div className="space-y-6 mb-12">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-indigo-200">
                       <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-indigo-100">Zero Escrow Fee (PRO)</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-indigo-200">
                       <Users className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-indigo-100">Dedicated Success Node</span>
                 </div>
                 <div className="flex items-center gap-4 opacity-40">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-indigo-200">
                       <Lock className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-indigo-100">Priority Trade Tunnel</span>
                 </div>
              </div>

              <button className="w-full py-5 bg-white text-indigo-900 font-black rounded-[2rem] hover:bg-amber-50 transition-all flex items-center justify-center gap-3 active:scale-95">
                 Unlock Benefits <ChevronRight className="w-5 h-5 text-indigo-600" />
              </button>
           </div>

           <div className="glass-card p-10 rounded-[3rem] border border-slate-100">
              <h4 className="text-lg font-black text-slate-900 mb-6">Auditor Insights</h4>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-1.5 h-auto bg-indigo-600 rounded-full"></div>
                    <div>
                       <p className="text-xs font-bold text-slate-900 leading-relaxed mb-1">Upload Environmental Logs</p>
                       <p className="text-[10px] text-slate-400 font-medium">To qualify for &quot;Green Factory&quot; status and reach Platinum faster.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-1.5 h-auto bg-slate-200 rounded-full"></div>
                    <div>
                       <p className="text-xs font-bold text-slate-900 leading-relaxed mb-1">Verify Workforce Safety</p>
                       <p className="text-[10px] text-slate-400 font-medium">Final step before the physical audit on Oct 28.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
