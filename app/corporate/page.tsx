"use client";

import { Navbar } from "@/components/layout/navbar";
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  BarChart3,
  Users,
  Lock,
  ArrowRight,
  Briefcase,
  Layers,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function CorporatePage() {
  const corporatePillars = [
    { title: "Enterprise Sourcing", desc: "Access high-volume manufacturing nodes with proven global output capacity.", icon: <Briefcase className="w-8 h-8" /> },
    { title: "Risk Mitigation", desc: "Automated compliance monitoring and physical audit trails for every contract.", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Supply Chain Resilience", desc: "Diversify your manufacturing base across verified global geographies.", icon: <Layers className="w-8 h-8" /> },
    { title: "Advanced Analytics", desc: "Real-time visibility into production milestones and logistics performance.", icon: <BarChart3 className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24">
        {/* Corporate Hero Section */}
        <section className="relative py-24 overflow-hidden bg-slate-900">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:60px_60px]"></div>
          </div>
          
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[140px] -mb-64 -mr-64"></div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                 <Building2 className="w-5 h-5 text-indigo-400" />
                 <span className="text-[10px] font-extrabold text-white uppercase tracking-[0.25em]">Enterprise Trade Infrastructure</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-none">
                Command Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Global Supply Node.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl font-medium mb-12 leading-relaxed">
                Leedwey Corporate provides Fortune 500 entities with a secure, audited, and transparent manufacturing ecosystem. Scale your procurement with absolute certainty.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                 <Link href="/contact?dept=Corporate" className="w-full sm:w-auto px-12 py-6 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/30 flex items-center justify-center gap-3 group">
                    Request Enterprise Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link href="/contact?dept=Compliance" className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md text-center">
                    Schedule Technical Audit
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {corporatePillars.map((pillar, i) => (
                    <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50 transition-all group">
                       <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors mb-10 border border-slate-50">
                          {pillar.icon}
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">{pillar.title}</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global Infrastructure Section */}
        <section className="py-24 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:30px_30px]"></div>
                 </div>
                 
                 <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                       <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 tracking-tight leading-tight">Infrastructure for <br /> Large-Scale Trade.</h2>
                       <div className="space-y-8">
                          {[
                             { title: "Direct ERP Integration", desc: "Seamlessly connect Leedwey procurement data with your existing SAP, Oracle, or Microsoft Dynamics environments.", icon: <Cpu className="w-6 h-6" /> },
                             { title: "Multi-Node Sourcing", desc: "Manage thousands of verified manufacturers across multiple continents from a single, unified command center.", icon: <Globe className="w-6 h-6" /> },
                             { title: "Dedicated Compliance Officer", desc: "Every corporate account is assigned a specialist to oversee audit scheduling and regulatory documentation.", icon: <Users className="w-6 h-6" /> },
                          ].map((feature, i) => (
                             <div key={i} className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                                   {feature.icon}
                                </div>
                                <div>
                                   <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                   <p className="text-slate-400 font-medium">{feature.desc}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                    
                    <div className="relative">
                       <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 space-y-10">
                          <div className="flex items-center justify-between border-b border-white/5 pb-8">
                             <div>
                                <p className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest mb-2">Operational Nodes</p>
                                <p className="text-3xl font-black text-white">Verified 100%</p>
                             </div>
                             <div className="w-16 h-16 rounded-full border-4 border-emerald-500/30 flex items-center justify-center">
                                <ShieldCheck className="w-8 h-8 text-emerald-500" />
                             </div>
                          </div>
                          <div className="space-y-6">
                             <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                <div className="w-[85%] h-full bg-gradient-to-r from-indigo-500 to-emerald-500"></div>
                             </div>
                             <div className="flex justify-between text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                                <span>Physical Audits</span>
                                <span className="text-white">85% Capacity Match</span>
                             </div>
                          </div>
                          <div className="p-8 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/20">
                             <p className="text-white font-black text-xl mb-2 italic">&quot;Leedwey has transformed our Asian sourcing node from a liability into a strategic asset.&quot;</p>
                             <p className="text-indigo-200 text-sm font-bold">&mdash; Head of Global Sourcing, Fortune 100 Tech</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Verification & Reporting */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                 <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Enterprise Compliance Reporting</h2>
                 <p className="text-xl text-slate-500 font-medium">Detailed audit logs and material traceability reports, ready for ESG and regulatory submission.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all group">
                    <Lock className="w-12 h-12 text-indigo-600 mb-8" />
                    <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">End-to-End <br /> Escrow Sovereignty.</h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">Control your capital through milestone-based release protocols, ensuring funds only move when quality and logistics markers are physically verified.</p>
                    <Link href="/escrow" className="inline-flex items-center gap-2 text-sm font-extrabold text-indigo-600 uppercase tracking-widest hover:gap-3 transition-all">
                       Explore Escrow Protocols <ArrowRight className="w-4 h-4" />
                    </Link>
                 </div>
                 <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all group">
                    <BarChart3 className="w-12 h-12 text-emerald-600 mb-8" />
                    <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">Real-Time <br /> Audit Dashboard.</h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">Access a live feed of factory inspections, raw material tests, and production line health across your entire manufacturer network.</p>
                    <Link href="/verification" className="inline-flex items-center gap-2 text-sm font-extrabold text-emerald-600 uppercase tracking-widest hover:gap-3 transition-all">
                       View Audit Standards <ArrowRight className="w-4 h-4" />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Secure Your Enterprise Node.</h2>
              <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">Join the world&apos;s most transparent B2B network. Our corporate specialists are ready to architect your custom sourcing environment.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="/contact?dept=Corporate" className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200">
                    Contact Corporate Specialist
                 </Link>
                 <Link href="/about" className="w-full sm:w-auto px-12 py-6 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all">
                    Our Global Mission
                 </Link>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
