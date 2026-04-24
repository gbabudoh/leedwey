"use client";

import { 
  User, 
  Lock, 
  Bell, 
  ShieldCheck, 
  ChevronRight,
  Settings as SettingsIcon,
  Globe,
  Mail,
  Camera,
  ShoppingBag
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function IndividualSettingsPage() {
  const sections = [
    { id: "profile", label: "Personal Identity", icon: User, desc: "Manage your buyer profile and legal name" },
    { id: "security", label: "Security Node", icon: Lock, desc: "Account security and session protocols" },
    { id: "notifications", label: "Trade Alerts", icon: Bell, desc: "Configure shipping and escrow notifications" },
    { id: "purchases", label: "Sourcing Defaults", icon: ShoppingBag, desc: "Payment methods and default logistics" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
          <SettingsIcon className="w-3.5 h-3.5 text-indigo-600" />
          Buyer Terminal Config
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Account Settings</h1>
        <p className="text-slate-500 font-medium text-sm">Customize your personal procurement environment and security.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
           {sections.map((section) => (
             <button 
               key={section.id}
               className={cn(
                 "w-full flex items-start gap-4 p-5 rounded-[2.5rem] transition-all text-left group",
                 section.id === "profile" ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100" : "hover:bg-slate-50"
               )}
             >
                <div className={cn(
                  "p-3 rounded-2xl transition-all",
                  section.id === "profile" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-indigo-600 group-hover:shadow-md"
                )}>
                   <section.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                   <p className={cn(
                     "font-bold transition-colors",
                     section.id === "profile" ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"
                   )}>{section.label}</p>
                   <p className="text-[10px] text-slate-400 font-bold leading-relaxed">{section.desc}</p>
                </div>
                <ChevronRight className={cn(
                  "w-4 h-4 mt-1 transition-transform",
                  section.id === "profile" ? "text-indigo-600" : "text-slate-300 group-hover:translate-x-1 group-hover:text-indigo-600"
                )} />
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 space-y-8">
           {/* Profile Section */}
           <div className="glass-card p-10 rounded-[3rem] space-y-10">
              <div className="flex items-center justify-between">
                 <h2 className="text-2xl font-black text-slate-900">Buyer Identity</h2>
                 <button className="px-6 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-all">
                    Update Profile
                 </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-b border-slate-50 pb-10">
                 <div className="relative group">
                    <div className="w-24 h-24 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-indigo-100">
                       U
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2.5 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 shadow-xl transition-all">
                       <Camera className="w-4 h-4" />
                    </button>
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Personal Avatar</h3>
                    <p className="text-sm text-slate-500 font-medium mb-4">Upload a photo to build trust with factory nodes.</p>
                    <div className="flex gap-2">
                       <button className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-white hover:shadow-md transition-all">Change Photo</button>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Legal Name</label>
                    <div className="relative">
                       <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                       <input 
                         type="text" 
                         defaultValue="Individual Buyer"
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-[1.5rem] text-sm font-bold focus:bg-white focus:border-indigo-500/20 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
                       />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Email</label>
                    <div className="relative">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                       <input 
                         type="email" 
                         defaultValue="buyer@demo.com"
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-[1.5rem] text-sm font-bold focus:bg-white focus:border-indigo-500/20 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
                       />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Shipping Hub</label>
                    <div className="relative">
                       <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                       <input 
                         type="text" 
                         defaultValue="London, United Kingdom"
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-[1.5rem] text-sm font-bold focus:bg-white focus:border-indigo-500/20 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
                       />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Account Tier</label>
                    <div className="relative">
                       <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                       <input 
                         type="text" 
                         defaultValue="Elite Individual Trader"
                         readOnly
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-[1.5rem] text-sm font-bold text-emerald-600 bg-emerald-50/50 outline-none cursor-not-allowed"
                       />
                    </div>
                 </div>
              </div>
           </div>

           {/* Security Banner */}
           <div className="p-8 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl flex items-center justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-emerald-400" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold">Encrypted Node Access</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">Your account is secured by Level 4 trade encryption protocols.</p>
                 </div>
              </div>
              <button className="px-6 py-3 bg-white text-slate-900 font-black rounded-xl hover:bg-emerald-50 transition-all active:scale-95">
                 Security Audit
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
