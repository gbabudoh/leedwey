"use client";

import { useState, useRef, useEffect } from "react";
import { Message, ChatAction, INITIAL_MESSAGES, getBotResponse } from "@/lib/chat/chat-logic";
import { ChatMessage } from "./ChatMessage";
import { 
  MessageSquare, 
  X, 
  Send, 
  Minus, 
  Bot, 
  Sparkles, 
  MoreHorizontal,
  Plus
} from "lucide-react";
import { useRouter } from "next/navigation";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string = inputText) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'text',
      content: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate Bot delay
    setTimeout(() => {
      const response = getBotResponse(text.toLowerCase());
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const handleAction = (action: ChatAction) => {
    if (action.type === 'url') {
      router.push(action.payload);
      setIsOpen(false);
    } else {
      // Simulate clicking a button as a user message
      const userMessage: Message = {
        id: Date.now().toString(),
        type: 'text',
        content: action.label,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      setTimeout(() => {
        const response = getBotResponse(action.payload);
        setMessages(prev => [...prev, response]);
        setIsTyping(false);
      }, 800);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group border border-white/10 cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-20 group-hover:opacity-40 cursor-pointer"></div>
          <MessageSquare className="w-8 h-8 relative z-10 cursor-pointer" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[400px] h-[600px] flex flex-col glass-card rounded-[2rem] overflow-hidden z-50 border border-white/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom-8 slide-in-from-right-8 duration-500">
          
          {/* Header */}
          <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white cursor-pointer" />
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-1.5">
                  Leadway AI
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Trade Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors cursor-pointer">
                <Minus className="w-4 h-4 cursor-pointer" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Banner */}
          <div className="px-5 py-2.5 bg-indigo-600/5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
               <span className="text-[11px] font-bold text-slate-600">Botonic Powered Interface</span>
            </div>
            <button className="text-[10px] font-extrabold text-indigo-600 uppercase hover:underline cursor-pointer">Learn More</button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 scroll-smooth custom-scrollbar"
          >
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} onAction={handleAction} />
            ))}
            
            {isTyping && (
              <div className="flex items-center gap-2 mb-4 animate-pulse">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-slate-400" />
                </div>
                <div className="bg-slate-50 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
              <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <Plus className="w-5 h-5 cursor-pointer" />
              </button>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400 py-2"
              />
              <button 
                onClick={() => handleSend()}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  inputText.trim() 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-100' 
                    : 'text-slate-300 scale-90 grayscale'
                }`}
              >
                <Send className="w-4 h-4 cursor-pointer" />
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-3 px-1">
               <button className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer">
                  <MoreHorizontal className="w-4 h-4 cursor-pointer" />
               </button>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Powered by Leedwey AI Node</span>
            </div>
          </div>

        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </>
  );
}
