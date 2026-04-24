"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Send, 
  Paperclip, 
  Video, 
  Phone, 
  ShieldCheck, 
  MoreVertical, 
  MessageSquare as MsgIcon,
  Globe,
  Zap
} from "lucide-react";

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: "1",
      name: "Global PrecisionTech Ltd.",
      lastMessage: "The raw material batch has been approved for production.",
      timestamp: "10:24 AM",
      unread: 2,
      verified: true,
      role: "Manufacturer"
    },
    {
      id: "2",
      name: "Skyline Electronics",
      lastMessage: "Can we adjust the milestone delivery date to next Friday?",
      timestamp: "Yesterday",
      unread: 0,
      verified: true,
      role: "Supplier"
    },
    {
      id: "3",
      name: "SwiftLogistics Global",
      lastMessage: "Your cargo is cleared and ready for the trans-pacific route.",
      timestamp: "Monday",
      unread: 0,
      verified: false,
      role: "Agent"
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex overflow-hidden animate-in fade-in duration-500">
      {/* Sidebar: Conversations */}
      <div className="w-[380px] border-r border-slate-100 flex flex-col bg-white/40 backdrop-blur-md">
        <div className="p-8 pb-4">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            Secured Transmissions
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Messages</h1>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search secure node..."
              className="w-full bg-slate-100/50 border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all font-bold placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 custom-scrollbar">
          {conversations.map((conv) => (
            <div 
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`p-5 rounded-[2rem] cursor-pointer transition-all duration-300 relative group ${
                selectedConversation === conv.id 
                ? "bg-white shadow-xl shadow-indigo-100/30 scale-[1.02]" 
                : "hover:bg-white/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="w-14 h-14 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-indigo-50 text-indigo-600 font-black">
                      {conv.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {conv.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 truncate pr-2">{conv.name}</h4>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{conv.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium truncate mb-2">{conv.lastMessage}</p>
                  <div className="flex items-center justify-between">
                     <span className="text-[8px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100/50">{conv.role}</span>
                     {conv.unread > 0 && (
                       <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-black flex items-center justify-center shadow-lg shadow-indigo-200">{conv.unread}</span>
                     )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-50 to-white relative">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white/60 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                  <AvatarFallback className="bg-indigo-600 text-white font-black">
                    {conversations.find(c => c.id === selectedConversation)?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900">
                      {conversations.find(c => c.id === selectedConversation)?.name}
                    </h3>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                       <span className="text-[8px] font-black text-emerald-700 uppercase tracking-[0.1em]">Active Node</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2 mt-0.5">
                    <Globe className="w-3 h-3" />
                    End-to-End Encrypted Trade Tunnel
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-indigo-600">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-indigo-600">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-indigo-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
               <div className="flex flex-col items-center">
                  <span className="px-5 py-2 bg-slate-100/50 backdrop-blur-sm rounded-full text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Tuesday, Oct 24</span>
               </div>

               {/* Other Message */}
               <div className="flex items-start gap-4 max-w-[70%] animate-in slide-in-from-left-4 duration-500">
                  <Avatar className="w-10 h-10 shadow-sm border-2 border-white">
                     <AvatarFallback className="bg-slate-100 text-slate-400 text-xs font-black">G</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1.5">
                     <div className="glass-card px-6 py-4 rounded-[2rem] rounded-tl-none group">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">
                           Hello! We have completed the physical audit of the new production line. The report is attached below for your review.
                        </p>
                     </div>
                     <span className="text-[9px] font-black text-slate-300 ml-4 uppercase tracking-widest">10:24 AM</span>
                  </div>
               </div>

               {/* Self Message */}
               <div className="flex items-start gap-4 max-w-[70%] ml-auto flex-row-reverse animate-in slide-in-from-right-4 duration-500">
                  <div className="space-y-1.5 flex flex-col items-end">
                     <div className="bg-indigo-600 px-6 py-4 rounded-[2rem] rounded-tr-none shadow-xl shadow-indigo-200 text-white">
                        <p className="text-sm leading-relaxed font-bold">
                           That is great news. Does this include the ISO 27001 certification compliance check for the server room?
                        </p>
                     </div>
                     <span className="text-[9px] font-black text-slate-300 mr-4 uppercase tracking-widest">Delivered</span>
                  </div>
               </div>

               {/* Other Message with Audit File */}
               <div className="flex items-start gap-4 max-w-[70%] animate-in slide-in-from-left-4 duration-500">
                  <Avatar className="w-10 h-10 shadow-sm border-2 border-white">
                     <AvatarFallback className="bg-slate-100 text-slate-400 text-xs font-black">G</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1.5">
                     <div className="glass-card px-6 py-4 rounded-[2rem] rounded-tl-none">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">
                           Yes, the ISO 27001 compliance is fully documented in Section 4.2 of the report. The raw material batch has been approved for production.
                        </p>
                     </div>
                     <div className="mt-4 flex items-center gap-4 p-5 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-indigo-100/10 group cursor-pointer hover:border-indigo-200 transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                           <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-xs font-black text-slate-900">Audit_Report_V2.pdf</p>
                           <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">4.2 MB • Verifiable Cryptographic Document</p>
                        </div>
                     </div>
                     <span className="text-[9px] font-black text-slate-300 ml-4 uppercase tracking-widest">10:45 AM</span>
                  </div>
               </div>
            </div>

            {/* Input Area */}
            <div className="p-8 bg-white/60 backdrop-blur-md border-t border-slate-100">
               <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-[2rem] px-5 py-2.5 shadow-sm focus-within:ring-4 focus-within:ring-indigo-500/5 focus-within:border-indigo-600 transition-all">
                  <button className="p-3 text-slate-400 hover:text-indigo-600 transition-all">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Message verified node securely..."
                    className="flex-1 bg-transparent border-none outline-none py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
                  >
                    <Send className="w-4 h-4" />
                  </button>
               </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
             <div className="w-24 h-24 rounded-[3rem] bg-indigo-50 flex items-center justify-center mb-8 shadow-inner">
                <MsgIcon className="w-10 h-10 text-indigo-600" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Secure Communications</h3>
             <p className="text-slate-500 max-w-sm font-bold text-sm">Select a verified node to initiate an end-to-end encrypted trade dialogue.</p>
          </div>
        )}
      </div>
    </div>
  );
}
