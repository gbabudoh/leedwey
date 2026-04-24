"use client";

import { Navbar } from "@/components/layout/navbar";
import { 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Landmark,
  ArrowRight,
  Globe,
  Headphones,
  Users
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [activeDepartment, setActiveDepartment] = useState("General");

  const departments = [
    { name: "General", desc: "General inquiries and platform support.", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Government", desc: "Regulated G2B procurement & compliance.", icon: <Landmark className="w-5 h-5" /> },
    { name: "Enterprise", desc: "Wholesale & high-volume sourcing.", icon: <Building2 className="w-5 h-5" /> },
    { name: "Partnerships", desc: "Global logistics & trade partnerships.", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24 pb-24">
        {/* Header Section */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                  <Headphones className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Global Support Nodes</span>
               </div>
               <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                 Connect with the <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Leedwey Global Network.</span>
               </h1>
               <p className="text-xl text-slate-500 font-medium leading-relaxed">
                 Whether you are a government agency, an enterprise buyer, or a certified factory, our specialists are ready to secure your trade node.
               </p>
            </div>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                 
                 {/* Left: Contact Form */}
                 <div className="lg:col-span-2">
                    <div className="bg-white rounded-[3rem] p-12 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
                       <h2 className="text-3xl font-black text-slate-900 mb-8">Send a Secure Inquiry</h2>
                       
                       <div className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="space-y-2">
                                <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Full Name</label>
                                <input 
                                  type="text" 
                                  placeholder="John Doe"
                                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900"
                                />
                             </div>
                             <div className="space-y-2">
                                <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Official Email</label>
                                <input 
                                  type="email" 
                                  placeholder="john@organization.gov"
                                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900"
                                />
                             </div>
                          </div>

                          <div className="space-y-4">
                             <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Select Department</label>
                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {departments.map(dept => (
                                   <button 
                                    key={dept.name}
                                    onClick={() => setActiveDepartment(dept.name)}
                                    className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-3 ${activeDepartment === dept.name ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100" : "bg-white border-slate-100 text-slate-500 hover:border-indigo-100"}`}
                                   >
                                      {dept.icon}
                                      <span className="text-xs font-bold uppercase tracking-tight">{dept.name}</span>
                                   </button>
                                ))}
                             </div>
                          </div>

                          <div className="space-y-2">
                             <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Message Content</label>
                             <textarea 
                              rows={5}
                              placeholder="Detail your requirements, project scope, or compliance needs..."
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900 resize-none"
                             ></textarea>
                          </div>

                          <button className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 group">
                             <Zap className="w-5 h-5 text-indigo-400" /> Send Secure Inquiry
                          </button>

                          <div className="flex items-center justify-center gap-3 py-4 border-t border-slate-50 mt-8">
                             <ShieldCheck className="w-4 h-4 text-emerald-500" />
                             <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">End-to-End Encrypted via Leedwey Vault</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Right: Specialist Info & Locations */}
                 <div className="space-y-12">
                    {/* Specialized Node Cards */}
                    <div className="space-y-6">
                       <h3 className="text-xl font-black text-slate-900">Direct Specialist Access</h3>
                       
                       <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm group hover:border-indigo-100 transition-all">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                             <Landmark className="w-6 h-6" />
                          </div>
                          <h4 className="font-black text-slate-900 mb-2">Government Portal Node</h4>
                          <p className="text-sm text-slate-500 font-medium mb-6">Dedicated support for public infrastructure and G2B regulatory sourcing.</p>
                          <a href="mailto:gov@leedwey.com" className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 uppercase tracking-widest group-hover:gap-3 transition-all">
                             Connect with Specialist <ArrowRight className="w-4 h-4" />
                          </a>
                       </div>

                       <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm group hover:border-emerald-100 transition-all">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                             <ShieldCheck className="w-6 h-6" />
                          </div>
                          <h4 className="font-black text-slate-900 mb-2">Audit & Compliance Node</h4>
                          <p className="text-sm text-slate-500 font-medium mb-6">Questions regarding physical audits, ISO certifications, or material traceability.</p>
                          <a href="mailto:audit@leedwey.com" className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-600 uppercase tracking-widest group-hover:gap-3 transition-all">
                             Connect with Specialist <ArrowRight className="w-4 h-4" />
                          </a>
                       </div>
                    </div>

                    {/* Global Hubs */}
                    <div className="space-y-6 pt-12 border-t border-slate-200">
                       <h3 className="text-xl font-black text-slate-900">Global Operational Hubs</h3>
                       
                       <div className="space-y-6">
                          {[
                             { city: "Singapore", role: "Global HQ & Logistics Node", address: "Marina Bay Financial Centre" },
                             { city: "Shenzhen", role: "Manufacturing Audit Hub", address: "Qianhai Financial Tower" },
                             { city: "New York", role: "Trade Compliance Node", address: "Hudson Yards Enterprise Center" },
                          ].map((hub, i) => (
                             <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                                   <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                   <h5 className="font-black text-slate-900">{hub.city}</h5>
                                   <p className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-tighter mb-1">{hub.role}</p>
                                   <p className="text-xs text-slate-500 font-medium">{hub.address}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* Global Protection Banner */}
        <section className="mt-12">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="p-12 rounded-[3rem] bg-slate-900 relative overflow-hidden text-center">
                 <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -mt-32 -ml-32"></div>
                 <div className="relative z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                       <Globe className="w-4 h-4 text-white" />
                       <span className="text-[10px] font-extrabold text-white uppercase tracking-widest">24/7 Global Surveillance Node Active</span>
                    </div>
                    <h2 className="text-3xl font-black text-white mb-4">Protecting Every Trade Node.</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-medium">Our legal and security teams operate globally to ensure every dialogue and transaction on Leedwey meets international trade compliance standards.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
