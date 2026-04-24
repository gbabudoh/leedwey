"use client";

import { Navbar } from "@/components/layout/navbar";
import { Zap, ShieldCheck, CheckCircle2, ArrowRight, Lock, Milestone } from "lucide-react";
import Link from "next/link";

export default function EscrowPage() {
  const milestoneSteps = [
    {
      title: "Order Placement",
      description: "Funds are securely deposited into a neutral escrow account upon order confirmation.",
      icon: Lock,
      color: "indigo"
    },
    {
      title: "Production Milestone",
      description: "A portion of funds is released only after factory production reaches pre-agreed stages.",
      icon: Milestone,
      color: "blue"
    },
    {
      title: "Quality Inspection",
      description: "Inspection report must be approved before shipping phase begins.",
      icon: CheckCircle2,
      color: "emerald"
    },
    {
      title: "Final Delivery",
      description: "Remaining funds are released only after you confirm receipt and quality of goods.",
      icon: Zap,
      color: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">
          <div className="relative bg-slate-900 rounded-[3rem] p-12 lg:p-24 overflow-hidden text-white shadow-2xl">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] -mr-64 -mt-64"></div>
             
             <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 backdrop-blur-md mb-8">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest font-sans">Financial Protection</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1]">
                  Secure <span className="text-gradient">Milestone</span> Escrow.
                </h1>
                <p className="text-xl text-slate-300 mb-12 leading-relaxed font-medium">
                  Eliminate financial risk with Leedwey&apos;s advanced escrow system. Your funds are protected until you receive and verify your goods.
                </p>
                <div className="flex flex-wrap gap-6">
                   <button className="btn-primary text-lg px-10 py-4">Set Up Escrow Wallet</button>
                   <Link href="/compliance" className="flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors">
                     Review Financial Compliance <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
             </div>
          </div>
        </section>

        {/* Milestone Process */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24">
           <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">How Milestone Payments Work</h2>
              <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">A fair, transparent, and multi-stage payment system that protects both buyers and manufacturers.</p>
           </div>

           <div className="relative">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
              
              <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                 {milestoneSteps.map((step, index) => (
                    <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 transition-all group">
                       <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                          <step.icon className="w-8 h-8 text-indigo-600" />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.description}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Protection Tiers */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8">
           <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white overflow-hidden relative">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
              
              <div className="relative z-10 lg:max-w-xl">
                 <h2 className="text-4xl font-bold mb-8">Enterprise-Grade Protection for Every Transaction</h2>
                 <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                       <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                       </div>
                       <p className="font-medium text-indigo-100">PCI-DSS Level 1 Compliant Payment Gateway</p>
                    </li>
                    <li className="flex items-start gap-4">
                       <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                       </div>
                       <p className="font-medium text-indigo-100">Multi-Signature Wallet Approval Workflows</p>
                    </li>
                    <li className="flex items-start gap-4">
                       <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                       </div>
                       <p className="font-medium text-indigo-100">Automated Dispute Resolution Center</p>
                    </li>
                 </ul>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 text-center lg:min-w-[400px]">
                 <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <ShieldCheck className="w-10 h-10 text-indigo-600" />
                 </div>
                 <h4 className="text-2xl font-bold mb-2">$0.00 Risk</h4>
                 <p className="text-indigo-100 font-medium mb-8">Zero transaction fees on your first verified order through Leedwey Escrow.</p>
                 <button className="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-colors">Start Protected Trade</button>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
