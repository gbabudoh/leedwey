"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, ShieldCheck } from "lucide-react";

export function UserActionsCard() {
  const { data: session } = useSession();

  return (
    <div className="w-64 flex flex-col gap-4 h-[400px]">
      {/* User Welcome Card */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-[#EDF0F3] flex-1">
        <div className="flex items-center gap-3 mb-4">
           <Avatar className="w-12 h-12 border border-blue-100">
            <AvatarImage src={session?.user?.image || undefined} />
            <AvatarFallback className="bg-blue-50 text-[--color-primary]">
              {session?.user?.name?.charAt(0).toUpperCase() || <User className="w-6 h-6" />}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="text-gray-500">Welcome,</p>
            <p className="font-bold text-gray-900 truncate max-w-[120px]">
              {session?.user?.name || "Guest User"}
            </p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          {!session && (
            <>
              <Link href="/auth/signin">
                <button className="w-full bg-[--color-primary] text-white py-2 rounded-full font-semibold text-sm hover:bg-[--color-primary-hover] transition-colors mb-2">
                  Sign In
                </button>
              </Link>
              <Link href="/auth/signup">
                 <button className="w-full bg-white border border-[--color-primary] text-[--color-primary] py-2 rounded-full font-semibold text-sm hover:bg-orange-50 transition-colors">
                  Join for free
                </button>
              </Link>
            </>
          )}
          {session && (
             <Link href="/dashboard">
                <button className="w-full bg-[--color-primary] text-white py-2 rounded-full font-semibold text-sm hover:bg-[--color-primary-hover] transition-colors">
                  Go to Dashboard
                </button>
              </Link>
          )}
        </div>
        
        <div className="space-y-2 text-xs text-gray-600">
          <p className="hover:text-[--color-primary] cursor-pointer">Continue browsing</p>
          <p className="hover:text-[--color-primary] cursor-pointer">My Orders</p>
          <p className="hover:text-[--color-primary] cursor-pointer">Messages</p>
        </div>
      </div>

      {/* Promotion / Ad Card */}
      <div className="bg-[#FFF0E6] p-4 rounded-lg border border-orange-100 flex-1 flex flex-col justify-center">
        <h4 className="font-bold text-gray-800 mb-2">Trade Assurance</h4>
        <p className="text-xs text-gray-600 mb-3">Order protection from payment to delivery.</p>
        <div className="flex items-center gap-2 text-[--color-primary] text-sm font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Learn More</span>
        </div>
      </div>
    </div>
  );
}
