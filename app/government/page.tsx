"use client";

import { Navbar } from "@/components/layout/navbar";
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  FileText,
  BadgeCheck,
  Landmark,
  Scale,
  FileSearch,
  Lock,
  ArrowRight,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import Link from "next/link";

export default function GovernmentPage() {
  const governmentSectors = [
    { name: "Public Infrastructure", desc: "Sourcing for bridges, energy grids, and transport networks.", icon: <Building2 className="w-6 h-6" /> },
    { name: "Medical & Healthcare", desc: "Regulated medical devices and pharma-grade manufacturing.", icon: <ShieldCheck className="w-6 h-6" /> },
    { name: "Defense & Security", desc: "High-compliance aerospace and security components.", icon: <Lock className="w-6 h-6" /> },
    { name: "Green Energy", desc: "Sustainable materials and renewable energy tech sourcing.", icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24">
        {/* G2B Hero Section */}
        <section className="relative py-24 overflow-hidden bg-slate-900">
           {/* Sophisticated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -mt-64 -mr-64"></div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
               <Landmark className="w-5 h-5 text-indigo-400" />
               <span className="text-[10px] font-extrabold text-white uppercase tracking-[0.2em]">Official Government Procurement Node</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Regulated Sourcing for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">Public Interest Scale.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium mb-12 leading-relaxed">
              Leedwey Government provides a high-security G2B gateway. Source from certified factories with strict adherence to ISO standards, local regulations, and transparent audit trails.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 group">
                  Access G2B Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3">
                  <FileSearch className="w-5 h-5 text-emerald-400" /> Compliance Verification
               </button>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                    { title: "Strict Compliance", desc: "Every manufacturing node undergoes mandatory physical audits and regulatory verification before G2B activation.", icon: <Scale className="w-8 h-8" /> },
                    { title: "Secure Escrow G2B", desc: "Government-grade financial protection with multi-signature escrow and milestone-based release protocols.", icon: <Lock className="w-8 h-8" /> },
                    { title: "Full Audit Traceability", desc: "Immutable records of every dialogue, document, and inspection, accessible for public accountability audits.", icon: <FileText className="w-8 h-8" /> },
                 ].map((pillar, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all">
                       <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 mb-8 border border-slate-100">
                          {pillar.icon}
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Sectors Section */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                 <div className="max-w-2xl">
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Active Procurement Sectors</h2>
                    <p className="text-lg text-slate-500 font-medium">Specialized manufacturing categories with enhanced regulatory oversight.</p>
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
                    <ShieldAlert className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">Active Monitoring Engaged</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {governmentSectors.map((sector, i) => (
                    <div key={i} className="p-8 rounded-[3rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50/50 transition-all cursor-pointer group">
                       <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-all mb-8">
                          {sector.icon}
                       </div>
                       <h3 className="text-xl font-black text-slate-900 mb-2">{sector.name}</h3>
                       <p className="text-sm text-slate-500 font-medium mb-6 line-clamp-2">{sector.desc}</p>
                       <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">Enter Portal</span>
                          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Verification Hub */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="relative p-12 lg:p-20 rounded-[4rem] bg-indigo-600 overflow-hidden shadow-2xl shadow-indigo-200">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mt-64 -mr-64"></div>
                 
                 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                       <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">Enterprise & Government <br /> Verification Center.</h2>
                       <p className="text-xl text-white/80 font-medium mb-12">Submit official procurement documentation for node-level verification and access high-volume factory contracts.</p>
                       <div className="flex flex-wrap gap-6">
                          <button className="px-8 py-4 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl">
                             Verify Agency Node
                          </button>
                          <button className="px-8 py-4 bg-indigo-500 text-white font-black rounded-2xl hover:bg-indigo-400 transition-all border border-indigo-400">
                             Submit Regulatory RFQ
                          </button>
                       </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-12 space-y-8">
                       <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                             <BadgeCheck className="w-8 h-8" />
                          </div>
                          <div>
                             <p className="text-white font-black text-lg">ISO 14001 Compliant</p>
                             <p className="text-white/60 text-sm font-medium">Environmental standard verified for all G2B factories.</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                             <ShieldCheck className="w-8 h-8" />
                          </div>
                          <div>
                             <p className="text-white font-black text-lg">AES-256 Encrypted</p>
                             <p className="text-white/60 text-sm font-medium">All trade dialogues are protected by military-grade encryption.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight">Partnering with Public Agencies.</h2>
              <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">Join the network of government bodies sourcing through Leedwey to ensure transparency, security, and accountability in public procurement.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                    Contact Government Specialist
                 </Link>
                 <Link href="/verification" className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all">
                    View Compliance Standards
                 </Link>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
