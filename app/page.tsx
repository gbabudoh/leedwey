"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/Hero";
import { BuyerSegments } from "@/components/home/BuyerSegments";
import { TrustProtection } from "@/components/home/TrustProtection";
import { ProductCard } from "@/components/home/product-card";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--color-background]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trust & Protection Section */}
        <TrustProtection />

        {/* Buyer Segments Section */}
        <BuyerSegments />

        {/* Featured Manufacturers/Products Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Global Verified Hubs</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Featured Manufacturers</h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Source from audited facilities with proven track records in high-precision manufacturing and secure delivery.
                </p>
              </div>
              <Link href="/products" className="group flex items-center gap-3 px-8 py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm border border-slate-100">
                View All Manufacturers
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <ProductCard 
                    key={i}
                    id={`${i}`}
                    title={`Precision Component Model X${i}`}
                    image=""
                    price="$250.00 - $1,200.00"
                    moq="5 Units"
                    supplier="PrecisionTech Manufacturing Ltd."
                    years={5}
                    rating={4.9}
                    isVerified={true}
                  />
               ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="relative bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden text-center shadow-2xl shadow-indigo-500/10">
              {/* Background Accents - More Vibrant but Controlled */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] -mt-64 -ml-64"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -mb-64 -mr-64"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                  Ready to Secure Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">Supply Chain?</span>
                </h2>
                <p className="text-xl text-slate-300 mb-12 font-medium leading-relaxed">
                  Join the world&apos;s most transparent B2B platform. Verified manufacturers, secure escrow, and physical audits.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/auth/signup" className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 hover:-translate-y-1 active:scale-95">
                    Get Started Free
                  </Link>
                  <Link href="/contact" className="px-10 py-5 rounded-2xl border-2 border-white/10 bg-white/5 text-white font-black hover:bg-white/10 transition-all backdrop-blur-md hover:-translate-y-1 active:scale-95">
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
             <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Building2Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-slate-900 tracking-tight">
                  Leedwey
                </span>
              </Link>
              <p className="text-slate-500 font-medium mb-8 max-w-sm">
                The leading closed B2B platform for transparent manufacturer-direct trade. Physical audits, secure escrow, and global protection.
              </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link href="/products" className="hover:text-indigo-600 transition-colors">Marketplace</Link></li>
              <li><Link href="/wholesale" className="hover:text-indigo-600 transition-colors">Wholesale Hub</Link></li>
              <li><Link href="/corporate" className="hover:text-indigo-600 transition-colors">Corporate Enterprise</Link></li>
              <li><Link href="/individuals" className="hover:text-indigo-600 transition-colors">Individual Sourcing</Link></li>
              <li><Link href="/government" className="hover:text-indigo-600 transition-colors">Government Portal</Link></li>
              <li><Link href="/verification" className="hover:text-indigo-600 transition-colors">Verification</Link></li>
              <li><Link href="/escrow" className="hover:text-indigo-600 transition-colors">Secure Escrow</Link></li>
              <li><Link href="/logistics" className="hover:text-indigo-600 transition-colors">Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/compliance" className="hover:text-indigo-600 transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-20 mt-20 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">&copy; 2026 Leedwey Global. All rights reserved.</p>
          <div className="flex items-center gap-8 text-slate-400">
            <span className="text-xs font-bold uppercase tracking-widest">ISO 27001 Certified</span>
            <span className="text-xs font-bold uppercase tracking-widest">GDPR Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Building2Icon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  )
}
