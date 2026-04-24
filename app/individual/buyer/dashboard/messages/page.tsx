"use client";

import { 
  MessageSquare, 
  Search, 
  MoreVertical, 
  Send, 
  Paperclip, 
  ShieldCheck,
  Phone,
  Video,
  Inbox,
  Mail,
  Archive,
  Star,
  Trash2,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Plus,
  X,
  UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function IndividualMessagesPage() {
  const [activeTab, setActiveTab] = useState<"chat" | "mail">("chat");
  const [selectedChat, setSelectedChat] = useState("PrecisionTech");
  const [selectedMailId, setSelectedMailId] = useState<string | null>("1");
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [composeData, setComposeData] = useState({ to: "", subject: "" });

  const chats = [
    { id: " PrecisionTech", name: "PrecisionTech Shenzhen", lastMsg: "The production log for Milestone 2 is ready.", time: "12m", unread: 2, avatar: "P", status: "online" },
    { id: "Vision", name: "Vision Electronics Hub", lastMsg: "Shipping docs have been uploaded.", time: "2h", unread: 0, avatar: "V", status: "offline" },
    { id: "SensorWave", name: "SensorWave Dynamics", lastMsg: "We can start the SMT run tomorrow.", time: "1d", unread: 0, avatar: "S", status: "online" },
  ];

  const mails = [
    {
      id: "1",
      sender: "PrecisionTech Manufacturing",
      subject: "Formal Quotation: CNC Component X-900",
      preview: "Hello, following your inquiry, we have attached the formal quotation...",
      content: "Dear Procurement Team,\n\nPlease find the attached formal quotation for the High-Precision Industrial CNC Component Model X-900. \n\nTotal Units: 10\nUnit Price: $250.00\nLead Time: 14 Days\nShipping: Global Express Air ($145.00)\n\nThis quote is valid for 7 business days. Please let us know if you would like to proceed with the escrow activation.",
      timestamp: "10:24 AM",
      category: "quote",
      read: false,
      starred: true,
      hasAttachment: true
    },
    {
      id: "2",
      sender: "Leedwey Admin",
      subject: "Security Alert: Node Verification Successful",
      preview: "A new factory in your preferred region has passed the physical audit...",
      content: "System Update: We have successfully vetted and verified 'SinoPrecision Ltd.' in Shenzhen. They specialize in the components you frequently source.",
      timestamp: "Yesterday",
      category: "admin",
      read: true,
      starred: false,
      hasAttachment: false
    }
  ];

  const selectedMail = mails.find(m => m.id === selectedMailId);

  return (
    <div className="h-[calc(100vh-120px)] p-8 space-y-6 animate-in fade-in duration-1000">
      {/* View Toggle */}
      <div className="flex items-center gap-4">
         <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
            <button 
              onClick={() => setActiveTab("chat")}
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer",
                activeTab === "chat" ? "bg-slate-900 text-white shadow-lg shadow-slate-200" : "text-slate-400 hover:text-slate-600"
              )}
            >
               <MessageSquare className="w-3.5 h-3.5 cursor-pointer" />
               Live Chat
            </button>
            <button 
              onClick={() => setActiveTab("mail")}
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer",
                activeTab === "mail" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-slate-400 hover:text-slate-600"
              )}
            >
               <Mail className="w-3.5 h-3.5 cursor-pointer" />
               Official Mail
            </button>
         </div>
         <div className="w-px h-6 bg-slate-200 mx-2"></div>
         <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End-to-End Encrypted Node</p>
         </div>
      </div>

      <div className="h-full glass-card rounded-[3.5rem] border border-slate-100 overflow-hidden flex shadow-2xl shadow-slate-200/50">
        
        {/* Sidebar */}
        <div className="w-96 border-r border-slate-50 flex flex-col bg-slate-50/30">
          <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900">{activeTab === "chat" ? "Active Chats" : "Inbox"}</h2>
              <button className="p-2 bg-white rounded-xl shadow-sm hover:bg-slate-50 transition-all border border-slate-100 cursor-pointer">
                <Search className="w-5 h-5 text-slate-400 cursor-pointer" />
              </button>
            </div>

            {activeTab === "mail" && (
              <button 
                onClick={() => {
                  setComposeData({ to: "", subject: "" });
                  setIsComposeOpen(true);
                }}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-200 flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all active:scale-95 cursor-pointer"
              >
                <Plus className="w-4 h-4 cursor-pointer" />
                Compose Formal Mail
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-8">
            {activeTab === "chat" ? (
              chats.map((chat) => (
                <button 
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.name)}
                  className={cn(
                    "w-full p-5 rounded-[2.5rem] flex items-center gap-4 transition-all text-left group cursor-pointer",
                    selectedChat === chat.name ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100" : "hover:bg-white/50"
                  )}
                >
                  <div className="relative cursor-pointer">
                     <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg cursor-pointer">
                        {chat.avatar}
                     </div>
                     {chat.status === "online" && (
                       <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-white rounded-full cursor-pointer"></div>
                     )}
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer">
                     <div className="flex items-center justify-between mb-1 cursor-pointer">
                        <p className="font-black text-slate-900 truncate cursor-pointer">{chat.name}</p>
                        <span className="text-[10px] font-bold text-slate-400 cursor-pointer">{chat.time}</span>
                     </div>
                     <p className="text-xs text-slate-400 font-medium truncate group-hover:text-slate-600 transition-colors cursor-pointer">{chat.lastMsg}</p>
                  </div>
                </button>
              ))
            ) : (
              mails.map((mail) => (
                <button 
                  key={mail.id}
                  onClick={() => setSelectedMailId(mail.id)}
                  className={cn(
                    "w-full p-5 rounded-[2.5rem] flex flex-col gap-2 transition-all text-left group relative cursor-pointer",
                    selectedMailId === mail.id ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100" : "hover:bg-white/50"
                  )}
                >
                  <div className="flex items-center justify-between cursor-pointer">
                     <div className="flex items-center gap-2 cursor-pointer">
                        {!mail.read && <div className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px] shadow-indigo-600/50 cursor-pointer"></div>}
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer">{mail.sender}</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-300 cursor-pointer">{mail.timestamp}</span>
                  </div>
                  <p className={cn(
                    "text-sm font-black text-slate-900 line-clamp-1 cursor-pointer",
                    selectedMailId === mail.id ? "text-indigo-600" : "group-hover:text-indigo-600"
                  )}>{mail.subject}</p>
                  <p className="text-xs text-slate-400 font-medium line-clamp-2 leading-relaxed cursor-pointer">{mail.preview}</p>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          {activeTab === "chat" ? (
             <>
               {/* Chat Header */}
               <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black shadow-xl">
                        {selectedChat.charAt(0)}
                     </div>
                     <div>
                        <h3 className="font-black text-slate-900 flex items-center gap-2">
                           {selectedChat}
                           <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        </h3>
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Trade Node</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100 cursor-pointer">
                        <Phone className="w-5 h-5 cursor-pointer" />
                     </button>
                     <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100 cursor-pointer">
                        <Video className="w-5 h-5 cursor-pointer" />
                     </button>
                     <div className="w-px h-6 bg-slate-100 mx-1"></div>
                     <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer">
                        <MoreVertical className="w-5 h-5 cursor-pointer" />
                     </button>
                  </div>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-slate-50/10">
                  <div className="flex justify-center">
                     <span className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">Today, Oct 23</span>
                  </div>

                  <div className="flex items-start gap-4 max-w-2xl">
                     <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-black flex-shrink-0">P</div>
                     <div className="space-y-2">
                        <div className="p-6 bg-slate-100/50 rounded-[2rem] rounded-tl-lg border border-white text-sm text-slate-700 font-medium leading-relaxed">
                           Hello! We have just uploaded the high-resolution inspection logs for the Milestone 2 production run. Everything is looking good on the CNC floor.
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 ml-2">10:42 AM • Sent from Node A-2</p>
                     </div>
                  </div>

                  <div className="flex flex-row-reverse items-start gap-4 max-w-2xl ml-auto text-right">
                     <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-lg shadow-indigo-100">ME</div>
                     <div className="space-y-2">
                        <div className="p-6 bg-indigo-600 text-white rounded-[2rem] rounded-tr-lg shadow-xl shadow-indigo-100 text-sm font-medium leading-relaxed">
                           Received. I&apos;m reviewing the logs now. If everything aligns with the specs, I&apos;ll release the next escrow milestone by EOD.
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 mr-2">10:45 AM • Delivered</p>
                     </div>
                  </div>
               </div>

               {/* Input Area */}
               <div className="p-8 bg-white border-t border-slate-50">
                  <div className="flex items-center gap-4 bg-slate-50 p-3 pl-6 rounded-[2rem] border border-transparent focus-within:bg-white focus-within:border-indigo-600/20 focus-within:ring-4 focus-within:ring-indigo-600/5 transition-all">
                     <input 
                       type="text" 
                       placeholder="Type a secure message..." 
                       className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-slate-900 placeholder:text-slate-400"
                     />
                     <button className="p-3 text-slate-400 hover:text-indigo-600 transition-all">
                        <Paperclip className="w-5 h-5" />
                     </button>
                     <button className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95">
                        <Send className="w-5 h-5" />
                     </button>
                  </div>
               </div>
             </>
          ) : (
             <div className="flex-1 flex flex-col h-full bg-white">
                {selectedMail ? (
                   <>
                      <div className="px-10 py-8 border-b border-slate-50 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10 cursor-pointer">
                         <div className="flex items-center gap-4 cursor-pointer">
                            <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-amber-500 transition-all cursor-pointer">
                               <Star className={cn("w-5 h-5 cursor-pointer", selectedMail.starred && "fill-amber-500 text-amber-500")} />
                            </button>
                            <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-indigo-600 transition-all cursor-pointer">
                               <Archive className="w-5 h-5 cursor-pointer" />
                            </button>
                            <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-rose-500 transition-all cursor-pointer">
                               <Trash2 className="w-5 h-5 cursor-pointer" />
                            </button>
                         </div>
                         <div className="flex items-center gap-3 cursor-pointer">
                            <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all cursor-pointer">
                               Mark Unread
                            </button>
                            <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 transition-all cursor-pointer">
                               <MoreVertical className="w-5 h-5 cursor-pointer" />
                            </button>
                         </div>
                      </div>

                      <div className="flex-1 overflow-y-auto p-12">
                         <div className="max-w-3xl mx-auto space-y-12">
                            <div>
                               <h1 className="text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tight">{selectedMail.subject}</h1>
                               <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                     <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-black border border-indigo-100">
                                        {selectedMail.sender.charAt(0)}
                                     </div>
                                     <div>
                                        <div className="flex items-center gap-2">
                                           <h3 className="font-black text-slate-900">{selectedMail.sender}</h3>
                                           <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100">Verified Factory</span>
                                        </div>
                                        <p className="text-xs text-slate-400 font-bold">via Leedwey Official Node</p>
                                     </div>
                                  </div>
                                  <div className="text-right">
                                     <p className="text-xs font-black text-slate-900">{selectedMail.timestamp}</p>
                                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Oct 23, 2026</p>
                                  </div>
                               </div>
                            </div>

                            <div className="whitespace-pre-wrap text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-slate-50 pl-8">
                               {selectedMail.content}
                            </div>

                             {selectedMail.hasAttachment && (
                               <div className="p-8 rounded-[3rem] border-2 border-indigo-50 bg-slate-50/50 flex items-center justify-between group hover:border-indigo-200 transition-all cursor-pointer">
                                  <div className="flex items-center gap-5 cursor-pointer">
                                     <div className="w-16 h-16 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-100 cursor-pointer">
                                        <FileText className="w-8 h-8 cursor-pointer" />
                                     </div>
                                     <div className="cursor-pointer">
                                        <h4 className="font-black text-slate-900 cursor-pointer">Formal_Quote_CNC_X900.pdf</h4>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest cursor-pointer">4.2 MB • End-to-End Encrypted</p>
                                     </div>
                                  </div>
                                  <button className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm cursor-pointer">
                                     <Download className="w-6 h-6 cursor-pointer" />
                                  </button>
                               </div>
                             )}

                             <div className="pt-12 border-t border-slate-50 flex flex-wrap gap-4">
                               <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center gap-3 active:scale-95 cursor-pointer">
                                  <CheckCircle2 className="w-5 h-5 text-indigo-400 cursor-pointer" /> Accept Quote
                               </button>
                               <button 
                                onClick={() => {
                                  setComposeData({ 
                                    to: selectedMail.sender, 
                                    subject: `Re: ${selectedMail.subject}` 
                                  });
                                  setIsComposeOpen(true);
                                }}
                                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-3 active:scale-95 cursor-pointer"
                               >
                                  <Send className="w-5 h-5 text-slate-400 cursor-pointer" /> Reply
                               </button>
                               <button className="px-8 py-4 bg-indigo-50 text-indigo-600 font-black rounded-2xl hover:bg-indigo-100 transition-all border border-indigo-100 flex items-center gap-3 active:scale-95 cursor-pointer">
                                  <AlertCircle className="w-5 h-5 cursor-pointer" /> Request Revision
                               </button>
                            </div>
                         </div>
                      </div>
                   </>
                ) : (
                   <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-slate-50/20">
                      <div className="w-24 h-24 rounded-[2.5rem] bg-white border border-slate-100 flex items-center justify-center mb-8 shadow-sm">
                         <Inbox className="w-10 h-10 text-slate-200" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-2">Select a mail to read</h3>
                      <p className="text-slate-400 max-w-sm font-medium text-sm">Click on a formal trade dialogue from the sidebar to view documents and official correspondence.</p>
                   </div>
                )}
             </div>
          )}
        </div>
      </div>

      {/* Compose Modal */}
      {isComposeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-24 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="w-full max-w-2xl bg-white rounded-[3.5rem] shadow-2xl shadow-slate-900/20 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
              {/* Modal Header */}
              <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">New Correspondence</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                       <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                       Formal Trade Dialogue
                    </p>
                 </div>
                 <button 
                  onClick={() => setIsComposeOpen(false)}
                  className="p-3 bg-white hover:bg-slate-100 rounded-2xl transition-all border border-slate-100 active:scale-90"
                 >
                    <X className="w-5 h-5 text-slate-400" />
                 </button>
              </div>

              {/* Modal Form */}
              <div className="p-8 space-y-6 overflow-y-auto flex-1">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Recipient Node</label>
                    <div className="relative group">
                       <UserPlus className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                       <select 
                        value={composeData.to}
                        onChange={(e) => setComposeData({ ...composeData, to: e.target.value })}
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold focus:outline-none focus:bg-white focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-600/5 transition-all appearance-none cursor-pointer"
                       >
                          <option value="">Select Factory Node...</option>
                          <option value="PrecisionTech Manufacturing">PrecisionTech Shenzhen</option>
                          <option value="Vision Electronics Hub">Vision Electronics Hub</option>
                          <option value="SensorWave Dynamics">SensorWave Dynamics</option>
                       </select>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Subject Reference</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Formal Inquiry: CNC Production Run"
                      value={composeData.subject}
                      onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold focus:outline-none focus:bg-white focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-600/5 transition-all"
                    />
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Trade Dialogue Content</label>
                    <textarea 
                      placeholder="Compose your formal trade message..."
                      rows={6}
                      className="w-full px-8 py-6 bg-slate-50 border border-transparent rounded-[2.5rem] text-sm font-medium leading-relaxed focus:outline-none focus:bg-white focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-600/5 transition-all resize-none"
                    />
                 </div>

                 <div className="p-6 rounded-3xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center group hover:border-indigo-200 transition-all cursor-pointer">
                    <Paperclip className="w-6 h-6 text-slate-300 mb-2 group-hover:text-indigo-600 transition-colors" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Attach Formal Documents</p>
                    <p className="text-[8px] text-slate-300 font-bold mt-1">PDF, DOCX, ZIP (MAX 25MB)</p>
                 </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Encrypted via Leedwey Protocol</p>
                 </div>
                 <button 
                  onClick={() => setIsComposeOpen(false)}
                  className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-3 active:scale-95"
                 >
                    <Send className="w-5 h-5" />
                    Dispatch Mail
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
