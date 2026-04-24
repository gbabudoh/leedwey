"use client";

import { 
  ShoppingCart, 
  Search, 
  Filter, 
  MoreHorizontal, 
  ArrowUpRight, 
  AlertCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardOrdersPage() {
  const orders = [
    {
      id: "LD-9283",
      product: "High-Precision CNC X-900",
      buyer: "Global Logistics Corp",
      amount: 2450.00,
      status: "PRODUCTION",
      date: "Oct 22, 2026",
      progress: 75
    },
    {
      id: "LD-9284",
      product: "Military-Grade PCB V4",
      buyer: "Skyline Electronics",
      amount: 12800.00,
      status: "SHIPPING",
      date: "Oct 21, 2026",
      progress: 100
    },
    {
      id: "LD-9285",
      product: "Liquid Cooling Manifold",
      buyer: "ThermalFlow Systems",
      amount: 4200.00,
      status: "PENDING",
      date: "Oct 23, 2026",
      progress: 0
    },
    {
      id: "LD-9286",
      product: "Automated Textile Loom",
      buyer: "TextilePro Machinery",
      amount: 12500.00,
      status: "COMPLETED",
      date: "Oct 15, 2026",
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED": return "bg-emerald-100 text-emerald-600";
      case "PRODUCTION": return "bg-indigo-100 text-indigo-600";
      case "SHIPPING": return "bg-blue-100 text-blue-600";
      case "PENDING": return "bg-amber-100 text-amber-600";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
            <ShoppingCart className="w-3.5 h-3.5 text-indigo-600" />
            Trade Execution Hub
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Order Manifest</h1>
          <p className="text-slate-500 font-medium">Track your active production pipelines and shipments.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filter by Order ID..."
              className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all w-64 shadow-sm"
            />
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Orders Table - Reverted to Previous List Structure */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/50">
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product & Buyer</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Execution</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
                  <td className="px-8 py-6">
                    <span className="font-mono font-bold text-slate-900">{order.id}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div>
                      <p className="font-bold text-slate-900 mb-0.5 group-hover:text-indigo-600 transition-colors">{order.product}</p>
                      <p className="text-xs text-slate-400 font-medium">{order.buyer}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-black text-slate-900">${order.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      getStatusColor(order.status)
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                        <span>Progress</span>
                        <span>{order.progress}%</span>
                      </div>
                      <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-1000",
                            order.status === "COMPLETED" ? "bg-emerald-500" : "bg-indigo-600"
                          )}
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-indigo-600">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-xl hover:bg-white hover:shadow-md transition-all text-slate-400">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center gap-6 p-6 bg-slate-900 rounded-[2rem] text-white overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-indigo-500/30 transition-all duration-700"></div>
        <AlertCircle className="w-6 h-6 text-indigo-400 shrink-0" />
        <p className="text-sm font-medium text-slate-300">
          All orders are secured by <span className="text-white font-bold">Leedwey Milestone Escrow</span>. Payouts are triggered automatically upon physical inspection.
        </p>
      </div>
    </div>
  );
}
