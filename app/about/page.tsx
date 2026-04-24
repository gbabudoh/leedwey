"use client";

import { Navbar } from "@/components/layout/navbar";
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  Target, 
  Heart, 
  Zap, 
  CheckCircle2, 
  MapPin,
  TrendingUp,
  Award
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    { name: "Absolute Transparency", desc: "No hidden layers. Every factory tour is live, and every audit report is fully accessible.", icon: <Globe className="w-6 h-6" /> },
    { name: "Iron-Clad Security", desc: "Our multi-layer verification and milestone escrow ensure your capital is always protected.", icon: <ShieldCheck className="w-6 h-6" /> },
    { name: "Manufacturer Direct", desc: "We eliminate unnecessary middlemen to foster direct, long-term trade relationships.", icon: <Zap className="w-6 h-6" /> },
    { name: "Global Integrity", desc: "Operating with high-compliance standards across all international trade jurisdictions.", icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24">
        {/* About Hero Section */}
        <section className="relative py-24 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
                 <Target className="w-4 h-4 text-indigo-600" />
                 <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Our Global Mission</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                Architecting the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Transparent Trade.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                Leedwey was founded to solve the trust deficit in global B2B trade. We aren&apos;t just a marketplace; we are a physical verification infrastructure for the world&apos;s most demanding buyers.
              </p>
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        </section>

        {/* Vision Section with Stats */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl font-black mb-8 leading-tight">A Single Source of Truth for Global Sourcing.</h2>
                    <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
                       We believe that every professional buyer deserves absolute certainty. Our global network of physical auditors ensures that the digital representation of a factory matches its physical reality—every time.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <p className="text-4xl font-black text-white mb-2">100%</p>
                          <p className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest">Audit Accuracy</p>
                       </div>
                       <div>
                          <p className="text-4xl font-black text-white mb-2">$2B+</p>
                          <p className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">Trade Protected</p>
                       </div>
                    </div>
                 </div>
                 <div className="relative">
                    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-sm relative z-10">
                       <TrendingUp className="w-12 h-12 text-emerald-500 mb-8" />
                       <h3 className="text-2xl font-black mb-6">Democratizing World-Class Supply Chains.</h3>
                       <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                          By leveraging advanced verification protocols and milestone-based escrow, we enable brands of all sizes to source from the same world-class facilities as global enterprises.
                       </p>
                       <div className="flex items-center gap-4 py-6 border-t border-white/5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-bold text-slate-300">ISO 27001 Certified Infrastructure</span>
                       </div>
                    </div>
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-600/30 rounded-full blur-[100px] -z-10"></div>
                 </div>
              </div>
           </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="text-center mb-20">
                 <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
                 <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">The principles that drive every verification and transaction on our platform.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {values.map((value, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50 transition-all group text-center">
                       <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors mx-auto mb-8 border border-slate-100">
                          {value.icon}
                       </div>
                       <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">{value.name}</h3>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{value.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global Presence */}
        <section className="py-24 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="bg-indigo-600 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden text-white">
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                 
                 <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                       <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">Physically Present <br /> Where Trade Happens.</h2>
                       <p className="text-xl text-indigo-100 font-medium mb-12">
                          We don&apos;t just operate in the cloud. We have physical operational nodes in major manufacturing and logistics hubs to ensure boots-on-the-ground verification.
                       </p>
                       <div className="space-y-6">
                          {[
                             { city: "Singapore", role: "Global HQ & Logistics Hub" },
                             { city: "Shenzhen", role: "Manufacturing Audit Node" },
                             { city: "New York", role: "Trade Compliance Node" },
                          ].map((node, i) => (
                             <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                   <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                   <p className="font-black">{node.city}</p>
                                   <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest">{node.role}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-8 rounded-[2.5rem] bg-white text-slate-900 shadow-xl">
                          <Users className="w-10 h-10 text-indigo-600 mb-6" />
                          <h4 className="text-2xl font-black mb-2">500+</h4>
                          <p className="text-sm text-slate-500 font-medium">Certified Physical Auditors Globally</p>
                       </div>
                       <div className="p-8 rounded-[2.5rem] bg-indigo-500 text-white border border-white/10">
                          <Heart className="w-10 h-10 text-white mb-6 fill-white/20" />
                          <h4 className="text-2xl font-black mb-2">12k+</h4>
                          <p className="text-sm text-indigo-100 font-medium">Trade Partners Verified Since 2024</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight">Join the Network of Certainty.</h2>
              <p className="text-xl text-slate-500 font-medium mb-12">Experience the world&apos;s most transparent B2B ecosystem. Start sourcing with absolute confidence today.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="/auth/signup" className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                    Get Started Free
                 </Link>
                 <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all">
                    Talk to a Specialist
                 </Link>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
