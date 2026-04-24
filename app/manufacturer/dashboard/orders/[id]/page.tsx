"use client";

import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Package, 
  CheckCircle2, 
  Clock, 
  Upload, 
  ShieldCheck, 
  Info,
  DollarSign,
  User,
  Zap,
  MoreVertical,
  ChevronRight,
  Camera
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function OrderProductionManifest() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;

  const steps = [
    { id: "S1", title: "Raw Material", status: "COMPLETED", date: "Oct 18", desc: "Materials sourced & vetted" },
    { id: "S2", title: "Production", status: "IN_PROGRESS", date: "Oct 22", desc: "Main assembly line active" },
    { id: "S3", title: "Quality Control", status: "PENDING", date: "Oct 25", desc: "Final stress & safety test" },
    { id: "S4", title: "FOB Logistics", status: "PENDING", date: "Oct 28", desc: "Port delivery & manifest" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs & Actions */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-all group"
        >
          <div className="p-2 rounded-xl bg-white border border-slate-200 group-hover:bg-slate-50 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to Orders
        </button>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all">
            Download Invoice
          </button>
          <button className="p-2.5 bg-white border border-slate-200 rounded-2xl text-slate-400">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Active Manifest</span>
            <span className="text-xs font-mono font-bold text-slate-400">#{orderId}</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-2">High-Precision CNC X-900</h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">Monitoring the production lifecycle and milestone-based escrow release for <span className="text-slate-900 font-black">Global Logistics Corp</span>.</p>
        </div>

        <div className="flex items-center gap-8 pb-2">
           <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Contract Value</p>
              <p className="text-4xl font-black text-slate-900">$24,500.00</p>
           </div>
           <div className="w-px h-12 bg-slate-200"></div>
           <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Due Date</p>
              <p className="text-2xl font-black text-slate-900">Nov 12, 2026</p>
           </div>
        </div>
      </div>

      {/* Production Visualizer */}
      <div className="glass-card p-12 rounded-[3.5rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-indigo-600/10 transition-colors duration-700"></div>
        
        <div className="flex items-center justify-between mb-16 relative z-10">
           <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
             <Zap className="w-6 h-6 text-indigo-600" /> Production Roadmap
           </h3>
           <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[10px] font-black uppercase tracking-widest">Live Node Synchronized</span>
           </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
           {steps.map((step, i) => (
             <div key={step.id} className="relative group/item">
               {i < steps.length - 1 && (
                 <div className="absolute top-10 left-[70px] right-[-10px] h-0.5 bg-slate-100 hidden md:block">
                   <div 
                    className={cn(
                      "h-full transition-all duration-1000",
                      step.status === "COMPLETED" ? "bg-indigo-600 w-full" : "bg-transparent w-0"
                    )}
                   />
                 </div>
               )}
               
               <div className="flex flex-col items-center text-center">
                  <div className={cn(
                    "w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 mb-6 relative",
                    step.status === "COMPLETED" ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200" :
                    step.status === "IN_PROGRESS" ? "bg-white border-4 border-indigo-600 text-indigo-600 animate-pulse shadow-xl shadow-indigo-100" :
                    "bg-slate-50 border-2 border-dashed border-slate-200 text-slate-300"
                  )}>
                    {step.status === "COMPLETED" ? <CheckCircle2 className="w-8 h-8" /> : 
                     step.status === "IN_PROGRESS" ? <Clock className="w-8 h-8" /> : 
                     <Package className="w-8 h-8" />}
                  </div>
                  <h4 className="font-black text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{step.date || "Scheduled"}</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed px-4">{step.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Evidence & Milestones */}
        <div className="lg:col-span-8 space-y-8">
           <div className="glass-card p-10 rounded-[3rem] space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                   <ShieldCheck className="w-6 h-6 text-emerald-500" /> Payout Triggers
                </h3>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">2 of 3 Released</span>
              </div>

              <div className="space-y-4">
                 {[
                   { label: "Material Sourcing Protocol", amount: "$4,900", status: "RELEASED", date: "Oct 18" },
                   { label: "Production Initialization", amount: "$9,800", status: "RELEASED", date: "Oct 20" },
                   { label: "Quality Assurance Pass", amount: "$9,800", status: "LOCKED", date: "Pending" },
                 ].map((milestone) => (
                   <div key={milestone.label} className="p-6 bg-slate-50 rounded-[2rem] border border-transparent hover:border-slate-100 hover:bg-white transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-5">
                         <div className={cn(
                           "w-12 h-12 rounded-2xl flex items-center justify-center",
                           milestone.status === "RELEASED" ? "bg-emerald-50 text-emerald-600" : "bg-slate-200 text-slate-400"
                         )}>
                            <DollarSign className="w-6 h-6" />
                         </div>
                         <div>
                            <p className="font-bold text-slate-900">{milestone.label}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Scheduled Release: {milestone.date}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="font-black text-slate-900">{milestone.amount}</p>
                         <span className={cn(
                           "text-[8px] font-black uppercase tracking-widest",
                           milestone.status === "RELEASED" ? "text-emerald-500" : "text-slate-400"
                         )}>{milestone.status}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-10 rounded-[3rem] space-y-8">
              <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                 <Camera className="w-6 h-6 text-indigo-600" /> Evidence Logs
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                 <button className="aspect-video rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-indigo-200 hover:text-indigo-600 transition-all group">
                    <Upload className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Add Evidence</span>
                 </button>
                 <div className="aspect-video rounded-3xl bg-slate-100 relative group overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20"><Info className="w-5 h-5" /></button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                       <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[8px] font-black rounded-md uppercase tracking-widest">Mat_Sourcing.jpg</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Node Sidebar */}
        <div className="lg:col-span-4 space-y-8">
           <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <User className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold mb-1">Buyer Node</h3>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Secured Procurement Entity</p>
              
              <div className="space-y-4 mb-10">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Primary Liaison</p>
                    <p className="text-sm font-bold text-white">Sarah Chen</p>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Node Integrity</p>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                       <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Platinum Vetted</span>
                    </div>
                 </div>
              </div>

              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-[2rem] hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 active:scale-95">
                 Communicate <ChevronRight className="w-5 h-5" />
              </button>
           </div>

           <div className="glass-card p-10 rounded-[3rem]">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6">
                 <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Automated Release</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                The next payout milestone is triggered upon the completion of the <span className="font-black text-slate-900">Quality Control</span> stage. Please ensure all high-resolution inspection logs are uploaded to the evidence manifest.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
