"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Send, 
  Paperclip, 
  ShieldCheck, 
  MoreVertical, 
  Inbox, 
  FileText, 
  Send as SendIcon, 
  Archive, 
  Trash2, 
  Star,
  ArrowLeft,
  Download,
  Zap,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";

type Folder = "inbox" | "sent" | "archive" | "trash";
type Category = "all" | "inquiry" | "quote" | "invoice" | "admin";

export default function ManufacturerMessagesPage() {
  const [activeFolder, setActiveFolder] = useState<Folder>("inbox");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedMailId, setSelectedMailId] = useState<string | null>("1");
  const [isMobileListOpen, setIsMobileListOpen] = useState(true);

  const folders = [
    { id: "inbox", label: "Inbox", icon: <Inbox className="w-5 h-5" />, count: 4 },
    { id: "sent", label: "Sent", icon: <SendIcon className="w-5 h-5" /> },
    { id: "archive", label: "Archive", icon: <Archive className="w-5 h-5" /> },
    { id: "trash", label: "Trash", icon: <Trash2 className="w-5 h-5" /> },
  ];

  const categories = [
    { id: "all", label: "All Mail", color: "slate" },
    { id: "inquiry", label: "Enquiries", color: "blue" },
    { id: "quote", label: "Quote Requests", color: "indigo" },
    { id: "invoice", label: "Invoices", color: "emerald" },
    { id: "admin", label: "System Alerts", color: "amber" },
  ];

  const mails = [
    {
      id: "1",
      sender: "Global Logistics Corp",
      subject: "Inquiry: Bulk Production of CNC-X900 Components",
      preview: "We are interested in a long-term supply contract for your high-precision components. Could you provide...",
      content: "Dear PrecisionTech Team,\n\nWe have reviewed your factory profile and are impressed with your Level 4 Audit status. We are currently looking for a partner to produce 5,000 units of CNC-X900 components per month.\n\nPlease let us know if your current production load can accommodate this volume and what the lead time would be for the first batch.\n\nBest regards,\nSarah Chen\nProcurement Director",
      timestamp: "10:24 AM",
      category: "inquiry",
      read: false,
      starred: true,
      hasAttachment: false,
      role: "Business Buyer",
      tradeId: "TR-9283-A1"
    },
    {
      id: "2",
      sender: "ThermalFlow Systems",
      subject: "Quote Request: Custom Liquid Cooling Manifolds",
      preview: "Following our call, please find the technical specifications attached for the custom manifold project...",
      content: "Hello, as discussed, we need a formal quote for the custom manifolds based on the attached technical drawings. We require these to be aerospace-grade as per our previous discussions.\n\nRequired Quantity: 500 Units\nTarget Delivery: Dec 2026",
      timestamp: "Yesterday",
      category: "quote",
      read: true,
      starred: false,
      hasAttachment: true,
      role: "Manufacturer Partner",
      tradeId: "TR-4412-B2"
    },
    {
      id: "3",
      sender: "Leedwey Compliance",
      subject: "Audit Reminder: Annual Facility Inspection Scheduled",
      preview: "Your next physical audit is scheduled for next Tuesday at 09:00 local time. Please ensure...",
      content: "System Alert: Your annual facility inspection is due. Our agents will arrive at your Shenzhen node on Tuesday morning. Please have all ISO documentation and safety logs ready for review.",
      timestamp: "Monday",
      category: "admin",
      read: true,
      starred: false,
      hasAttachment: false,
      role: "Platform Admin",
      tradeId: "SYS-001-Z9"
    }
  ];

  const filteredMails = mails.filter(mail => 
    activeCategory === "all" ? true : mail.category === activeCategory
  );

  const selectedMail = mails.find(m => m.id === selectedMailId);

  return (
    <div className="h-[calc(100vh-6rem)] flex overflow-hidden animate-in fade-in duration-500 rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 my-4 mx-8">
      
      {/* Sidebar: Folders & Categories */}
      <aside className="w-72 border-r border-slate-100 flex flex-col bg-slate-50/50 hidden lg:flex">
         <div className="p-8">
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black shadow-xl shadow-slate-200 flex items-center justify-center gap-2 hover:bg-slate-800 transition-all cursor-pointer">
               <Zap className="w-4 h-4 text-indigo-400" /> Compose
            </button>
         </div>

         <div className="flex-1 px-4 space-y-1 overflow-y-auto">
            <div className="px-4 mb-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Folders</p>
            </div>
            {folders.map(folder => (
               <button 
                key={folder.id}
                onClick={() => setActiveFolder(folder.id as Folder)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold transition-all",
                  activeFolder === folder.id 
                    ? "bg-white text-indigo-600 shadow-sm border border-slate-100" 
                    : "text-slate-500 hover:bg-white/60"
                )}
               >
                  <div className="flex items-center gap-3">
                     {folder.icon}
                     <span className="text-sm">{folder.label}</span>
                  </div>
                  {folder.count && (
                     <span className={cn(
                       "text-[10px] px-2 py-0.5 rounded-lg",
                       activeFolder === folder.id ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-400"
                     )}>{folder.count}</span>
                  )}
               </button>
            ))}

            <div className="pt-8 space-y-1">
              <div className="px-4 mb-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Categories</p>
              </div>
              {categories.map(cat => (
                 <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all",
                    activeCategory === cat.id 
                      ? "bg-white text-slate-900 shadow-sm border border-slate-100" 
                      : "text-slate-500 hover:bg-white/60"
                  )}
                 >
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      cat.id === "inquiry" ? "bg-blue-500 shadow-blue-200" :
                      cat.id === "quote" ? "bg-indigo-500 shadow-indigo-200" :
                      cat.id === "invoice" ? "bg-emerald-500 shadow-emerald-200" :
                      cat.id === "admin" ? "bg-amber-500 shadow-amber-200" :
                      "bg-slate-300 shadow-slate-100"
                    )} style={{ boxShadow: `0 0 8px currentColor` }}></div>
                    <span className="text-sm">{cat.label}</span>
                 </button>
              ))}
            </div>
         </div>

         <div className="p-8 border-t border-slate-100">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
               <ShieldCheck className="w-5 h-5 text-indigo-600" />
               <p className="text-[10px] font-black text-indigo-900 uppercase tracking-tight">Secured via Leedwey Node</p>
            </div>
         </div>
      </aside>

      {/* Middle List - Message Previews */}
      <div className={cn(
        "flex-1 lg:flex-none lg:w-[450px] border-r border-slate-100 flex flex-col bg-white",
        !isMobileListOpen && "hidden lg:flex"
      )}>
         <div className="p-6 border-b border-slate-100 bg-slate-50/30">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search trade communications..."
                className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-200 transition-all font-bold placeholder:text-slate-400"
              />
            </div>
         </div>

         <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filteredMails.map(mail => (
               <div 
                key={mail.id}
                onClick={() => {
                  setSelectedMailId(mail.id);
                  setIsMobileListOpen(false);
                }}
                className={cn(
                  "p-6 border-b border-slate-50 cursor-pointer transition-all relative group",
                  selectedMailId === mail.id ? "bg-white shadow-inner" : "hover:bg-slate-50/50"
                )}
               >
                  {selectedMailId === mail.id && (
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"></div>
                  )}
                  <div className="flex items-start justify-between mb-3">
                     <div className="flex items-center gap-3">
                        {!mail.read && (
                          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-lg shadow-indigo-200"></div>
                        )}
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{mail.role}</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-400">{mail.timestamp}</span>
                  </div>
                  <h4 className={cn(
                    "text-sm font-extrabold text-slate-900 mb-2 truncate",
                    !mail.read && "text-indigo-600"
                  )}>{mail.subject}</h4>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed mb-4">{mail.preview}</p>
                  
                  <div className="flex items-center gap-2">
                     {mail.category === "quote" && <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest border border-indigo-100">Quote Req</span>}
                     {mail.category === "inquiry" && <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 text-[8px] font-black uppercase tracking-widest border border-blue-100">Inquiry</span>}
                     {mail.category === "admin" && <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-600 text-[8px] font-black uppercase tracking-widest border border-amber-100">System</span>}
                     {mail.hasAttachment && <Paperclip className="w-3.5 h-3.5 text-slate-300" />}
                  </div>

                  <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                     <button className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 transition-all shadow-sm"><Archive className="w-4 h-4" /></button>
                     <button className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-rose-500 transition-all shadow-sm"><Trash2 className="w-4 h-4" /></button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Right Detail - Full Message View */}
      <div className={cn(
        "flex-1 flex flex-col bg-white relative",
        isMobileListOpen && "hidden lg:flex"
      )}>
         {selectedMail ? (
            <>
               {/* Header Actions */}
               <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
                  <div className="flex items-center gap-4">
                     <button 
                      onClick={() => setIsMobileListOpen(true)}
                      className="lg:hidden p-3 rounded-2xl bg-slate-100 text-slate-500"
                     >
                        <ArrowLeft className="w-5 h-5" />
                     </button>
                     <div className="flex items-center gap-2">
                        <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 hover:text-amber-500 transition-all">
                           <Star className={cn("w-5 h-5", selectedMail.starred && "fill-amber-500 text-amber-500")} />
                        </button>
                        <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 hover:text-indigo-600 transition-all">
                           <Archive className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 hover:text-rose-500 transition-all">
                           <Trash2 className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                        Mark Unread
                     </button>
                     <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 transition-all">
                        <MoreVertical className="w-5 h-5" />
                     </button>
                  </div>
               </div>

               {/* Content */}
               <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                  <div className="max-w-3xl mx-auto">
                     <div className="mb-12">
                        <h1 className="text-3xl font-black text-slate-900 leading-tight mb-8 tracking-tight">{selectedMail.subject}</h1>
                        
                        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                           <div className="flex items-center gap-4">
                              <Avatar className="w-14 h-14 border-2 border-white shadow-md">
                                 <AvatarFallback className="bg-indigo-600 text-white font-black">
                                    {selectedMail.sender.charAt(0)}
                                 </AvatarFallback>
                              </Avatar>
                              <div>
                                 <div className="flex items-center gap-2">
                                    <h3 className="font-extrabold text-slate-900">{selectedMail.sender}</h3>
                                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                                       <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                       <span className="text-[8px] font-black text-emerald-700 uppercase tracking-widest">Verified</span>
                                    </div>
                                 </div>
                                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">From: {selectedMail.role}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-xs font-black text-slate-900">{selectedMail.timestamp}</p>
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Trade ID: {selectedMail.tradeId}</p>
                           </div>
                        </div>
                     </div>

                     <div className="prose prose-slate max-w-none mb-16">
                        <div className="whitespace-pre-wrap text-lg text-slate-600 font-medium leading-relaxed">
                           {selectedMail.content}
                        </div>
                     </div>

                     {selectedMail.hasAttachment && (
                        <div className="mb-12">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-2">Secure Attachments</p>
                           <div className="p-6 rounded-[2.5rem] border-2 border-indigo-50 bg-indigo-50/20 flex items-center justify-between group hover:border-indigo-200 transition-all cursor-pointer shadow-sm">
                              <div className="flex items-center gap-5">
                                 <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-200 group-hover:scale-105 transition-transform">
                                    <FileText className="w-8 h-8" />
                                 </div>
                                 <div>
                                    <h4 className="font-extrabold text-slate-900">Technical_Specs_X900.pdf</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-1">PDF • 4.2 MB • End-to-End Encrypted</p>
                                 </div>
                              </div>
                              <button className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
                                 <Download className="w-6 h-6" />
                              </button>
                           </div>
                        </div>
                     )}

                     {/* Action Node */}
                     <div className="pt-12 border-t border-slate-100 flex flex-wrap gap-4">
                        <button className="flex-1 py-5 bg-slate-900 text-white font-black rounded-[2rem] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95 group">
                           <Zap className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" /> Generate Formal Quote
                        </button>
                        <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-[2rem] hover:bg-slate-50 transition-all flex items-center gap-3">
                           <Send className="w-5 h-5 text-slate-400" /> Quick Reply
                        </button>
                     </div>
                  </div>
               </div>
            </>
         ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-slate-50/30">
               <div className="w-32 h-32 rounded-[3rem] bg-white flex items-center justify-center mb-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Mail className="w-12 h-12 text-slate-200" />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Select a trade transmission</h3>
               <p className="text-slate-400 max-w-sm font-bold text-sm">Review your formal inquiries, quotes, and platform alerts in this secure terminal.</p>
            </div>
         )}
      </div>
    </div>
  );
}
