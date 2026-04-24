"use client";

import { 
  ShieldCheck, 
  Globe, 
  Truck, 
  Bell, 
  CreditCard, 
  User,
  Lock,
  Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WholesalerSettingsPage() {
  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Header */}
      <div>
         <h1 className="text-4xl font-black text-slate-900 tracking-tight">Node Configuration</h1>
         <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-600" />
            Wholesale Terminal Control: Node WH-9920
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-50">
         {/* Settings Navigation */}
         <div className="lg:col-span-3 space-y-2">
            {[
               { icon: User, label: "Identity Node", active: true },
               { icon: Globe, label: "Trade Protocols", active: false },
               { icon: Truck, label: "Logistics Routing", active: false },
               { icon: Lock, label: "Security & Encryption", active: false },
               { icon: Bell, label: "Event Triggers", active: false },
               { icon: CreditCard, label: "Finance Routing", active: false },
            ].map((item) => (
               <button 
                  key={item.label}
                  className={cn(
                     "w-full p-5 rounded-2xl flex items-center gap-4 transition-all text-left font-black text-[10px] uppercase tracking-widest cursor-pointer group",
                     item.active ? "bg-slate-900 text-white shadow-xl shadow-slate-200" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  )}
               >
                  <item.icon className={cn("w-4 h-4 cursor-pointer", item.active ? "text-indigo-400" : "group-hover:text-indigo-600")} />
                  {item.label}
               </button>
            ))}
         </div>

         {/* Settings Content */}
         <div className="lg:col-span-9 space-y-8 text-slate-900">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-12">
               <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black tracking-tight">Identity Configuration</h2>
                  <button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all cursor-pointer">Save Changes</button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Authorized Representative</label>
                     <input type="text" placeholder="Demo Wholesaler" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-3xl text-sm font-black focus:outline-none focus:bg-white focus:border-indigo-600/10 transition-all" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Corporate Designation</label>
                     <input type="text" placeholder="Wholesale Buyer Node" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-3xl text-sm font-black focus:outline-none focus:bg-white focus:border-indigo-600/10 transition-all" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Terminal Email</label>
                     <input type="email" placeholder="wholesaler@leedwey.com" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-3xl text-sm font-black focus:outline-none focus:bg-white focus:border-indigo-600/10 transition-all" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Sourcing Jurisdiction</label>
                     <select className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-3xl text-sm font-black focus:outline-none focus:bg-white focus:border-indigo-600/10 transition-all appearance-none cursor-pointer">
                        <option>European Union (CE)</option>
                        <option>North America (ANSI)</option>
                        <option>Global Standard (ISO)</option>
                     </select>
                  </div>
               </div>

               <div className="pt-12 border-t border-slate-50 space-y-8">
                  <div className="flex items-center justify-between">
                     <div>
                        <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
                           <ShieldCheck className="w-5 h-5 text-indigo-600" />
                           Node Security
                        </h3>
                        <p className="text-xs text-slate-400 font-bold mt-1">Configure your end-to-end encryption and audit log protocols.</p>
                     </div>
                  </div>
                  
                  <div className="space-y-4">
                     {[
                        { label: "Two-Factor Node Auth", desc: "Require secondary verification for milestone releases.", status: true },
                        { label: "Auto-Encrypt Documents", desc: "All trade manifests are AES-256 encrypted by default.", status: true },
                        { label: "Public Node Discovery", desc: "Allow verified factories to push bulk offers to your node.", status: false },
                     ].map((toggle) => (
                        <div key={toggle.label} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:border-indigo-100 transition-all cursor-pointer group">
                           <div>
                              <p className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{toggle.label}</p>
                              <p className="text-xs text-slate-400 font-bold mt-0.5">{toggle.desc}</p>
                           </div>
                           <div className={cn(
                              "w-14 h-8 rounded-full transition-all relative cursor-pointer",
                              toggle.status ? "bg-slate-900 shadow-lg shadow-slate-200" : "bg-slate-200"
                           )}>
                              <div className={cn(
                                 "w-6 h-6 bg-white rounded-full absolute top-1 transition-all shadow-sm",
                                 toggle.status ? "right-1" : "left-1"
                              )}></div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="bg-rose-50 p-10 rounded-[3.5rem] border border-rose-100 flex items-center justify-between">
               <div>
                  <h3 className="text-xl font-black text-rose-900 tracking-tight">Deactivate Terminal Node</h3>
                  <p className="text-xs text-rose-600 font-bold mt-1">This will pause all active trade dialogues and freeze your credit facility.</p>
               </div>
               <button className="px-8 py-4 bg-white text-rose-600 font-black rounded-2xl hover:bg-rose-600 hover:text-white transition-all shadow-xl shadow-rose-100 text-[10px] uppercase tracking-widest cursor-pointer">Deactivate Node</button>
            </div>
         </div>
      </div>
    </div>
  );
}
