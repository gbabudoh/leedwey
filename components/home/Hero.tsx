"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

interface HeroProps {
  overlayImage?: string;
}

export function Hero({ overlayImage }: HeroProps) {
  const displayImage = overlayImage || "/images/hero-factory.png";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-900/50"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] -mr-96 -mt-96"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content (Restored original style) */}
          <div className="max-w-2xl py-12 lg:py-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest font-sans">Closed B2B Ecosystem</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Direct from <span className="text-gradient">Manufacturers</span> to Global Buyers.
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed">
              A secure, transparent, and verified trade platform connecting factories with wholesale, government, and individual buyers worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/products" className="btn-primary flex items-center gap-2 group cursor-pointer">
                Start Sourcing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform cursor-pointer" />
              </Link>
              <Link href="/manufacturers" className="px-6 py-2.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer">
                Explore Factories
              </Link>
            </div>

            {/* Trust Points (Restored original row style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-3 group/point cursor-default">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover/point:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">100% Verified</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Manufacturer Audit</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group/point cursor-default">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover/point:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Secure Escrow</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Milestone Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group/point cursor-default">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover/point:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Global Logistics</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">End-to-End Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image Overlay (The new addition) */}
          <div className="relative animate-in slide-in-from-right-12 duration-1000 hidden lg:block">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(79,70,229,0.3)] border-[8px] border-white/5 group">
              <Image
                src={displayImage}
                alt="Factory Feature"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <p className="text-white text-xs font-bold tracking-widest uppercase">Verified Manufacturing Unit #429</p>
                </div>
              </div>
            </div>
            
            {/* Floating Decorative Card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Trade Security</p>
                  <p className="text-sm font-extrabold text-white">Milestone Secured</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
