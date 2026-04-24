"use client";

import { useState } from "react";
import { 
  Plus, 
  Upload, 
  Package, 
  DollarSign, 
  Tag, 
  Truck, 
  Clock, 
  FileText, 
  Layers, 
  CheckCircle2,
  X,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewProductPage() {
  const [images, setImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["Industrial Parts", "Electronics", "Textiles", "Automotive", "Medical Gear", "Chemicals"];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
            <Package className="w-3.5 h-3.5 text-indigo-600" />
            Inventory Protocol
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Add New Product</h1>
          <p className="text-slate-500 font-medium">Deploy a new SKU to the global Leedwey marketplace.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Form Lane */}
        <div className="lg:col-span-8 space-y-8">
          {/* Visual Assets Section */}
          <section className="glass-card p-10 rounded-[3rem] space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl">
                01
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Visual Assets</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="aspect-square rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-3 text-slate-400 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all group">
                <Upload className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Upload Image</span>
              </button>
              {/* Mock Uploads */}
              {[1, 2].map(i => (
                <div key={i} className="aspect-square rounded-3xl bg-slate-100 relative group overflow-hidden border border-slate-100">
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="p-2 bg-red-500 text-white rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 font-medium italic">Max 5 high-resolution images. PNG or JPG accepted.</p>
          </section>

          {/* Core Specifications Section */}
          <section className="glass-card p-10 rounded-[3rem] space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xl">
                02
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Core Specifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Product Name</label>
                <div className="relative">
                   <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                   <input 
                    type="text" 
                    placeholder="e.g. Precision CNC Component X-1"
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                   />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                <div className="relative">
                   <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                   <select className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none">
                     {categories.map(c => <option key={c}>{c}</option>)}
                   </select>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Price per Unit (USD)</label>
                <div className="relative">
                   <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                   <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                   />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Minimum Order Qty</label>
                <div className="relative">
                   <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                   <input 
                    type="number" 
                    placeholder="100"
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                   />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Description</label>
              <textarea 
                rows={4}
                placeholder="Detail technical specifications, material composition, and industrial use cases..."
                className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[2rem] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
              ></textarea>
            </div>
          </section>

          {/* Logistics & Compliance Section */}
          <section className="glass-card p-10 rounded-[3rem] space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-xl">
                03
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Logistics & Compliance</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">FOB Port</label>
                <div className="relative">
                   <Truck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                   <input 
                    type="text" 
                    placeholder="e.g. Shenzhen, China"
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                   />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Est. Lead Time</label>
                <div className="relative">
                   <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                   <input 
                    type="text" 
                    placeholder="e.g. 15-20 Days"
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                   />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-10 rounded-[3rem] bg-slate-900 text-white space-y-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-indigo-500/30 transition-all duration-700"></div>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-indigo-400" /> Deployment
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</span>
                <span className="px-2 py-1 bg-amber-500/20 text-amber-500 text-[9px] font-black rounded-lg uppercase tracking-widest">Draft Node</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visibility</span>
                <span className="text-xs font-bold text-white">Private (Internal)</span>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <button 
                onClick={() => { setIsSubmitting(true); setTimeout(() => setIsSubmitting(false), 2000); }}
                className="w-full py-5 bg-indigo-600 text-white font-black rounded-[2rem] hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 active:scale-95"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Deploy Product <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
              <button className="w-full py-5 bg-white/5 text-slate-400 font-black rounded-[2rem] hover:bg-white/10 transition-all text-[10px] uppercase tracking-widest border border-white/5">
                Save Node Fragment
              </button>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[3rem]">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance Check</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
              Listing this product will trigger an automatic AI-compliance review. Ensure all technical specs are accurate to avoid node suspension.
            </p>
            <div className="space-y-4">
               {[
                 "Vetted Pricing",
                 "Verified Specs",
                 "Standardized FOB"
               ].map(item => (
                 <div key={item} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                   {item}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
