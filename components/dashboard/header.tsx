"use client";

import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isManufacturer = pathname.startsWith("/manufacturer");
  const isWholesaler = pathname.startsWith("/wholesaler");

  return (
    <header className="h-20 bg-white/40 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="relative w-96 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
        <input 
          type="text" 
          placeholder="Search analytics, orders, or documents..."
          className="w-full bg-slate-100/50 border-none rounded-2xl pl-12 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all cursor-pointer">
          <Bell className="w-5 h-5 cursor-pointer" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-4 pl-6 border-l border-slate-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-900 leading-none mb-1">
              {session?.user?.name || (isWholesaler ? "Demo Wholesaler" : "Demo Individual")}
            </p>
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.1em]">
              {isManufacturer ? "manufacturer" : isWholesaler ? "wholesaler (buyer)" : "individual (buyer)"}
            </p>
          </div>
          <Avatar className="w-11 h-11 border-2 border-white shadow-xl cursor-pointer">
            <AvatarImage src={session?.user?.image || undefined} className="cursor-pointer" />
            <AvatarFallback className="bg-indigo-600 text-white font-black cursor-pointer">
              {session?.user?.name?.charAt(0).toUpperCase() || "D"}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
