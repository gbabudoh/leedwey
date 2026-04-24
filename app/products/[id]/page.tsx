"use client";

import { Navbar } from "@/components/layout/navbar";
import { ShieldCheck, Globe, Clock, Package, Building2, Star, ArrowRight, FileText, Zap, MessageSquare, Plane, Ship, Truck, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [isContactingLogistics, setIsContactingLogistics] = useState<string | null>(null);

  const handleStartOrder = () => {
    router.push("/checkout");
  };

  const shippingOptions = [
    {
      id: "1",
      provider: "Global Express Air",
      price: 145.00,
      eta: "3-5 Days",
      type: "Air",
      icon: <Plane className="w-5 h-5" />,
      recommended: true
    },
    {
      id: "2",
      provider: "Maersk Ocean Freight",
      price: 45.00,
      eta: "14-21 Days",
      type: "Sea",
      icon: <Ship className="w-5 h-5" />,
      recommended: false
    },
    {
      id: "3",
      provider: "Industrial Rail Link",
      price: 85.00,
      eta: "7-10 Days",
      type: "Rail",
      icon: <Truck className="w-5 h-5" />,
      recommended: false
    }
  ];

  // Mock product data
  const product = {
    id: id,
    title: "High-Precision Industrial CNC Component Model X-900",
    description: "Grade-A aerospace aluminum alloy component engineered for extreme tolerance environments. Physically audited manufacturing process with full material traceability.",
    price: "$250.00 - $1,200.00",
    moq: "5 Units",
    leadTime: "14-21 Days",
    rating: 4.9,
    reviews: 128,
    manufacturer: {
      name: "PrecisionTech Manufacturing Ltd.",
      years: 12,
      verified: true,
      location: "Shenzhen, Guangdong",
      certifications: ["ISO 9001", "ISO 14001", "AS9100D"]
    },
    specs: [
      { label: "Material", value: "Aluminum 7075-T6" },
      { label: "Tolerance", value: "±0.005mm" },
      { label: "Surface Finish", value: "Anodized Black" },
      { label: "Weight", value: "1.2kg" }
    ]
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Logistics Contact Modal */}
      {isContactingLogistics && (
        <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-lg bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
             <button 
              onClick={() => setIsContactingLogistics(null)}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors"
             >
               <X className="w-5 h-5" />
             </button>
             
             <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                   <MessageSquare className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Contact Logistics Agent</h2>
                <p className="text-sm text-slate-500 font-medium">Inquiry for {shippingOptions.find(o => o.id === isContactingLogistics)?.provider}</p>
             </div>
             
             <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Subject</p>
                   <p className="font-bold text-slate-900">Custom Freight Quotation & Capacity Check</p>
                </div>
                <div>
                   <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                   <textarea 
                    placeholder="Ask about customs, specific delivery requirements, or volume discounts..."
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900 resize-none"
                    defaultValue={`Hello, we are interested in using ${shippingOptions.find(o => o.id === isContactingLogistics)?.provider} for the ${product.title}. Please confirm capacity for next week.`}
                   ></textarea>
                </div>
                
                <div className="pt-4">
                   <button 
                    onClick={() => setIsContactingLogistics(null)}
                    className="w-full py-5 bg-slate-900 text-white font-extrabold rounded-[2rem] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
                   >
                      <Zap className="w-5 h-5 text-indigo-400" /> Send Secure Message
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}

      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-indigo-600 transition-colors">Marketplace</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-slate-900">Product Detail</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Image Gallery (Premium Placeholder) */}
            <div className="space-y-6">
              <div className="aspect-square rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden group relative">
                 <Package className="w-32 h-32 text-slate-200 group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute top-8 left-8">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-slate-100">
                       <ShieldCheck className="w-5 h-5 text-emerald-500" />
                       <span className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">Physically Audited</span>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                 {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-indigo-200 transition-colors cursor-pointer">
                       <Package className="w-8 h-8 text-slate-200" />
                    </div>
                 ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
               <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">Industrial Grade</span>
                     <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{product.rating}</span>
                        <span className="text-slate-400 font-medium ml-1">({product.reviews} Audits)</span>
                     </div>
                  </div>
                  <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">{product.title}</h1>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">{product.description}</p>
               </div>

               <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 mb-8">
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Unit Price</p>
                        <p className="text-3xl font-extrabold text-indigo-600">{product.price}</p>
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Minimum Order</p>
                        <p className="text-3xl font-extrabold text-slate-900">{product.moq}</p>
                     </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">Lead Time: {product.leadTime}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">Global Shipping</span>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button 
                    onClick={handleStartOrder}
                    className="flex-1 py-4 bg-slate-900 text-white font-extrabold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                     <Zap className="w-5 h-5" /> Buy Now
                  </button>
                  <Link href="/messages" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-extrabold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                     <MessageSquare className="w-5 h-5" /> Chat with Factory
                  </Link>
               </div>

               {/* Manufacturer Trust Card */}
               <div className="p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
                           <Building2 className="w-7 h-7 text-indigo-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900">{product.manufacturer.name}</h4>
                           <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{product.manufacturer.location}</p>
                        </div>
                     </div>
                     <Link href="/manufacturers/1" className="flex items-center gap-2 px-6 py-3 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white font-extrabold text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-sm hover:shadow-indigo-100 group cursor-pointer border border-indigo-100/50">
                        View Factory Profile
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                     {product.manufacturer.certifications.map(cert => (
                        <span key={cert} className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-extrabold border border-emerald-100 uppercase tracking-widest">{cert}</span>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Logistics Options Comparison */}
          <div className="mt-24 border-t border-slate-100 pt-24">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                   <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Logistics Options</h2>
                   <p className="text-lg text-slate-500 font-medium">Compare verified shipping routes from the factory to your warehouse.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
                   <ShieldCheck className="w-4 h-4 text-emerald-500" />
                   <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">Leedwey Verified Routes</span>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {shippingOptions.map(option => (
                   <div key={option.id} className="p-8 rounded-[3rem] border border-slate-100 bg-white hover:border-indigo-100 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-50/50">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${option.recommended ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-400"}`}>
                         {option.icon}
                      </div>
                      
                      {option.recommended && (
                         <div className="absolute top-8 right-8">
                            <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[8px] font-extrabold text-indigo-600 uppercase tracking-widest">Factory Pick</span>
                         </div>
                      )}

                      <h3 className="text-xl font-bold text-slate-900 mb-2">{option.provider}</h3>
                      <div className="flex items-center gap-4 mb-6">
                         <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                            <Clock className="w-4 h-4" />
                            {option.eta}
                         </div>
                         <div className="text-xs font-extrabold text-slate-300 uppercase tracking-widest">
                            {option.type} Freight
                         </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                         <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Est. Cost</p>
                            <p className="text-2xl font-extrabold text-slate-900">${option.price.toFixed(2)}</p>
                         </div>
                         <button 
                          onClick={() => setIsContactingLogistics(option.id)}
                          className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm flex items-center justify-center"
                          title="Contact Logistics Provider"
                         >
                            <MessageSquare className="w-6 h-6" />
                         </button>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Bottom Tabs Section (Simple Layout for Demo) */}
          <div className="mt-24 border-t border-slate-100 pt-24">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                   <h3 className="text-2xl font-bold text-slate-900 mb-8">Technical Specifications</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                      {product.specs.map(spec => (
                         <div key={spec.label} className="flex items-center justify-between py-4 border-b border-slate-50">
                            <span className="text-slate-500 font-medium">{spec.label}</span>
                            <span className="text-slate-900 font-bold">{spec.value}</span>
                         </div>
                      ))}
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-8">Compliance Docs</h3>
                   <div className="space-y-4">
                      {["Product Safety Report", "Material Compliance Cert", "Audit Summary 2026"].map(doc => (
                         <div key={doc} className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-colors cursor-pointer group">
                            <FileText className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                            <span className="text-sm font-bold text-slate-700">{doc}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
