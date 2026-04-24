"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface CustomSessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  id?: string;
}

export default function WholesalerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-indigo-600/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const user = session.user as CustomSessionUser;

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <DashboardSidebar role={user?.role} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 to-white">
          {children}
        </main>
      </div>
    </div>
  );
}
