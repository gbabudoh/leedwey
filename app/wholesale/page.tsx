"use client";

import { Navbar } from "@/components/layout/navbar";
import { 
  Building2, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  ArrowRight,
  Package,
  Truck,
  FileText,
  BadgeCheck,
  Search
} from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/home/product-card";

export default function WholesalePage() {
  const categories = [
    { name: "Industrial Machinery", count: "1.2k+ Factories", icon: <Building2 className="w-6 h-6" /> },
    { name: "Electronics & PCB", count: "3.4k+ Factories", icon: <Zap className="w-6 h-6" /> },
    { name: "Textiles & Apparel", count: "2.1k+ Factories", icon: <Package className="w-6 h-6" /> },
    { name: "Raw Materials", count: "800+ Suppliers", icon: <Globe className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <BadgeCheck className="w-4 h-4 text-emerald-500" />
               <span className="text-[10px] font-extrabold text-slate-900 uppercase tracking-widest">Enterprise Wholesale Hub</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              Scale Your Supply with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Verified Factory Nodes.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium mb-12 leading-relaxed">
              Leedwey Wholesale connects enterprise buyers directly to audited manufacturing plants. Eliminate middlemen, secure volume pricing, and track production in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 group">
                  Start Bulk Sourcing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600" /> Request Enterprise RFQ
               </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-24">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                    { label: "Verified Factories", value: "12,400+", icon: <Building2 className="w-5 h-5" /> },
                    { label: "Annual Volume", value: "$4.2B+", icon: <BarChart3 className="w-5 h-5" /> },
                    { label: "Active Buyers", value: "85,000+", icon: <Users className="w-5 h-5" /> },
                 ].map((stat, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex items-center gap-6 hover:shadow-xl hover:shadow-indigo-50/50 transition-all group">
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          {stat.icon}
                       </div>
                       <div>
                          <p className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                 <div className="max-w-2xl">
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Source by Industry</h2>
                    <p className="text-lg text-slate-500 font-medium">Deep-dive into specialized manufacturing hubs with localized audits.</p>
                 </div>
                 <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Find a specific industry..."
                      className="pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 outline-none font-bold text-sm w-full md:w-80 transition-all"
                    />
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {categories.map((cat, i) => (
                    <div key={i} className="p-8 rounded-[3rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50/50 transition-all cursor-pointer group">
                       <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-all mb-8">
                          {cat.icon}
                       </div>
                       <h3 className="text-xl font-black text-slate-900 mb-2">{cat.name}</h3>
                       <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.count}</span>
                          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Featured Wholesale Listings */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Trending Bulk Listings</h2>
                 <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">High-volume orders with active production lines ready for onboarding.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[1, 2, 3, 4].map((i) => (
                    <ProductCard 
                      key={i}
                      id={`w-${i}`}
                      title={`Wholesale Component Pack B-${i}`}
                      image=""
                      price="$1.50 - $4.00"
                      moq="1,000 Units"
                      supplier="SinoGlobal Manufacturing"
                      years={8}
                      rating={4.8}
                      isVerified={true}
                    />
                 ))}
              </div>
           </div>
        </section>

        {/* Wholesale Features Section */}
        <section className="py-24 bg-slate-900 rounded-[4rem] mx-4 lg:mx-8 mb-24 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -mt-48 -mr-48"></div>
           
           <div className="max-w-7xl mx-auto px-8 lg:px-20 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                       Why Enterprise Buyers <br />
                       Choose <span className="text-indigo-400">Leedwey Wholesale.</span>
                    </h2>
                    <div className="space-y-8">
                       {[
                          { title: "Physical Factory Audits", desc: "Every manufacturer is physically visited and audited by our global agents before joining the network.", icon: <ShieldCheck className="w-6 h-6" /> },
                          { title: "Escrow Protected Bulk Orders", desc: "Milestone-based payments ensure your capital is only released after inspection and verification of goods.", icon: <Zap className="w-6 h-6" /> },
                          { title: "Smart Logistics Routing", desc: "Automated container optimization and sea/air freight comparison for multi-ton shipments.", icon: <Truck className="w-6 h-6" /> },
                       ].map((item, i) => (
                          <div key={i} className="flex gap-6">
                             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                                {item.icon}
                             </div>
                             <div>
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <div className="aspect-[4/3] rounded-[3rem] bg-indigo-600/10 border border-white/5 backdrop-blur-xl p-12 flex flex-col justify-center overflow-hidden">
                       <div className="space-y-6">
                          <div className="h-4 w-1/2 bg-white/10 rounded-full animate-pulse"></div>
                          <div className="h-4 w-3/4 bg-white/10 rounded-full animate-pulse delay-75"></div>
                          <div className="h-32 w-full bg-white/5 rounded-3xl border border-white/10 p-6 flex items-center gap-4">
                             <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <BadgeCheck className="w-8 h-8" />
                             </div>
                             <div>
                                <p className="text-white font-black text-lg">Factory Verified</p>
                                <p className="text-slate-400 text-sm font-medium">Audit Completed: Oct 2026</p>
                             </div>
                          </div>
                          <div className="h-4 w-2/3 bg-white/10 rounded-full animate-pulse delay-150"></div>
                       </div>
                    </div>
                    {/* Floating Accent */}
                    <div className="absolute -bottom-10 -left-10 p-8 rounded-[2rem] bg-white shadow-2xl border border-slate-100 hidden md:block">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-black">
                             LW
                          </div>
                          <div>
                             <p className="text-sm font-black text-slate-900">Enterprise Quote Active</p>
                             <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Valid for 48 Hours</p>
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
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight">Ready to Source in Bulk?</h2>
              <p className="text-xl text-slate-500 font-medium mb-12">Create an enterprise account today and gain access to wholesale pricing and verified factory nodes.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="/auth/signup" className="w-full sm:w-auto px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-200">
                    Create Wholesale Account
                 </Link>
                 <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all">
                    Talk to Bulk Specialist
                 </Link>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
