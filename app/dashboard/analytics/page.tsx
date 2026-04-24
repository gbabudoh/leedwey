"use client";

import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight,
  Zap,
  ShieldCheck
} from "lucide-react";

export default function AnalyticsPage() {
  const stats = [
    { title: "Total Revenue", value: "$124,500", change: "+12.5%", trending: "up", icon: DollarSign, color: "emerald" },
    { title: "Active Orders", value: "48", change: "+4.2%", trending: "up", icon: ShoppingCart, color: "indigo" },
    { title: "Node Traffic", value: "1,240", change: "-2.1%", trending: "down", icon: Users, color: "blue" },
    { title: "Trade Trust", value: "99.8%", change: "+0.3%", trending: "up", icon: ShieldCheck, color: "amber" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            Real-time Business Intelligence
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Intelligence Node</h1>
          <p className="text-slate-500 font-medium">Deep insights into your global trade performance and logistics.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-900 hover:border-indigo-600 transition-all shadow-sm uppercase tracking-widest">
            Export Data
          </button>
          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 uppercase tracking-widest">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="glass-card p-6 rounded-[2rem] group hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-black ${stat.trending === "up" ? "text-emerald-600" : "text-red-500"}`}>
                {stat.trending === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-500 mb-1">{stat.title}</p>
            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-dark p-8 rounded-[2.5rem] relative overflow-hidden group min-h-[400px] border-indigo-500/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1 tracking-tight">Revenue Trajectory</h3>
                  <p className="text-slate-400 text-sm font-medium">Monthly trade volume across all sourcing nodes.</p>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl">
                  <button className="px-4 py-2 bg-white/10 text-white text-[10px] font-black rounded-lg uppercase tracking-widest">Growth</button>
                  <button className="px-4 py-2 text-slate-400 text-[10px] font-black rounded-lg uppercase tracking-widest">Volume</button>
                </div>
              </div>

              {/* Placeholder for actual Chart.js or Recharts */}
              <div className="h-64 flex items-end gap-2 px-4">
                {[45, 60, 40, 75, 50, 90, 65, 80, 55, 100, 85, 95].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group/bar">
                    <div className="w-full bg-indigo-500/20 rounded-t-lg group-hover/bar:bg-indigo-500 transition-all duration-500 relative" style={{ height: `${val}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                        {val}k
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2.5rem]">
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Market Expansion</h3>
            <div className="space-y-6">
              {[
                { country: "China", value: 45, color: "bg-indigo-600" },
                { country: "Vietnam", value: 25, color: "bg-emerald-500" },
                { country: "Germany", value: 15, color: "bg-amber-500" },
                { country: "Others", value: 15, color: "bg-slate-300" },
              ].map((item) => (
                <div key={item.country}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-900">{item.country} Node</span>
                    <span className="text-xs font-black text-slate-900">{item.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
            <BarChart3 className="w-10 h-10 text-white/50 mb-6" />
            <h3 className="text-xl font-bold mb-2">Optimization Hub</h3>
            <p className="text-indigo-100 text-sm font-medium mb-8 leading-relaxed">
              Your sourcing efficiency has improved by 14% this quarter through node consolidation.
            </p>
            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-2">Next Milestone</p>
              <p className="text-sm font-bold text-white leading-tight">Tier 1 Compliance Certification Audit</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2.5rem]">
            <h3 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Node Distribution</h3>
            <div className="flex justify-center mb-8">
               <div className="w-40 h-40 rounded-full border-[12px] border-indigo-600 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[12px] border-emerald-500 border-r-transparent border-t-transparent -rotate-45"></div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-slate-900 leading-none">85%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Active</p>
                  </div>
               </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <span className="text-xs font-bold text-slate-600">Verified Factory</span>
                </div>
                <span className="text-xs font-black text-slate-900">12</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-slate-600">Transit Node</span>
                </div>
                <span className="text-xs font-black text-slate-900">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
