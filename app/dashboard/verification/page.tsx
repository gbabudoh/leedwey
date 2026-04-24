"use client";

import { ShieldCheck, CheckCircle2, FileText, MapPin, Zap, ArrowRight, ShieldAlert } from "lucide-react";

export default function VerificationPage() {
  const auditSteps = [
    {
      title: "Physical Facility Audit",
      description: "Our agents visit every factory to verify production capacity, safety standards, and workforce legitimacy.",
      icon: MapPin,
      color: "indigo"
    },
    {
      title: "Legal & Documentation",
      description: "Rigorous check of business licenses, tax certificates, and export permits for total compliance.",
      icon: FileText,
      color: "emerald"
    },
    {
      title: "Quality Certifications",
      description: "Verification of ISO, CE, and industry-specific certifications to ensure global quality standards.",
      icon: CheckCircle2,
      color: "blue"
    }
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <div className="relative bg-slate-950 rounded-[3rem] p-10 lg:p-16 overflow-hidden shadow-2xl shadow-indigo-500/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Trust & Safety Protocol</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Verified Sourcing. <br />
            <span className="text-gradient">Zero-Risk Trade.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
            Every manufacturer on Leedwey undergoes a rigorous 5-step verification process, including physical site audits and financial vetting.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
              Initiate Node Audit
            </button>
            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black hover:bg-white/10 transition-all backdrop-blur-md">
              Download Protocol
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Compliance Status */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {auditSteps.map((step, index) => (
              <div key={index} className="glass-card p-8 rounded-[2.5rem] group hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-500`}>
                  <step.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Verification Roadmap</h3>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-black rounded-lg uppercase tracking-widest">Active Status</span>
             </div>
             
             <div className="space-y-10 relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100"></div>
                
                {[
                  { title: "Onboarding Vetting", status: "COMPLETED", date: "Oct 12, 2023", icon: CheckCircle2, active: true },
                  { title: "Physical Facility Audit", status: "IN PROGRESS", date: "Expected Oct 28", icon: Zap, active: true },
                  { title: "Trade History Verification", status: "PENDING", date: "Waiting for Audit", icon: ShieldAlert, active: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-8 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all ${
                      item.status === "COMPLETED" ? "bg-emerald-500 text-white shadow-emerald-200" :
                      item.status === "IN PROGRESS" ? "bg-indigo-600 text-white shadow-indigo-200" :
                      "bg-white text-slate-300 border border-slate-100"
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                      </div>
                      <p className={`text-[10px] font-black uppercase tracking-widest ${
                        item.status === "COMPLETED" ? "text-emerald-500" :
                        item.status === "IN PROGRESS" ? "text-indigo-600 animate-pulse" :
                        "text-slate-400"
                      }`}>{item.status}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-[2.5rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Trust Statistics</h3>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-3xl font-black text-indigo-600 mb-1">1,240+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Audited Factories</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-3xl font-black text-emerald-500 mb-1">100%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trade Protection</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-3xl font-black text-blue-500 mb-1">ISO</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">9001:2015 Standards</p>
              </div>
            </div>
          </div>

          <div className="glass-dark p-8 rounded-[2.5rem] text-white">
            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">Tier 1 Elite Node</h3>
            <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
              Your business is currently qualifying for Tier 1 Elite status. Complete the facility audit to unlock priority sourcing.
            </p>
            <button className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-indigo-50 transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2">
              Upgrade Status <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
