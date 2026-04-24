"use client";

import { Navbar } from "@/components/layout/navbar";
import { 
  User, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ShoppingBag,
  Sparkles,
  ArrowRight,
  PackageCheck,
  Globe,
  Rocket,
  Heart
} from "lucide-react";
import Link from "next/link";

export default function IndividualsPage() {
  const individualFeatures = [
    { name: "Flexible MOQs", desc: "Access factory-direct pricing even for smaller test batches.", icon: <ShoppingBag className="w-6 h-6" /> },
    { name: "Verified Quality", desc: "Same rigorous audits as enterprise orders, applied to every unit.", icon: <ShieldCheck className="w-6 h-6" /> },
    { name: "Scale at Your Pace", desc: "Seamless transition from solo buyer to wholesale enterprise.", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Direct Factory Link", desc: "Bypass middlemen and build direct relationships with makers.", icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] -mt-64 -ml-64"></div>
          
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-600/5 border border-indigo-100 mb-8">
                   <User className="w-4 h-4 text-indigo-600" />
                   <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">For Professional Solo Buyers</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                  Source Like a Pro. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Scale Without Limits.</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-xl font-medium mb-12 leading-relaxed">
                  Leedwey Individuals provides solo entrepreneurs and professional buyers with factory-direct access, lower MOQs, and the same iron-clad trade protection as the world&apos;s largest retailers.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 group">
                      Start Sourcing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                   <Link href="/auth/signup" className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all text-center">
                      Join for Free
                   </Link>
                </div>
              </div>
              
              <div className="relative">
                 <div className="relative z-10 bg-white rounded-[3rem] p-8 border border-slate-100 shadow-2xl shadow-indigo-100/50 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-20 space-y-8">
                       <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                             <Rocket className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Solo Growth Engine</span>
                       </div>
                       <h3 className="text-3xl font-black text-slate-900 leading-tight">Build your brand on factory infrastructure.</h3>
                       <p className="text-slate-500 font-medium">Bypass expensive distributors. Source directly from audited facilities and keep 100% of your margins.</p>
                       <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex -space-x-3">
                             {[1,2,3,4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                                   <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-20"></div>
                                </div>
                             ))}
                          </div>
                          <p className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">12k+ Solo Buyers Active</p>
                       </div>
                    </div>
                 </div>
                 {/* Decorative background element */}
                 <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {individualFeatures.map((feature, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50 transition-all group">
                       <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors mb-8">
                          {feature.icon}
                       </div>
                       <h3 className="text-xl font-black text-slate-900 mb-4">{feature.name}</h3>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Start Small Section */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="relative p-12 lg:p-20 rounded-[4rem] bg-slate-900 overflow-hidden text-center">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -mt-64 -mr-64"></div>
                 
                 <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                       <Sparkles className="w-4 h-4 text-emerald-400" />
                       <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">The Low-MOQ Advantage</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">Test Markets. <br /> Don&apos;t Break the Bank.</h2>
                    <p className="text-xl text-slate-400 font-medium mb-12">Leedwey connects you with factories that understand growth. Access lower minimums for your initial launches and scale into full-scale production as you grow.</p>
                    <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20">
                       Browse Low-MOQ Categories
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Education/Community Section */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-12">
                    <div>
                       <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Expert Sourcing <br /> Knowledge for One.</h2>
                       <p className="text-lg text-slate-500 font-medium leading-relaxed">Solo sourcing can be complex. We provide the tools, protocols, and specialists to help you navigate international trade with zero experience required.</p>
                    </div>
                    
                    <div className="space-y-8">
                       {[
                          { title: "Sourcing Masterclasses", desc: "Learn how to communicate with factories and negotiate like a pro.", icon: <Globe className="w-6 h-6" /> },
                          { title: "One-Click Documentation", desc: "Export-ready invoices and compliance docs generated automatically.", icon: <PackageCheck className="w-6 h-6" /> },
                       ].map((item, i) => (
                          <div key={i} className="flex gap-6">
                             <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                {item.icon}
                             </div>
                             <div>
                                <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-500 font-medium">{item.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="bg-indigo-600 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mb-32 -mr-32"></div>
                    <div className="relative z-10">
                       <Heart className="w-12 h-12 text-white mb-8 fill-white/20" />
                       <h3 className="text-3xl lg:text-4xl font-black mb-8 leading-tight">Built by solo founders, <br /> for solo founders.</h3>
                       <p className="text-indigo-100 font-medium mb-12 text-lg">We understand the hustle. Leedwey was built to democratize the global supply chain, making it accessible to anyone with a vision.</p>
                       <button className="w-full py-5 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl">
                          Join the Solo-Buyer Community
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight">Your Global Factory is Waiting.</h2>
              <p className="text-xl text-slate-500 font-medium mb-12">Stop overpaying distributors and start building your legacy with factory-direct sourcing today.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="/products" className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                    Explore Manufacturers
                 </Link>
                 <Link href="/verification" className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all">
                    How Verification Works
                 </Link>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
