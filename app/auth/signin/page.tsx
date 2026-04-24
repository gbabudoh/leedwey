"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Building2, Mail, Lock, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Signed in successfully!");
        
        // Use a small delay to ensure session is updated or just use email-based routing for demo purposes
        // In a real app, you'd fetch the session first or use a middleware redirect
        const email = formData.email.toLowerCase();
        
        if (email.includes("manufacturer")) {
          router.push("/manufacturer/dashboard");
        } else if (email.includes("wholesaler")) {
          router.push("/wholesaler/buyer/dashboard");
        } else if (email.includes("corporate")) {
          router.push("/corporate/buyer/dashboard");
        } else if (email.includes("supplier")) {
          router.push("/supplier/buyer/dashboard");
        } else if (email.includes("government")) {
          router.push("/government/buyer/dashboard");
        } else {
          router.push("/individual/buyer/dashboard");
        }
        
        router.refresh();
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 lg:p-8 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -ml-64 -mt-64"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] -mr-64 -mb-64"></div>
      </div>

      <div className="w-full max-w-6xl relative z-10 flex flex-col lg:flex-row bg-slate-900/50 backdrop-blur-2xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Left Column: Brand & Security Focus */}
        <div className="lg:w-5/12 p-12 lg:p-16 bg-gradient-to-br from-indigo-600/20 to-transparent border-r border-white/5 hidden lg:flex flex-col">
          <Link href="/" className="flex items-center gap-2 mb-20 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
              <Building2 className="w-7 h-7 text-white cursor-pointer" />
            </div>
            <span className="text-3xl font-extrabold text-white tracking-tight cursor-pointer">Leedwey</span>
          </Link>

          <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 mb-6">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Enterprise Security</span>
             </div>
             <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
               Secure Access to your <br />
               <span className="text-gradient">Trade Node.</span>
             </h2>

             <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold">1</div>
                      <div>
                         <p className="text-white font-bold text-sm">Audited Factories Only</p>
                         <p className="text-slate-400 text-xs font-medium">100% Transparency in sourcing.</p>
                      </div>
                   </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-bold">2</div>
                      <div>
                         <p className="text-white font-bold text-sm">Escrow Protection</p>
                         <p className="text-slate-400 text-xs font-medium">Financial security for every order.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="pt-12 border-t border-white/10">
             <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
                <span>ISO 27001</span>
                <span>GDPR</span>
                <span>PCI-DSS</span>
             </div>
          </div>
        </div>

        {/* Right Column: Sign In Form */}
        <div className="flex-1 p-8 lg:p-20 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <div className="mb-12">
              <h1 className="text-4xl font-extrabold text-white mb-4">Welcome back</h1>
              <p className="text-slate-400 font-medium">Continue your global trade operations with secure authentication.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                   <Link href="/auth/forgot-password" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
                     Forgot?
                   </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                 <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-offset-slate-900 cursor-pointer" />
                 <span className="text-sm text-slate-400 font-medium cursor-pointer">Stay authenticated for 30 days</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white text-slate-900 font-extrabold rounded-2xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 group mt-8 cursor-pointer shadow-xl shadow-white/5"
              >
                {loading ? "Authenticating Node..." : "Sign In"}
                {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform cursor-pointer" />}
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5">
               <p className="text-center text-slate-500 font-medium">
                 New to the platform?{" "}
                 <Link href="/auth/signup" className="text-white hover:text-indigo-400 font-bold transition-colors inline-flex items-center gap-1 cursor-pointer">
                   Create an account <ChevronRight className="w-4 h-4" />
                 </Link>
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
