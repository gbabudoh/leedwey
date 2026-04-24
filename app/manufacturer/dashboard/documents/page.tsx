"use client";

import { 
  FileText, 
  ShieldCheck, 
  Upload, 
  Download, 
  MoreVertical, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle,
  Lock,
  ArrowRight,
  Clock,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DocumentsVaultPage() {
  const documents = [
    { id: "DOC-901", name: "ISO 9001:2015 Certification", type: "CERTIFICATE", status: "VERIFIED", date: "Oct 12, 2026", size: "2.4 MB" },
    { id: "DOC-902", name: "Business License - Shenzhen Node", type: "LEGAL", status: "VERIFIED", date: "Oct 10, 2026", size: "1.8 MB" },
    { id: "DOC-903", name: "Q3 Physical Audit Report", type: "AUDIT", status: "PENDING", date: "Oct 23, 2026", size: "12.5 MB" },
    { id: "DOC-904", name: "VAT Registration Certificate", type: "TAX", status: "VERIFIED", date: "Sep 28, 2026", size: "0.9 MB" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
            <Lock className="w-3.5 h-3.5 text-indigo-600" />
            Compliance Vault
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Documents & Certs</h1>
          <p className="text-slate-500 font-medium">Manage your verified manufacturing credentials and audit trail.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95">
            <Upload className="w-4 h-4" />
            Upload Document
          </button>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <SettingsIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Verification Status Card */}
        <div className="lg:col-span-12">
          <div className="p-10 lg:p-12 rounded-[3.5rem] bg-indigo-600 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -mr-80 -mt-80"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
                  <ShieldCheck className="w-4 h-4 text-indigo-200" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100">Audit Status: Level 4 Confirmed</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                  Tier 1 Elite Node <br />
                  <span className="text-indigo-200">Physically Verified.</span>
                </h2>
                <p className="text-lg text-indigo-100/80 font-medium mb-10 leading-relaxed">
                  Your facility has cleared the Physical Audit Protocol. All listed documents are cryptographically signed and verified by the Leedwey Compliance Group.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-indigo-600 font-black rounded-2xl hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
                    Download Node Passport
                  </button>
                  <button className="px-8 py-4 bg-indigo-500/30 border border-white/10 text-white font-black rounded-2xl hover:bg-indigo-500/50 transition-all backdrop-blur-md">
                    Request Re-Audit
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:w-[400px]">
                {[
                  { label: "Trust Score", value: "99.8" },
                  { label: "Days Verified", value: "482" },
                  { label: "Active Certs", value: "12" },
                  { label: "Audit Level", value: "L4" },
                ].map(stat => (
                  <div key={stat.label} className="p-6 rounded-[2rem] bg-white/10 border border-white/10 backdrop-blur-md">
                    <p className="text-3xl font-black mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card rounded-[2.5rem] overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between gap-4">
               <div className="relative flex-1 group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                 <input 
                  type="text" 
                  placeholder="Search vault..."
                  className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-slate-50 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                 />
               </div>
               <button className="p-3 rounded-2xl border border-slate-100 text-slate-400 hover:bg-slate-50 transition-all">
                 <Filter className="w-5 h-5" />
               </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Document</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{doc.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{doc.size} • Uploaded {doc.date}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-lg">{doc.type}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            doc.status === "VERIFIED" ? "bg-emerald-500 shadow-lg shadow-emerald-500/50" : "bg-amber-500 animate-pulse"
                          )}></div>
                          <span className={cn(
                            "text-[10px] font-black uppercase tracking-widest",
                            doc.status === "VERIFIED" ? "text-emerald-500" : "text-amber-500"
                          )}>{doc.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-indigo-600">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="p-2 rounded-xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-emerald-600">
                            <Download className="w-5 h-5" />
                          </button>
                          <button className="p-2 rounded-xl hover:bg-white hover:shadow-md transition-all text-slate-400">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Audit Roadmap Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center justify-between relative z-10">
              Audit Roadmap
              <ArrowRight className="w-5 h-5 text-indigo-600" />
            </h3>
            
            <div className="space-y-10 relative z-10">
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100"></div>
              
              {[
                { title: "Physical Visit", date: "Jan 2026", status: "DONE", icon: CheckCircle2, color: "emerald" },
                { title: "Security Vetting", date: "Apr 2026", status: "DONE", icon: CheckCircle2, color: "emerald" },
                { title: "Renewal Audit", date: "Oct 2026", status: "PENDING", icon: Clock, color: "amber" },
                { title: "Elite Tier Prep", date: "Jan 2027", status: "LOCKED", icon: Lock, color: "slate" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6 relative">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-transparent",
                    step.status === "DONE" ? "bg-emerald-500 text-white shadow-emerald-100" :
                    step.status === "PENDING" ? "bg-amber-500 text-white shadow-amber-100" :
                    "bg-white text-slate-200 border-slate-100 shadow-none"
                  )}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{step.title}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mb-16"></div>
            <AlertCircle className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold mb-2">Expiry Alert</h3>
            <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
              Your ISO 14001 certification is set to expire in 45 days. Renew now to maintain your Elite status.
            </p>
            <button className="w-full py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
              Renew Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}
