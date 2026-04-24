"use client";

import { 
  ShoppingCart, 
  Search, 
  Filter, 
  ChevronRight,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndividualOrdersPage() {
  const orders = [
    {
      id: "LD-9283",
      product: "High-Precision CNC X-900 Parts",
      factory: "PrecisionTech Shenzhen",
      amount: 2450.00,
      status: "PRODUCTION",
      date: "Oct 22, 2026",
      progress: 65
    },
    {
      id: "LD-8812",
      product: "Smart Display Modules (Batch A)",
      factory: "Vision Electronics",
      amount: 12400.00,
      status: "SHIPPING",
      date: "Oct 20, 2026",
      progress: 90
    },
    {
      id: "LD-7721",
      product: "Industrial Grade Sensors",
      factory: "SensorWave Hub",
      amount: 5600.00,
      status: "COMPLETED",
      date: "Oct 15, 2026",
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PRODUCTION": return "text-amber-600 bg-amber-50 border-amber-100";
      case "SHIPPING": return "text-blue-600 bg-blue-50 border-blue-100";
      case "COMPLETED": return "text-emerald-600 bg-emerald-50 border-emerald-100";
      default: return "text-slate-600 bg-slate-50 border-slate-100";
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
            <Package className="w-3.5 h-3.5 text-indigo-600" />
            My Procurement
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Order History</h1>
          <p className="text-slate-500 font-medium text-sm">Track your sourcing milestones and logistics pipelines.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-600/5 transition-all w-full md:w-64"
            />
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Node</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Manufacturer</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Timeline</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                  <td className="px-8 py-6">
                    <div>
                      <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{order.product}</p>
                      <p className="text-xs text-slate-400 font-bold tracking-tighter">ID: {order.id}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-600">{order.factory}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                      getStatusColor(order.status)
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-900">${order.amount.toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-emerald-600">Escrow Protected</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1.5 w-32">
                       <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                          <span>{order.progress}%</span>
                          <span className="text-slate-300">{order.date}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-600 rounded-full transition-all duration-1000" 
                            style={{ width: `${order.progress}%` }}
                          ></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State / Footer */}
      <div className="flex flex-col items-center justify-center py-12 px-6 glass-card rounded-[3rem] border-dashed border-2 border-slate-200">
         <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-6">
            <ShoppingCart className="w-10 h-10 text-slate-300" />
         </div>
         <h3 className="text-xl font-bold text-slate-900 mb-2">Source More Inventory</h3>
         <p className="text-slate-500 font-medium text-center max-w-sm mb-8">
            Connect with verified manufacturers across 12 sectors and secure your next production batch.
         </p>
         <Link href="/products" className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
            Browse Market
         </Link>
      </div>
    </div>
  );
}
