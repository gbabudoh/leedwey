"use client";

import Image from "next/image";
import { ShieldCheck, Video, CreditCard, CheckCircle2, Lock } from "lucide-react";

export function TrustProtection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
              <Image 
                src="/C:/Users/Godwin/.gemini/antigravity/brain/96ab28b6-ac4d-48bf-a3e1-365f5a942d91/secure_b2b_transaction_nodes_1776949277365.png"
                alt="Secure Trade Nodes"
                width={600}
                height={600}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Protection Cards */}
              <div className="absolute top-8 left-8 glass-card p-4 rounded-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Protected Trade</p>
                  <p className="text-[10px] text-slate-500">100% Escrow Secured</p>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 glass-dark p-4 rounded-2xl flex items-center gap-3 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Video className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Live Factory Tour</p>
                  <p className="text-[10px] text-slate-400">Real-time Verification</p>
                </div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>
          </div>

          {/* Text Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Transparency Protocol</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              A Closed Ecosystem built on <span className="text-indigo-600">Absolute Trust.</span>
            </h2>
            
            <p className="text-lg text-slate-600 font-medium mb-10">
              Traditional marketplaces leave you exposed. Leedwey protects every handshake through our proprietary triple-layer verification system.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">On-Site Factory Audits</h4>
                  <p className="text-slate-500 font-medium">We don't just verify paperwork. Our agents perform physical inspections and live factory tours for every manufacturer.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Milestone-Based Escrow</h4>
                  <p className="text-slate-500 font-medium">Payments are released only when quality milestones are met and verified by you or a third-party inspector.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                  <Video className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Real-time Logistics Tracking</h4>
                  <p className="text-slate-500 font-medium">Full visibility from the factory floor to your warehouse. No more black-hole shipping periods.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
