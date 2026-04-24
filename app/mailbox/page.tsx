"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
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
  AlertCircle, 
  Star,
  CheckCircle2,
  ArrowLeft,
  Download,
  Zap
} from "lucide-react";

type Folder = "inbox" | "sent" | "archive" | "trash";
type Category = "all" | "inquiry" | "quote" | "invoice" | "admin";

export default function MailboxPage() {
  const [activeFolder, setActiveFolder] = useState<Folder>("inbox");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedMailId, setSelectedMailId] = useState<string | null>("1");
  const [isMobileListOpen, setIsMobileListOpen] = useState(true);

  const folders = [
    { id: "inbox", label: "Inbox", icon: <Inbox className="w-5 h-5" />, count: 12 },
    { id: "sent", label: "Sent", icon: <SendIcon className="w-5 h-5" /> },
    { id: "archive", label: "Archive", icon: <Archive className="w-5 h-5" /> },
    { id: "trash", label: "Trash", icon: <Trash2 className="w-5 h-5" /> },
  ];

  const categories = [
    { id: "all", label: "All Mail", color: "slate" },
    { id: "inquiry", label: "Inquiries", color: "blue" },
    { id: "quote", label: "Quotes", color: "indigo" },
    { id: "invoice", label: "Invoices", color: "emerald" },
    { id: "admin", label: "Admin Alerts", color: "amber" },
  ];

  const mails = [
    {
      id: "1",
      sender: "PrecisionTech Manufacturing Ltd.",
      subject: "Formal Quotation: CNC Component Model X-900 (10 Units)",
      preview: "Hello, following your inquiry, we have attached the formal quotation including shipping to Singapore...",
      content: "Dear Procurement Team,\n\nPlease find the attached formal quotation for the High-Precision Industrial CNC Component Model X-900. \n\nTotal Units: 10\nUnit Price: $250.00\nLead Time: 14 Days\nShipping: Global Express Air ($145.00)\n\nThis quote is valid for 7 business days. Please let us know if you would like to proceed with the escrow activation.",
      timestamp: "10:24 AM",
      category: "quote",
      read: false,
      starred: true,
      hasAttachment: true,
      role: "Manufacturer"
    },
    {
      id: "2",
      sender: "SwiftLogistics Global",
      subject: "Shipping Route Capacity Confirmation: Singapore Warehouse",
      preview: "We have confirmed container availability for the trans-pacific route scheduled for next Tuesday...",
      content: "Hello, we have checked the capacity for the requested route. We can accommodate the 1.2 ton shipment on our next scheduled vessel. Please confirm the customs documentation status.",
      timestamp: "Yesterday",
      category: "inquiry",
      read: true,
      starred: false,
      hasAttachment: false,
      role: "Logistics"
    },
    {
      id: "3",
      sender: "Leedwey Admin",
      subject: "Security Alert: New Verified Factory Node Registered",
      preview: "A new factory in your preferred region has passed the physical audit process and is now active...",
      content: "System Update: We have successfully vetted and verified 'SinoPrecision Ltd.' in Shenzhen. They specialize in the components you frequently source. View their profile in the Marketplace.",
      timestamp: "Monday",
      category: "admin",
      read: true,
      starred: false,
      hasAttachment: false,
      role: "Admin"
    },
    {
      id: "4",
      sender: "Skyline Electronics",
      subject: "Invoice #INV-2026-004: Electronic Components",
      preview: "Your milestone payment for the production phase has been generated. Please review and pay...",
      content: "Invoice for Production Milestone 1. Amount: $4,500.00. Payment due by end of week to ensure production schedule is maintained.",
      timestamp: "Oct 22",
      category: "invoice",
      read: true,
      starred: false,
      hasAttachment: true,
      role: "Manufacturer"
    }
  ];

  const filteredMails = mails.filter(mail => 
    activeCategory === "all" ? true : mail.category === activeCategory
  );

  const selectedMail = mails.find(m => m.id === selectedMailId);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24 h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden max-w-[1600px] mx-auto w-full px-4 lg:px-8 pb-8">
          
          <div className="w-full flex bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden mt-4">
            
            {/* Sidebar - Folders & Categories */}
            <aside className="w-72 border-r border-slate-50 flex flex-col bg-slate-50/30 hidden lg:flex">
               <div className="p-8">
                  <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-extrabold shadow-xl shadow-slate-200 flex items-center justify-center gap-2 hover:bg-slate-800 transition-all cursor-pointer">
                     <Zap className="w-4 h-4 text-indigo-400" /> Compose Mail
                  </button>
               </div>

               <div className="flex-1 px-4 space-y-1">
                  <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Folders</p>
                  {folders.map(folder => (
                     <button 
                      key={folder.id}
                      onClick={() => setActiveFolder(folder.id as Folder)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold transition-all ${activeFolder === folder.id ? "bg-white text-indigo-600 shadow-sm border border-slate-100" : "text-slate-500 hover:bg-white/50"}`}
                     >
                        <div className="flex items-center gap-3">
                           {folder.icon}
                           <span className="text-sm">{folder.label}</span>
                        </div>
                        {folder.count && (
                           <span className={`text-[10px] px-2 py-0.5 rounded-lg ${activeFolder === folder.id ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-400"}`}>{folder.count}</span>
                        )}
                     </button>
                  ))}

                  <div className="pt-8 space-y-1">
                    <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Categories</p>
                    {categories.map(cat => (
                       <button 
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id as Category)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${activeCategory === cat.id ? "bg-white text-slate-900 shadow-sm border border-slate-100" : "text-slate-500 hover:bg-white/50"}`}
                       >
                          <div className={`w-2 h-2 rounded-full bg-${cat.color}-500 shadow-[0_0_8px] shadow-${cat.color}-500/50`}></div>
                          <span className="text-sm">{cat.label}</span>
                       </button>
                    ))}
                  </div>
               </div>

               <div className="p-8 border-t border-slate-100">
                  <div className="flex Paradox items-center gap-3 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100/50">
                     <ShieldCheck className="w-5 h-5 text-indigo-600" />
                     <p className="text-[10px] font-extrabold text-indigo-900 uppercase tracking-tight">Secured via Leedwey Ledger</p>
                  </div>
               </div>
            </aside>

            {/* Middle List - Message Previews */}
            <div className={`flex-1 lg:flex-none lg:w-[450px] border-r border-slate-50 flex flex-col ${!isMobileListOpen && "hidden lg:flex"}`}>
               <div className="p-6 border-b border-slate-50">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Search trade dialogue..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-200 transition-all font-medium"
                    />
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto">
                  {filteredMails.map(mail => (
                     <div 
                      key={mail.id}
                      onClick={() => {
                        setSelectedMailId(mail.id);
                        setIsMobileListOpen(false);
                      }}
                      className={`p-6 border-b border-slate-50 cursor-pointer transition-all relative group ${selectedMailId === mail.id ? "bg-white" : "hover:bg-slate-50/50"}`}
                     >
                        {selectedMailId === mail.id && (
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"></div>
                        )}
                        <div className="flex items-start justify-between mb-2">
                           <div className="flex items-center gap-2">
                              {mail.read ? (
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px] shadow-indigo-600/50"></div>
                              )}
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{mail.role}</span>
                           </div>
                           <span className="text-[10px] font-bold text-slate-300">{mail.timestamp}</span>
                        </div>
                        <h4 className={`text-sm font-extrabold text-slate-900 mb-1 truncate ${!mail.read && "font-black"}`}>{mail.subject}</h4>
                        <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">{mail.preview}</p>
                        
                        <div className="flex items-center gap-2 mt-4">
                           {mail.category === "quote" && <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest border border-indigo-100">Quote</span>}
                           {mail.category === "invoice" && <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100">Invoice</span>}
                           {mail.category === "inquiry" && <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-blue-600 text-[8px] font-black uppercase tracking-widest border border-blue-100">Inquiry</span>}
                           {mail.category === "admin" && <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-amber-600 text-[8px] font-black uppercase tracking-widest border border-amber-100">Admin</span>}
                           {mail.hasAttachment && <Paperclip className="w-3 h-3 text-slate-300" />}
                        </div>

                        <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                           <button className="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-100 text-slate-400 hover:text-indigo-600 transition-all shadow-sm"><Archive className="w-3.5 h-3.5" /></button>
                           <button className="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-100 text-slate-400 hover:text-rose-500 transition-all shadow-sm"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Right Detail - Full Message View */}
            <div className={`flex-1 flex flex-col bg-white ${isMobileListOpen && "hidden lg:flex"}`}>
               {selectedMail ? (
                  <>
                     {/* Header Actions */}
                     <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <button 
                            onClick={() => setIsMobileListOpen(true)}
                            className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-500"
                           >
                              <ArrowLeft className="w-5 h-5" />
                           </button>
                           <div className="flex items-center gap-2">
                              <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-amber-500 transition-all">
                                 <Star className={`w-5 h-5 ${selectedMail.starred ? "fill-amber-500 text-amber-500" : ""}`} />
                              </button>
                              <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-indigo-600 transition-all">
                                 <Archive className="w-5 h-5" />
                              </button>
                              <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-rose-500 transition-all">
                                 <Trash2 className="w-5 h-5" />
                              </button>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-all flex items-center gap-2">
                              Mark Unread
                           </button>
                           <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 transition-all">
                              <MoreVertical className="w-5 h-5" />
                           </button>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="flex-1 overflow-y-auto p-12">
                        <div className="max-w-3xl mx-auto">
                           <div className="mb-12">
                              <h1 className="text-3xl font-black text-slate-900 leading-tight mb-8">{selectedMail.subject}</h1>
                              
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-4">
                                    <Avatar className="w-14 h-14 border border-slate-100 shadow-sm">
                                       <AvatarFallback className="bg-indigo-50 text-indigo-600 font-black">
                                          {selectedMail.sender.charAt(0)}
                                       </AvatarFallback>
                                    </Avatar>
                                    <div>
                                       <div className="flex items-center gap-2">
                                          <h3 className="font-extrabold text-slate-900">{selectedMail.sender}</h3>
                                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100">Verified Factory</span>
                                       </div>
                                       <p className="text-xs text-slate-400 font-bold">To: <span className="text-slate-500 font-extrabold">Me (Global Logistics Node)</span></p>
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <p className="text-xs font-black text-slate-900">{selectedMail.timestamp}</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">via Leedwey Mail Node</p>
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
                                 <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Attachments (1)</p>
                                 <div className="p-6 rounded-[2.5rem] border-2 border-indigo-50 bg-slate-50/50 flex items-center justify-between group hover:border-indigo-200 transition-all">
                                    <div className="flex items-center gap-4">
                                       <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                                          <FileText className="w-8 h-8" />
                                       </div>
                                       <div>
                                          <h4 className="font-extrabold text-slate-900">Formal_Quote_CNC_X900.pdf</h4>
                                          <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">PDF Document • 4.2 MB • End-to-End Encrypted</p>
                                       </div>
                                    </div>
                                    <button className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
                                       <Download className="w-6 h-6" />
                                    </button>
                                 </div>
                              </div>
                           )}

                           {/* Contextual Action Buttons */}
                           <div className="pt-12 border-t border-slate-100 flex flex-wrap gap-4">
                              <button className="px-10 py-5 bg-slate-900 text-white font-black rounded-[2rem] hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-indigo-400" /> Accept & Activate Escrow
                              </button>
                              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-[2rem] hover:bg-slate-50 transition-all flex items-center gap-3">
                                 <Send className="w-5 h-5 text-slate-400" /> Reply to Inquiry
                              </button>
                              <button className="px-10 py-5 bg-indigo-50 text-indigo-600 font-black rounded-[2rem] hover:bg-indigo-100 transition-all flex items-center gap-3 border border-indigo-100">
                                 <AlertCircle className="w-5 h-5" /> Request Revision
                              </button>
                           </div>
                        </div>
                     </div>
                  </>
               ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                     <div className="w-32 h-32 rounded-[3rem] bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                        <Inbox className="w-12 h-12 text-slate-200" />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 mb-2">Select an item to read</h3>
                     <p className="text-slate-400 max-w-sm font-medium">Click on a trade dialogue from the list to view the full audit trail and formal documents.</p>
                  </div>
               )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
