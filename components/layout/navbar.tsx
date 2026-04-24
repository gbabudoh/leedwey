"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  Search,
  User,
  MessageSquare,
  ShoppingCart,
  Menu,
  ChevronDown,
  Globe,
  LogOut,
  Settings,
  Bell,
  X,
  Building2,
  ShieldCheck,
  ShoppingBag,
  LayoutDashboard,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Navbar() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("Manufacturers");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/products?q=${encodeURIComponent(searchQuery)}&cat=${category.toLowerCase()}`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2 shadow-sm" 
          : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
            <Building2 className="w-6 h-6 text-white cursor-pointer" />
          </div>
          <div className="flex flex-col cursor-pointer">
            <span className="text-xl font-bold text-slate-900 tracking-tight leading-none cursor-pointer">
              Leedwey
            </span>
            <span className="text-[10px] font-medium text-emerald-600 uppercase tracking-widest cursor-pointer">
              Closed B2B
            </span>
          </div>
        </Link>

        {/* Search Bar - Center */}
        <div className="flex-1 max-w-2xl hidden md:flex">
          <form 
            onSubmit={handleSearch}
            className="flex w-full bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all"
          >
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <div className="flex items-center px-4 bg-slate-50 border-r border-slate-200 cursor-pointer hover:bg-slate-100 min-w-[140px] justify-between text-slate-700 text-sm font-bold">
                  <span className="cursor-pointer">{category}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="min-w-[160px] bg-white rounded-xl shadow-2xl border border-slate-100 p-1 z-[100] animate-in fade-in-0 zoom-in-95">
                  {["Manufacturers", "Products", "Factories", "Logistics"].map((cat) => (
                    <DropdownMenu.Item 
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className="flex items-center px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer outline-none transition-colors font-semibold"
                    >
                      {cat}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Source from verified manufacturers..."
              className="flex-1 px-4 py-2.5 text-slate-700 outline-none placeholder:text-slate-400 bg-transparent text-sm font-medium"
            />
            <button 
              type="submit"
              className="bg-slate-900 px-6 py-2 text-white font-bold flex items-center gap-2 hover:bg-slate-800 active:bg-slate-950 transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 cursor-pointer" />
              <span className="cursor-pointer">Search</span>
            </button>
          </form>
        </div>

        {/* User Actions - Right */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden xl:flex items-center gap-4 border-r border-slate-200 pr-6 mr-2">
            <Link href="/verification" className="text-sm font-bold text-slate-800 hover:text-indigo-600 flex items-center gap-1.5 transition-colors cursor-pointer">
              <ShieldCheck className="w-4 h-4 text-emerald-500 cursor-pointer" />
              Verification
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:gap-5">
            <Link href="/messages" className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all relative cursor-pointer group/navitem">
              <MessageSquare className="w-5 h-5 cursor-pointer" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white cursor-pointer"></span>
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover/navitem:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Messages</span>
            </Link>
            <button className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all relative cursor-pointer group/navitem">
              <Bell className="w-5 h-5 cursor-pointer" />
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover/navitem:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Notifications</span>
            </button>
            <Link href="/checkout" className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all relative cursor-pointer group/navitem">
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover/navitem:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Cart</span>
            </Link>

            {session ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center gap-2 p-1 pl-1 pr-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-all outline-none cursor-pointer">
                    <Avatar className="w-8 h-8 cursor-pointer">
                      <AvatarImage src={session.user?.image || undefined} className="cursor-pointer" />
                      <AvatarFallback className="bg-indigo-600 text-white text-xs cursor-pointer">
                        {session.user?.name?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="min-w-[220px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-[100] animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2">
                    <div className="px-3 py-2 mb-2 border-b border-slate-50">
                      <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                      <p className="text-sm font-bold text-slate-900 truncate">{session.user?.email}</p>
                    </div>
                    {(() => {
                      const user = session.user as { role?: string; email?: string };
                      const role = user?.role?.toUpperCase();
                      const email = user?.email?.toLowerCase();
                      
                      let prefix = "/dashboard";
                      if (role === "MANUFACTURER") prefix = "/manufacturer/dashboard";
                      else if (role === "WHOLESALER" || email === "wholesaler@demo.com") prefix = "/wholesaler/buyer/dashboard";
                      else if (role === "CORPORATE" || email === "corporate@demo.com") prefix = "/corporate/buyer/dashboard";
                      else if (role === "SUPPLIER" || email === "supplier@demo.com") prefix = "/supplier/buyer/dashboard";
                      else if (role === "GOVERNMENT" || email === "government@demo.com") prefix = "/government/buyer/dashboard";
                      else if (role === "INDIVIDUAL" || role === "BUYER" || email === "individual@demo.com") prefix = "/individual/buyer/dashboard";

                      return (
                        <>
                          <Link href={prefix}>
                            <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-900 font-bold rounded-xl hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer outline-none transition-colors">
                              <LayoutDashboard className="w-4 h-4 text-indigo-600 cursor-pointer" /> Dashboard
                            </DropdownMenu.Item>
                          </Link>
                          <Link href="/profile">
                            <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer outline-none transition-colors">
                              <User className="w-4 h-4 cursor-pointer" /> Profile
                            </DropdownMenu.Item>
                          </Link>
                          <Link href={`${prefix}/orders`}>
                            <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer outline-none transition-colors">
                              <ShoppingBag className="w-4 h-4 cursor-pointer" /> My Orders
                            </DropdownMenu.Item>
                          </Link>
                          <Link href={`${prefix}/settings`}>
                            <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer outline-none transition-colors">
                              <Settings className="w-4 h-4 cursor-pointer" /> Settings
                            </DropdownMenu.Item>
                          </Link>
                        </>
                      );
                    })()}
                    <DropdownMenu.Separator className="h-px bg-slate-100 my-1" />
                    <DropdownMenu.Item 
                      className="flex items-center gap-2 px-3 py-2.5 text-sm text-red-600 rounded-xl hover:bg-red-50 cursor-pointer outline-none transition-colors"
                      onClick={() => signOut()}
                    >
                      <LogOut className="w-4 h-4 cursor-pointer" /> Sign Out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <div className="flex items-center gap-2">
                <Link 
                  href="/auth/signin" 
                  className="hidden sm:block text-sm font-bold text-slate-800 hover:text-indigo-600 px-3 cursor-pointer lowercase whitespace-nowrap"
                >
                  sign in
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="bg-slate-900 text-white text-[12px] font-extrabold px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-md shadow-slate-200 cursor-pointer uppercase tracking-wider"
                >
                  Join
                </Link>
              </div>
            )}
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 fixed inset-x-0 top-[72px] bottom-0 z-40 p-6 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Marketplace</p>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/products" className="flex flex-col gap-2 p-4 bg-slate-50 rounded-2xl">
                  <ShoppingBag className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-bold">Products</span>
                </Link>
                <Link href="/manufacturers" className="flex flex-col gap-2 p-4 bg-slate-50 rounded-2xl">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold">Factories</span>
                </Link>
              </div>
            </div>
            
            <nav className="space-y-2">
              <Link href="/verification" className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                <span className="font-semibold">Verification Center</span>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </Link>
              <Link href="/escrow" className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                <span className="font-semibold">Secure Escrow</span>
                <Globe className="w-5 h-5 text-indigo-500" />
              </Link>
            </nav>
            
            {!session && (
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <Link href="/auth/signup" className="block w-full text-center py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100">
                  Create Account
                </Link>
                <Link href="/auth/signin" className="block w-full text-center py-4 text-slate-600 font-semibold">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
