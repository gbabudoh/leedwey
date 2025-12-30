"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  Building2,
  Menu,
  X,
  User,
  LogOut,
  Settings,
  ShoppingCart,
  MessageSquare,
  Bell,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#EDF0F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F49B41] to-[#ACC8E5] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Leedwey</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-gray-700 hover:text-[#F49B41] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#solutions"
              className="text-gray-700 hover:text-[#F49B41] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/#pricing"
              className="text-gray-700 hover:text-[#F49B41] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-[#F49B41] transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-[#F49B41] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/manufacturers"
              className="text-gray-700 hover:text-[#F49B41] transition-colors"
            >
              Manufacturers
            </Link>
            {session && (
              <>
                <Link
                  href="/messages"
                  className="text-gray-700 hover:text-[#F49B41] transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-4 h-4" />
                  Messages
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-[#F49B41] transition-colors"
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            {session ? (
              <>
                <Link href="/notifications" className="relative">
                  <Bell className="w-5 h-5 text-gray-700 hover:text-[#F49B41] transition-colors" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F49B41] rounded-full"></span>
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={session.user?.image || undefined} />
                      <AvatarFallback>
                        {session.user?.name?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#EDF0F3] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="py-2">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#EDF0F3]"
                      >
                        <User className="w-4 h-4" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#EDF0F3]"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#EDF0F3]"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EDF0F3] bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/#features"
              className="block text-gray-700 hover:text-[#F49B41]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#solutions"
              className="block text-gray-700 hover:text-[#F49B41]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/#pricing"
              className="block text-gray-700 hover:text-[#F49B41]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#about"
              className="block text-gray-700 hover:text-[#F49B41]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-[#F49B41]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/manufacturers"
              className="block text-gray-700 hover:text-[#F49B41]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Manufacturers
            </Link>
            {session && (
              <>
                <Link
                  href="/messages"
                  className="block text-gray-700 hover:text-[#F49B41]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Messages
                </Link>
                <Link
                  href="/dashboard"
                  className="block text-gray-700 hover:text-[#F49B41]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

