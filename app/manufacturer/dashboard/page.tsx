"use client";

import { useSession } from "next-auth/react";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  ShieldCheck,
  DollarSign,
  Factory,
  Video,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function ManufacturerDashboardPage() {
  const { data: session } = useSession();

  const stats = [
    { title: "Production Load", value: "72%", icon: Factory, change: "Optimal", color: "indigo" },
    { title: "Pending Orders", value: "24", icon: ShoppingCart, change: "4 new", color: "emerald" },
    { title: "Escrow Balance", value: "$128k", icon: DollarSign, change: "Locked", color: "amber" },
    { title: "Trust Score", value: "4.9/5", icon: ShieldCheck, change: "+0.1 MoM", color: "blue" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/20">
            Manufacturer Node
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Factory Command: <span className="text-gradient">{session?.user?.name?.split(" ")[0]}</span>
        </h1>
        <p className="text-slate-500 font-medium">Monitoring manufacturing nodes and milestone triggers.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="glass-card p-6 rounded-[2rem] group hover:scale-[1.02] transition-all duration-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-slate-950 text-white group-hover:bg-indigo-600 transition-all duration-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.change}</span>
            </div>
            <p className="text-sm font-bold text-slate-500 mb-1">{stat.title}</p>
            <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Primary Control Node */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden group border-indigo-500/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-indigo-600/20 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-black text-white mb-2">Production Node</h2>
                  <p className="text-slate-400 font-medium">Deploy and manage your manufacturing assets.</p>
                </div>
                <Link href="/manufacturer/dashboard/analytics" className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <TrendingUp className="w-6 h-6 text-white" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link href="/manufacturer/dashboard/products/new" className="flex flex-col gap-4 p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-all border border-white/5 group/item">
                  <Package className="w-8 h-8 text-indigo-400" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Add Product</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">List New SKU</p>
                  </div>
                </Link>

                <Link href="/manufacturer/dashboard/factory-tours" className="flex flex-col gap-4 p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-all border border-white/5 group/item">
                  <Video className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Live Tours</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Manage Feed</p>
                  </div>
                </Link>

                <Link href="/manufacturer/dashboard/documents" className="flex flex-col gap-4 p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-all border border-white/5 group/item">
                  <FileText className="w-8 h-8 text-amber-400" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Compliance</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Audit Docs</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card p-8 rounded-[2.5rem] h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Zap className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Milestone Released</p>
                      <p className="text-[10px] text-slate-400 font-medium">Order #LW-928{i} • 2h ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
              View All Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Zap({ className }: { className?: string }) {
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
      <path d="M4 14.71 13.11 4H15l-3.55 7.15H20l-9.11 10.71H9l3.55-7.15H4Z"/>
    </svg>
  );
}
