"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Settings, 
  LogOut,
  Building2,
  Wallet,
  Heart,
  ShoppingBag,
  LucideIcon
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
  showBadge?: boolean;
}

function SidebarItem({ href, icon: Icon, label, active, showBadge }: SidebarItemProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group relative cursor-pointer",
        active 
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" 
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      <Icon className={cn("w-5 h-5 cursor-pointer", active ? "text-white" : "group-hover:text-indigo-600")} />
      <span className="font-bold text-sm flex-1 cursor-pointer">{label}</span>
      {showBadge ? (
        <span className="px-1.5 py-0.5 bg-emerald-500 text-[8px] font-black text-white rounded-md uppercase tracking-tighter">New</span>
      ) : active && (
        <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      )}
    </Link>
  );
}

export function DashboardSidebar({ role = "BUYER" }: { role?: string }) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isManufacturer = role?.toUpperCase() === "MANUFACTURER" || pathname.startsWith("/manufacturer");
  const isWholesaler = pathname.startsWith("/wholesaler");
  const isCorporate = pathname.startsWith("/corporate");
  const isSupplier = pathname.startsWith("/supplier");
  const isGovernment = pathname.startsWith("/government");
  const isIndividual = pathname.startsWith("/individual") || (!isManufacturer && !isWholesaler && !isCorporate && !isSupplier && !isGovernment);
  
  let prefix = "/dashboard";
  if (isManufacturer) prefix = "/manufacturer/dashboard";
  else if (isWholesaler) prefix = "/wholesaler/buyer/dashboard";
  else if (isIndividual) prefix = "/individual/buyer/dashboard";
  else if (isCorporate) prefix = "/corporate/buyer/dashboard";
  else if (isSupplier) prefix = "/supplier/buyer/dashboard";
  else if (isGovernment) prefix = "/government/buyer/dashboard";

  // Role-based menu configurations
  const menuConfigs = {
    MANUFACTURER: [
      { href: prefix, icon: LayoutDashboard, label: "Overview" },
      { href: `${prefix}/products`, icon: Package, label: "Products" },
      { href: `${prefix}/orders`, icon: ShoppingCart, label: "Orders" },
      { href: `${prefix}/payouts`, icon: Wallet, label: "Payouts" },
      { href: `${prefix}/messages`, icon: MessageSquare, label: "Messages" },
      { href: `${prefix}/analytics`, icon: TrendingUp, label: "Analytics" },
      { href: `${prefix}/verification`, icon: ShieldCheck, label: "Compliance" },
    ],
    WHOLESALER: [
      { href: prefix, icon: LayoutDashboard, label: "Procurement Command" },
      { href: "/products", icon: Package, label: "Marketplace" },
      { href: `${prefix}/orders`, icon: ShoppingBag, label: "Bulk Manifests" },
      { href: `${prefix}/wallet`, icon: Wallet, label: "Escrow Wallet" },
      { href: `${prefix}/saved`, icon: Heart, label: "Verified Factories" },
      { href: `${prefix}/messages`, icon: MessageSquare, label: "Trade Comms" },
    ],
    CORPORATE: [
      { href: prefix, icon: LayoutDashboard, label: "Enterprise Command" },
      { href: `${prefix}/marketplace`, icon: Package, label: "Enterprise Sourcing" },
      { href: `${prefix}/orders`, icon: ShoppingBag, label: "Purchase Orders" },
      { href: `${prefix}/wallet`, icon: Wallet, label: "Escrow Wallet" },
      { href: `${prefix}/saved`, icon: Heart, label: "Approved Vendors" },
      { href: `${prefix}/messages`, icon: MessageSquare, label: "Corporate Comms" },
    ],
    SUPPLIER: [
      { href: prefix, icon: LayoutDashboard, label: "Supply Command" },
      { href: `${prefix}/marketplace`, icon: Package, label: "Material Sourcing" },
      { href: `${prefix}/orders`, icon: ShoppingBag, label: "Material Inbound" },
      { href: `${prefix}/wallet`, icon: Wallet, label: "Escrow Wallet" },
      { href: `${prefix}/saved`, icon: Heart, label: "Material Sources" },
      { href: `${prefix}/messages`, icon: MessageSquare, label: "Supply Comms" },
    ],
    GOVERNMENT: [
      { href: prefix, icon: LayoutDashboard, label: "National Command" },
      { href: `${prefix}/marketplace`, icon: Package, label: "Gov Sourcing" },
      { href: `${prefix}/orders`, icon: ShoppingBag, label: "Public Tenders" },
      { href: `${prefix}/wallet`, icon: Wallet, label: "Escrow Wallet" },
      { href: `${prefix}/saved`, icon: Heart, label: "National Registry" },
      { href: `${prefix}/messages`, icon: MessageSquare, label: "Official Comms" },
    ],
    INDIVIDUAL: [
      { href: prefix, icon: LayoutDashboard, label: "Overview" },
      { href: "/products", icon: Package, label: "Marketplace" },
      { href: `${prefix}/orders`, icon: ShoppingBag, label: "My Orders" },
      { href: `${prefix}/wallet`, icon: Wallet, label: "Escrow Wallet" },
      { href: `${prefix}/saved`, icon: Heart, label: "Saved Factories" },
      { href: `${prefix}/messages`, icon: MessageSquare, label: "Messages" },
    ]
  };

  const menuItems = isManufacturer ? menuConfigs.MANUFACTURER : 
                    isWholesaler ? menuConfigs.WHOLESALER :
                    isCorporate ? menuConfigs.CORPORATE :
                    isSupplier ? menuConfigs.SUPPLIER :
                    isGovernment ? menuConfigs.GOVERNMENT :
                    menuConfigs.INDIVIDUAL;

  return (
    <aside className="w-72 bg-white/70 backdrop-blur-xl border-r border-slate-100 flex flex-col h-screen sticky top-0 z-40">
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
            <Building2 className="w-6 h-6 text-white cursor-pointer" />
          </div>
          <div className="flex flex-col cursor-pointer">
            <span className="text-xl font-bold text-slate-900 tracking-tight leading-none cursor-pointer">
              Leedwey
            </span>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest cursor-pointer">
              {isManufacturer ? "Factory Node" : "Marketplace"}
            </span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={pathname === item.href}
          />
        ))}
      </nav>

      <div className="p-6 border-t border-slate-50">
        {session && (
          <div className="flex items-center gap-3 p-4 rounded-3xl bg-slate-50 border border-slate-100 mb-6 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all cursor-pointer">
             <Avatar className="w-10 h-10 border-2 border-white shadow-sm cursor-pointer">
                <AvatarImage src={session.user?.image || undefined} className="cursor-pointer" />
                <AvatarFallback className="bg-indigo-600 text-white font-black cursor-pointer">
                   {session.user?.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
             </Avatar>
             <div className="flex flex-col min-w-0 cursor-pointer">
                <span className="text-sm font-black text-slate-900 truncate cursor-pointer">
                  {session.user?.name || 
                    (isWholesaler ? "Demo Wholesaler" : 
                     isCorporate ? "Demo Corporate" : 
                     isSupplier ? "Demo Supplier" : 
                     isGovernment ? "Demo Gov" : 
                     "Demo Individual")}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate cursor-pointer">
                   {isManufacturer ? "manufacturer" : 
                    isWholesaler ? "wholesaler (buyer)" : 
                    isCorporate ? "corporate (buyer)" : 
                    isSupplier ? "supplier (buyer)" : 
                    isGovernment ? "government (buyer)" : 
                    "individual (buyer)"}
                </span>
             </div>
          </div>
        )}

        <div className="space-y-1.5">
          <SidebarItem 
            href={`${prefix}/settings`} 
            icon={Settings} 
            label="Settings" 
            active={pathname === `${prefix}/settings`} 
          />
          <button 
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-all duration-300 font-bold text-sm cursor-pointer"
          >
            <LogOut className="w-5 h-5 cursor-pointer" />
            <span className="cursor-pointer">Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
