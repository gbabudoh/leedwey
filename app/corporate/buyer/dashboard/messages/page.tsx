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
  UserPlus,
  Globe,
  Boxes
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function CorporateMessagesPage() {
  const [activeTab, setActiveTab] = useState<"chat" | "mail">("chat");
  const [selectedChat, setSelectedChat] = useState("CorporateNode");
  const [selectedMailId, setSelectedMailId] = useState<string | null>("1");
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [composeData, setComposeData] = useState({ to: "", subject: "" });

  const chats = [
    { id: "CorporateNode", name: "Global Enterprise Hub", lastMsg: "Corporate manifest for CP-1102 is verified.", time: "4m", unread: 3, avatar: "C", status: "online" },
    { id: "Logistics", name: "Enterprise Logistics", lastMsg: "Bulk routing initiated for Q4 inventory.", time: "1h", unread: 0, avatar: "L", status: "online" },
  ];

  const mails = [
    {
      id: "1",
      sender: "Enterprise Audit Node",
      subject: "CP-1102: Corporate Sourcing Manifest & Approval Schedule",
      preview: "Following your enterprise request, we have finalized the approval schedule...",
      content: "Dear Corporate Partner,\n\nWe have finalized the Corporate Sourcing Manifest for Order CP-1102. \n\nTotal Volume: 48,500 Units (Industrial Controllers)\nApproval ID: CP-99021-X\nEscrow Node: Enterprise Secure\n\nPlease find the attached Corporate Audit Trail and Proforma Invoice for your records. The departmental approval is now required for the first escrow release.",
      timestamp: "09:15 AM",
      category: "quote",
      read: false,
      starred: true,
      hasAttachment: true
    },
    {
      id: "2",
      sender: "Leedwey Logistics Node",
      subject: "Port Clearance: Container CN-88102 Status Update",
      preview: "Your bulk shipment of Industrial Motors has cleared regional customs...",
      content: "Logistics Update: Container CN-88102 has successfully cleared regional customs. Estimated arrival at your designated warehouse node is in 48 hours. Please ensure your receiving team is notified.",
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
      {/* Wholesaler Comms Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
           <div className="p-4 bg-slate-900 rounded-[1.5rem] shadow-xl shadow-slate-200">
              <Boxes className="w-6 h-6 text-indigo-400" />
           </div>
           <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Enterprise Communications</h1>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5 flex items-center gap-2">
                 <Globe className="w-3.5 h-3.5" />
                 Global Enterprise Node: EN-8820
              </p>
           </div>
        </div>
        
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
           <button 
             onClick={() => setActiveTab("chat")}
             className={cn(
               "px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 cursor-pointer",
               activeTab === "chat" ? "bg-slate-900 text-white shadow-lg shadow-slate-200" : "text-slate-400 hover:text-slate-600"
             )}
           >
              <MessageSquare className="w-4 h-4 cursor-pointer" />
              Secure Chat
           </button>
           <button 
             onClick={() => setActiveTab("mail")}
             className={cn(
               "px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 cursor-pointer",
               activeTab === "mail" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-slate-400 hover:text-slate-600"
             )}
           >
              <Mail className="w-4 h-4 cursor-pointer" />
              Official Mail
           </button>
        </div>
      </div>

      <div className="h-full glass-card rounded-[3.5rem] border border-slate-100 overflow-hidden flex shadow-2xl shadow-slate-200/50">
        
        {/* Sidebar */}
        <div className="w-96 border-r border-slate-50 flex flex-col bg-slate-50/30">
          <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900">{activeTab === "chat" ? "Trade Nodes" : "Archive"}</h2>
              <button className="p-2.5 bg-white rounded-xl shadow-sm hover:bg-slate-50 transition-all border border-slate-100 cursor-pointer">
                <Search className="w-5 h-5 text-slate-400 cursor-pointer" />
              </button>
            </div>

            {activeTab === "mail" && (
              <button 
                onClick={() => {
                  setComposeData({ to: "", subject: "" });
                  setIsComposeOpen(true);
                }}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-slate-200 flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all active:scale-95 cursor-pointer"
              >
                <Plus className="w-4 h-4 cursor-pointer" />
                Draft Formal Correspondence
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-8">
            {activeTab === "chat" ? (
              chats.map((chat) => (
                <button 
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={cn(
                    "w-full p-6 rounded-[2.5rem] flex items-center gap-5 transition-all text-left group cursor-pointer",
                    selectedChat === chat.id ? "bg-white shadow-2xl shadow-slate-200 border border-slate-100" : "hover:bg-white/50"
                  )}
                >
                  <div className="relative cursor-pointer">
                     <div className="w-16 h-16 rounded-[2rem] bg-slate-900 flex items-center justify-center text-white text-2xl font-black shadow-lg cursor-pointer">
                        {chat.avatar}
                     </div>
                     {chat.status === "online" && (
                       <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-white rounded-full cursor-pointer"></div>
                     )}
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer">
                     <div className="flex items-center justify-between mb-1.5 cursor-pointer">
                        <p className="font-black text-slate-900 truncate cursor-pointer text-lg tracking-tight">{chat.name}</p>
                        <span className="text-[10px] font-bold text-slate-400 cursor-pointer">{chat.time}</span>
                     </div>
                     <p className="text-xs text-slate-400 font-bold truncate group-hover:text-indigo-600 transition-colors cursor-pointer">{chat.lastMsg}</p>
                  </div>
                </button>
              ))
            ) : (
              mails.map((mail) => (
                <button 
                  key={mail.id}
                  onClick={() => setSelectedMailId(mail.id)}
                  className={cn(
                    "w-full p-6 rounded-[2.5rem] flex flex-col gap-3 transition-all text-left group relative cursor-pointer",
                    selectedMailId === mail.id ? "bg-white shadow-2xl shadow-slate-200 border border-slate-100" : "hover:bg-white/50"
                  )}
                >
                  <div className="flex items-center justify-between cursor-pointer">
                     <div className="flex items-center gap-3 cursor-pointer">
                        {!mail.read && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_12px] shadow-indigo-600/50 cursor-pointer"></div>}
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer">{mail.sender}</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-300 cursor-pointer">{mail.timestamp}</span>
                  </div>
                  <p className={cn(
                    "text-base font-black text-slate-900 line-clamp-1 cursor-pointer tracking-tight",
                    selectedMailId === mail.id ? "text-indigo-600" : "group-hover:text-indigo-600"
                  )}>{mail.subject}</p>
                  <p className="text-xs text-slate-400 font-bold line-clamp-2 leading-relaxed cursor-pointer">{mail.preview}</p>
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
               <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-10">
                  <div className="flex items-center gap-5">
                     <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black shadow-xl">
                        {selectedChat.charAt(0)}
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
                           {chats.find(c => c.id === selectedChat)?.name || selectedChat}
                           <ShieldCheck className="w-5 h-5 text-indigo-600" />
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Encrypted Enterprise Node</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="p-3.5 bg-slate-50 rounded-2xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100 cursor-pointer">
                        <Phone className="w-5 h-5 cursor-pointer" />
                     </button>
                     <button className="p-3.5 bg-slate-50 rounded-2xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100 cursor-pointer">
                        <Video className="w-5 h-5 cursor-pointer" />
                     </button>
                     <div className="w-px h-8 bg-slate-100 mx-2"></div>
                     <button className="p-3.5 bg-slate-50 rounded-2xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer">
                        <MoreVertical className="w-5 h-5 cursor-pointer" />
                     </button>
                  </div>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-12 space-y-10 bg-slate-50/10">
                  <div className="flex justify-center">
                     <span className="px-5 py-2 bg-white border border-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">Audit Log: Oct 23, 2026</span>
                  </div>

                  <div className="flex items-start gap-5 max-w-3xl">
                     <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-black flex-shrink-0 border border-slate-200">S</div>
                     <div className="space-y-3">
                        <div className="p-8 bg-slate-100/50 rounded-[2.5rem] rounded-tl-lg border border-white text-base text-slate-700 font-bold leading-relaxed shadow-sm">
                           Wholesale manifest WS-1102 has been successfully synchronized. We have reserved capacity for 5,000 units. Container CN-99021-X is on standby for the first batch.
                        </div>
                        <p className="text-[10px] font-black text-slate-400 ml-4 flex items-center gap-2 uppercase tracking-widest">
                           <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                           Node A-2 • Verified Trade Data
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-row-reverse items-start gap-5 max-w-3xl ml-auto text-right">
                     <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-sm font-black flex-shrink-0 shadow-2xl shadow-slate-200">ME</div>
                     <div className="space-y-3">
                        <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] rounded-tr-lg shadow-2xl shadow-slate-200 text-base font-bold leading-relaxed">
                           Excellent. Our logistics node will trigger the 30% milestone release as soon as the Bill of Lading is uploaded to the secure document vault.
                        </div>
                        <p className="text-[10px] font-black text-slate-400 mr-4 uppercase tracking-widest">Node WH-9920 • Dispatched</p>
                     </div>
                  </div>
               </div>

               {/* Input Area */}
               <div className="p-10 bg-white border-t border-slate-50">
                  <div className="flex items-center gap-5 bg-slate-50 p-4 pl-8 rounded-[2.5rem] border-2 border-transparent focus-within:bg-white focus-within:border-indigo-600/10 focus-within:ring-8 focus-within:ring-indigo-600/5 transition-all">
                     <input 
                       type="text" 
                       placeholder="Type a secure trade message..." 
                       className="flex-1 bg-transparent border-none outline-none text-base font-black text-slate-900 placeholder:text-slate-400"
                     />
                     <button className="p-4 text-slate-400 hover:text-indigo-600 transition-all cursor-pointer">
                        <Paperclip className="w-6 h-6 cursor-pointer" />
                     </button>
                     <button className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 cursor-pointer">
                        <Send className="w-6 h-6 cursor-pointer" />
                     </button>
                  </div>
               </div>
             </>
          ) : (
             <div className="flex-1 flex flex-col h-full bg-white">
                {selectedMail ? (
                   <>
                      <div className="px-12 py-10 border-b border-slate-50 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10 cursor-pointer">
                         <div className="flex items-center gap-5 cursor-pointer">
                            <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 hover:text-amber-500 transition-all cursor-pointer border border-transparent hover:border-slate-100">
                               <Star className={cn("w-6 h-6 cursor-pointer", selectedMail.starred && "fill-amber-500 text-amber-500")} />
                            </button>
                            <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 hover:text-indigo-600 transition-all cursor-pointer border border-transparent hover:border-slate-100">
                               <Archive className="w-6 h-6 cursor-pointer" />
                            </button>
                            <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 hover:text-rose-500 transition-all cursor-pointer border border-transparent hover:border-slate-100">
                               <Trash2 className="w-6 h-6 cursor-pointer" />
                            </button>
                         </div>
                         <div className="flex items-center gap-4 cursor-pointer">
                            <button className="px-6 py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all cursor-pointer">
                               Mark Unread
                            </button>
                            <button className="p-3 rounded-2xl hover:bg-slate-50 text-slate-400 transition-all cursor-pointer border border-transparent hover:border-slate-100">
                               <MoreVertical className="w-6 h-6 cursor-pointer" />
                            </button>
                         </div>
                      </div>

                      <div className="flex-1 overflow-y-auto p-16">
                         <div className="max-w-4xl mx-auto space-y-16">
                            <div>
                               <h1 className="text-5xl font-black text-slate-900 leading-tight mb-10 tracking-tighter">{selectedMail.subject}</h1>
                               <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-6">
                                     <div className="w-16 h-16 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center text-2xl font-black shadow-2xl">
                                        {selectedMail.sender.charAt(0)}
                                     </div>
                                     <div>
                                        <div className="flex items-center gap-3">
                                           <h3 className="text-xl font-black text-slate-900">{selectedMail.sender}</h3>
                                           <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-[0.2em] border border-emerald-100">Tier-1 Node</span>
                                        </div>
                                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">via Leedwey Enterprise Protocol</p>
                                     </div>
                                  </div>
                                  <div className="text-right">
                                     <p className="text-sm font-black text-slate-900 tracking-tight">{selectedMail.timestamp}</p>
                                     <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Audit Reference: 992-X</p>
                                  </div>
                               </div>
                            </div>

                            <div className="whitespace-pre-wrap text-xl text-slate-600 font-bold leading-relaxed border-l-[6px] border-slate-50 pl-12 py-2">
                               {selectedMail.content}
                            </div>

                             {selectedMail.hasAttachment && (
                               <div className="p-10 rounded-[3.5rem] border-2 border-indigo-50 bg-slate-50/50 flex items-center justify-between group hover:border-indigo-200 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:shadow-indigo-50">
                                  <div className="flex items-center gap-6 cursor-pointer">
                                     <div className="w-20 h-20 rounded-[2.5rem] bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-100 cursor-pointer group-hover:scale-105 transition-transform">
                                        <FileText className="w-10 h-10 cursor-pointer" />
                                     </div>
                                     <div className="cursor-pointer">
                                        <h4 className="text-lg font-black text-slate-900 cursor-pointer group-hover:text-indigo-600 transition-colors">Bulk_Manifest_WS1102.pdf</h4>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest cursor-pointer mt-1 flex items-center gap-2">
                                           <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                                           12.8 MB • Encrypted Payload
                                        </p>
                                     </div>
                                  </div>
                                  <button className="p-5 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm cursor-pointer group-hover:bg-indigo-50">
                                     <Download className="w-8 h-8 cursor-pointer" />
                                  </button>
                               </div>
                             )}

                             <div className="pt-16 border-t border-slate-100 flex flex-wrap gap-6">
                               <button className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 flex items-center gap-4 active:scale-95 cursor-pointer uppercase tracking-widest text-xs">
                                  <CheckCircle2 className="w-6 h-6 text-indigo-400 cursor-pointer" /> Authorize Release
                               </button>
                               <button 
                                onClick={() => {
                                  setComposeData({ 
                                    to: selectedMail.sender, 
                                    subject: `Re: ${selectedMail.subject}` 
                                  });
                                  setIsComposeOpen(true);
                                }}
                                className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-4 active:scale-95 cursor-pointer uppercase tracking-widest text-xs"
                               >
                                  <Send className="w-6 h-6 text-slate-400 cursor-pointer" /> Counter Inquiry
                               </button>
                               <button className="px-10 py-5 bg-rose-50 text-rose-600 font-black rounded-2xl hover:bg-rose-100 transition-all border-2 border-rose-100 flex items-center gap-4 active:scale-95 cursor-pointer uppercase tracking-widest text-xs">
                                  <AlertCircle className="w-6 h-6 cursor-pointer" /> Flag Discrepancy
                               </button>
                            </div>
                         </div>
                      </div>
                   </>
                ) : (
                   <div className="flex-1 flex flex-col items-center justify-center p-20 text-center bg-slate-50/20">
                      <div className="w-32 h-32 rounded-[3rem] bg-white border border-slate-100 flex items-center justify-center mb-10 shadow-sm animate-pulse">
                         <Inbox className="w-14 h-14 text-slate-100" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Select a trade dialogue</h3>
                      <p className="text-slate-400 max-w-sm font-bold text-base leading-relaxed">Select an encrypted formal correspondence from the node archive to view trade documents.</p>
                   </div>
                )}
             </div>
          )}
        </div>
      </div>

      {/* Compose Modal */}
      {isComposeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-24 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
           <div className="w-full max-w-3xl bg-white rounded-[4rem] shadow-2xl shadow-slate-900/40 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-slate-100">
              {/* Modal Header */}
              <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Draft Formal Correspondence</h3>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-widest mt-1 flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-indigo-600" />
                        Encrypted Enterprise Node Protocol
                     </p>
                 </div>
                 <button 
                  onClick={() => setIsComposeOpen(false)}
                  className="p-4 bg-white hover:bg-slate-100 rounded-2xl transition-all border border-slate-100 active:scale-90 shadow-sm"
                 >
                    <X className="w-6 h-6 text-slate-400" />
                 </button>
              </div>

              {/* Modal Form */}
              <div className="p-10 space-y-8 overflow-y-auto flex-1">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Factory Node Target</label>
                    <div className="relative group">
                       <UserPlus className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                       <select 
                        value={composeData.to}
                        onChange={(e) => setComposeData({ ...composeData, to: e.target.value })}
                        className="w-full pl-16 pr-8 py-5 bg-slate-50 border-2 border-transparent rounded-3xl text-sm font-black focus:outline-none focus:bg-white focus:border-indigo-600/20 focus:ring-8 focus:ring-indigo-600/5 transition-all appearance-none cursor-pointer"
                       >
                          <option value="">Select Tier-1 Factory Node...</option>
                          <option value="SinoPrecision Ltd.">SinoPrecision Shenzhen</option>
                          <option value="VisionCore Systems">VisionCore Systems</option>
                          <option value="MotorWave Hub">MotorWave Dynamics</option>
                       </select>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Subject Reference</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Formal Inquiry: WS-1102 Bulk Manifest Revision"
                      value={composeData.subject}
                      onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-3xl text-sm font-black focus:outline-none focus:bg-white focus:border-indigo-600/20 focus:ring-8 focus:ring-indigo-600/5 transition-all"
                    />
                 </div>

                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Trade Dialogue Content</label>
                    <textarea 
                      placeholder="Compose your formal trade message..."
                      rows={6}
                      className="w-full px-10 py-8 bg-slate-50 border-2 border-transparent rounded-[3rem] text-base font-bold leading-relaxed focus:outline-none focus:bg-white focus:border-indigo-600/20 focus:ring-8 focus:ring-indigo-600/5 transition-all resize-none"
                    />
                 </div>

                 <div className="p-10 rounded-[3rem] border-4 border-dashed border-slate-50 flex flex-col items-center justify-center text-center group hover:border-indigo-200 transition-all cursor-pointer bg-slate-50/30">
                    <Paperclip className="w-8 h-8 text-slate-300 mb-3 group-hover:text-indigo-600 transition-colors" />
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Attach Corporate Trade Documents</p>
                     <p className="text-[8px] text-slate-300 font-black mt-1">PDF, CP_INV, AUDIT_TRAIL (MAX 50MB)</p>
                 </div>
              </div>

              {/* Modal Footer */}
              <div className="p-10 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">AES-256 Trade Grade Encryption</p>
                 </div>
                 <button 
                  onClick={() => setIsComposeOpen(false)}
                  className="px-14 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 flex items-center gap-4 active:scale-95 uppercase tracking-widest text-xs"
                 >
                    <Send className="w-5 h-5" />
                    Dispatch Secure Correspondence
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
