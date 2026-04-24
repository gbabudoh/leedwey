"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Building2, ShieldCheck, Zap, Globe, ArrowRight, User, Mail, Lock, Building } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    segment: "Wholesaler",
    role: "BUYER" as "BUYER" | "MANUFACTURER",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/auth/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        companyName: formData.companyName,
        segment: formData.role === "BUYER" ? formData.segment : "Manufacturer",
        role: formData.role,
      });

      toast.success("Account created successfully! Please sign in.");
      router.push("/auth/signin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error || "An error occurred. Please try again.");
      } else {
        toast.error("An unexpected error occurred.");
      }
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
        
        {/* Left Column: Brand & Trust */}
        <div className="lg:w-5/12 p-12 lg:p-16 bg-gradient-to-br from-indigo-600/20 to-transparent border-r border-white/5 hidden lg:flex flex-col">
          <Link href="/" className="flex items-center gap-2 mb-16 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
              <Building2 className="w-7 h-7 text-white cursor-pointer" />
            </div>
            <span className="text-3xl font-extrabold text-white tracking-tight cursor-pointer">Leedwey</span>
          </Link>

          <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
            Join the World&apos;s Most <br />
            <span className="text-gradient">Trusted B2B Network.</span>
          </h2>

          <div className="space-y-8 flex-1">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Physical Verification</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">Every manufacturing unit is physically audited by our global agents.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Milestone Escrow</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">Payments are only released upon verified production and delivery milestones.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Global Trade Compliance</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">Full legal and regulatory compliance across 50+ international trade corridors.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800"></div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">+5k</div>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verified Trading Units</p>
          </div>
        </div>

        {/* Right Column: Sign Up Form */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
              <h1 className="text-3xl font-extrabold text-white mb-3">Create your account</h1>
              <p className="text-slate-400 font-medium">Join our closed ecosystem of global trade professionals.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection */}
              <div className="flex gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "BUYER" })}
                  className={`flex-1 py-3 px-4 rounded-2xl border transition-all flex items-center justify-center gap-2 font-bold text-sm cursor-pointer ${
                    formData.role === "BUYER" 
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20" 
                    : "bg-white/5 border-white/10 text-slate-500 hover:bg-white/10 cursor-pointer"
                  }`}
                >
                  <User className="w-4 h-4 cursor-pointer" /> Buyer
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "MANUFACTURER" })}
                  className={`flex-1 py-3 px-4 rounded-2xl border transition-all flex items-center justify-center gap-2 font-bold text-sm cursor-pointer ${
                    formData.role === "MANUFACTURER" 
                    ? "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                    : "bg-white/5 border-white/10 text-slate-500 hover:bg-white/10 cursor-pointer"
                  }`}
                >
                  <Building className="w-4 h-4 cursor-pointer" /> Manufacturer
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-3 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Company Name</label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-3 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                    placeholder="Enter your registered company"
                  />
                </div>
              </div>

              {formData.role === "BUYER" && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Business Segment</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Wholesaler", "Supplier", "Individual", "Corporate", "Government"].map((seg) => (
                      <button
                        key={seg}
                        type="button"
                        onClick={() => setFormData({ ...formData, segment: seg })}
                        className={`py-3 px-2 rounded-xl border transition-all text-[10px] font-black uppercase tracking-wider cursor-pointer ${
                          formData.segment === seg 
                          ? "bg-white/10 border-indigo-500 text-white shadow-lg shadow-indigo-500/10" 
                          : "bg-white/5 border-white/5 text-slate-500 hover:bg-white/10 cursor-pointer"
                        }`}
                      >
                        {seg}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-3 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Confirm</label>
                  <div className="relative group">
                    <input
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white text-slate-900 font-extrabold rounded-2xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 group mt-6 cursor-pointer shadow-xl shadow-white/5"
              >
                {loading ? "Establishing Node..." : "Join Platform"}
                {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform cursor-pointer" />}
              </button>
            </form>

            <p className="mt-8 text-center text-slate-500 font-medium">
              Already a member?{" "}
              <Link href="/auth/signin" className="text-white hover:text-indigo-400 font-bold transition-colors cursor-pointer">
                Sign in to your account
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
