"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { 
  Package, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Building2,
  Heart,
  Truck,
  Search,
  Wallet
} from "lucide-react";
import Link from "next/link";

interface CustomSessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  id?: string;
}

export default function IndividualDashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const user = session?.user as CustomSessionUser;
    if (user?.role === "MANUFACTURER") {
      router.push("/manufacturer/dashboard");
    }
  }, [session, router]);

  const stats = [
    { title: "My Sourcing", value: "4", icon: Package, change: "Active projects", color: "indigo" },
    { title: "Escrow Balance", value: "$8,240", icon: Wallet, change: "Protected", color: "emerald" },
    { title: "In Transit", value: "2", icon: Truck, change: "Global shipping", color: "blue" },
    { title: "Trust Score", value: "100", icon: ShieldCheck, change: "Elite Buyer", color: "amber" },
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-1000">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
           <div className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-[0.25em]">
              <Zap className="w-3 h-3 animate-pulse" />
              Private Procurement Node
           </div>
           <h1 className="text-5xl font-black text-slate-900 tracking-tight">
             Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">{session?.user?.name?.split(" ")[0]}</span>
           </h1>
           <p className="text-slate-500 font-medium max-w-md">Your secure gateway to direct-from-factory sourcing and global logistics.</p>
        </div>
        <div className="flex items-center gap-3">
           <Link href="/products" className="px-6 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all flex items-center gap-3 shadow-xl shadow-slate-200 cursor-pointer">
              <Search className="w-5 h-5 cursor-pointer" />
              <span className="cursor-pointer">Start New Search</span>
           </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="glass-card p-8 rounded-[2.5rem] group hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 border border-transparent hover:border-slate-100 cursor-pointer">
            <div className="flex items-center justify-between mb-6 cursor-pointer">
              <div className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm cursor-pointer`}>
                <stat.icon className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="text-right cursor-pointer">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block cursor-pointer">{stat.change}</span>
              </div>
            </div>
            <p className="text-sm font-bold text-slate-500 mb-1 cursor-pointer">{stat.title}</p>
            <p className="text-4xl font-black text-slate-900 tracking-tight cursor-pointer">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Active Sourcing manifest */}
        <div className="lg:col-span-8 space-y-6">
           <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
              
              <div className="relative z-10">
                 <div className="flex items-center justify-between mb-10">
                    <div>
                       <h2 className="text-2xl font-black text-slate-900">Current Sourcing</h2>
                       <p className="text-sm text-slate-400 font-medium">Tracking your active factory orders</p>
                    </div>
                    <Link href="/individual/buyer/dashboard/orders" className="p-3 bg-slate-50 rounded-xl hover:bg-indigo-50 text-indigo-600 transition-all cursor-pointer">
                       <ArrowRight className="w-5 h-5 cursor-pointer" />
                    </Link>
                 </div>

                 <div className="space-y-4">
                    {[
                      { id: "LD-9283", name: "Custom CNC Aluminum Parts", factory: "PrecisionTech Shenzhen", status: "PRODUCTION", progress: 65 },
                      { id: "LD-8812", name: "Smart Display Modules", factory: "Vision Electronics", status: "SHIPPING", progress: 90 },
                    ].map((order) => (
                      <div key={order.id} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all group cursor-pointer">
                         <div className="flex items-center justify-between mb-4 cursor-pointer">
                            <div className="flex items-center gap-4 cursor-pointer">
                               <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-100 text-indigo-600 font-black shadow-sm cursor-pointer">
                                  {order.name.charAt(0)}
                               </div>
                               <div className="cursor-pointer">
                                  <p className="font-black text-slate-900 cursor-pointer">{order.name}</p>
                                  <p className="text-xs text-slate-400 font-bold flex items-center gap-1 cursor-pointer">
                                     <Building2 className="w-3 h-3 cursor-pointer" /> {order.factory}
                                  </p>
                               </div>
                            </div>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-[10px] font-black rounded-lg uppercase tracking-widest cursor-pointer">{order.status}</span>
                         </div>
                         <div className="space-y-2 cursor-pointer">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 cursor-pointer">
                               <span className="cursor-pointer">Production Manifest</span>
                               <span className="cursor-pointer">{order.progress}%</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden cursor-pointer">
                               <div 
                                 className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 transition-all duration-1000 cursor-pointer" 
                                 style={{ width: `${order.progress}%` }}
                               ></div>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Sidebar Insights */}
        <div className="lg:col-span-4 space-y-8">
           <div className="glass-dark p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-100">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-8" />
              <h3 className="text-2xl font-black mb-4 leading-tight">Elite Escrow Activated</h3>
              <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
                Your funds are protected by our multi-signature escrow protocol. Manufacturers only receive payment upon verified milestones.
              </p>
              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-[2rem] hover:bg-emerald-50 transition-all shadow-xl shadow-white/5 active:scale-95 cursor-pointer">
                 Wallet Security
              </button>
           </div>

           <div className="glass-card p-8 rounded-[3rem] border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-black text-slate-900 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    Saved Factories
                 </h3>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">12 Total</span>
              </div>
              <div className="space-y-4">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 transition-all group-hover:text-white">
                         <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                         <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Global Logistics Hub</p>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Supplier</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
