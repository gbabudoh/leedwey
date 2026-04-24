"use client";

import { Building2, User, Landmark, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";

const segments = [
  {
    title: "Wholesale Buyers",
    description: "Bulk orders with tiered pricing and direct manufacturer negotiation.",
    icon: Building2,
    color: "indigo",
    href: "/wholesale"
  },
  {
    title: "Government Buyers",
    description: "Simplified procurement for public sectors with compliance certification.",
    icon: Landmark,
    color: "emerald",
    href: "/government"
  },
  {
    title: "Individual Buyers",
    description: "Direct-to-consumer factory prices with secure milestone protection.",
    icon: User,
    color: "blue",
    href: "/individuals"
  },
  {
    title: "Corporate Buyers",
    description: "Scaleable sourcing for businesses with dedicated account management.",
    icon: Briefcase,
    color: "slate",
    href: "/corporate"
  }
];

export function BuyerSegments() {
  const colorMap: Record<string, { bg: string, text: string, iconBg: string }> = {
    indigo: { bg: "bg-indigo-500/5", text: "text-indigo-600", iconBg: "bg-indigo-500/10" },
    emerald: { bg: "bg-emerald-500/5", text: "text-emerald-600", iconBg: "bg-emerald-500/10" },
    blue: { bg: "bg-blue-500/5", text: "text-blue-600", iconBg: "bg-blue-500/10" },
    slate: { bg: "bg-slate-500/5", text: "text-slate-600", iconBg: "bg-slate-500/10" },
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 mb-4">
             <Briefcase className="w-4 h-4 text-slate-600" />
             <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Global Sourcing</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Tailored Sourcing for Every Buyer</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            Whether you are a large government agency or an individual entrepreneur, our closed platform provides the protection and transparency you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment) => {
            const colors = colorMap[segment.color] || colorMap.indigo;
            return (
              <Link 
                key={segment.title}
                href={segment.href}
                className="group relative bg-white p-8 rounded-[2rem] hover:translate-y-[-8px] transition-all duration-500 border border-slate-100 hover:border-indigo-100 shadow-xl shadow-slate-200/50 hover:shadow-indigo-500/10 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <segment.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{segment.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{segment.description}</p>
                
                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mt-auto">
                  Explore Portal
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full blur-3xl -mr-16 -mt-16 group-hover:opacity-100 opacity-50 transition-opacity`}></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
