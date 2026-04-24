"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { 
  Package, 
  ShoppingCart, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Building2,
  DollarSign
} from "lucide-react";
import Link from "next/link";

interface CustomSessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  id?: string;
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const user = session?.user as CustomSessionUser;
    if (user?.role === "MANUFACTURER") {
      router.push("/manufacturer/dashboard");
    } else {
      router.push("/individual/buyer/dashboard");
    }
  }, [session, router]);

  const stats = [
    { title: "Active Orders", value: "12", icon: ShoppingCart, change: "+2 today", color: "indigo" },
    { title: "Total Sourced", value: "$45.2k", icon: DollarSign, change: "+15% MoM", color: "emerald" },
    { title: "Messages", value: "8", icon: MessageSquare, change: "3 unread", color: "blue" },
    { title: "Compliance", value: "98%", icon: ShieldCheck, change: "Tier 1", color: "amber" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Welcome back, <span className="text-gradient">{session?.user?.name?.split(" ")[0]}</span>!
        </h1>
        <p className="text-slate-500 font-medium">Manage your global sourcing operations from your secure node.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="glass-card p-6 rounded-[2rem] group hover:scale-[1.02] transition-all duration-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-600 group-hover:bg-${stat.color}-500 group-hover:text-white transition-all duration-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.change}</span>
            </div>
            <p className="text-sm font-bold text-slate-500 mb-1">{stat.title}</p>
            <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions Card */}
          <div className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-indigo-600/10 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Procurement Command</h2>
                <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
                  View Analytics <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/products" className="p-6 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Source Products</h3>
                  <p className="text-sm text-slate-500 font-medium">Browse verified manufacturers</p>
                </Link>

                <Link href="/dashboard/orders" className="p-6 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Active Shipments</h3>
                  <p className="text-sm text-slate-500 font-medium">Track your global logistics</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-8 rounded-[2.5rem]">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Trade Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">Milestone Payment Released</p>
                    <p className="text-xs text-slate-500 font-medium">Order #LD-9283 - Production Milestone 1</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">+$2,450.00</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2h ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          <div className="glass-dark p-8 rounded-[2.5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <Zap className="w-8 h-8 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">Escrow Protected</h3>
            <p className="text-slate-400 text-sm font-medium mb-6 leading-relaxed">
              Your capital is secured in our milestone-based escrow system.
            </p>
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-2xl transition-all shadow-lg shadow-emerald-500/30">
              View Escrow Wallet
            </button>
          </div>

          <div className="glass-card p-8 rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">Verification</h3>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-lg uppercase tracking-widest">Verified</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-sm font-medium text-slate-600">ID Verification Complete</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-sm font-medium text-slate-600">Business License Valid</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <p className="text-sm font-medium text-slate-400">VAT Registration Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
