"use client";

import { Message, ChatAction } from "@/lib/chat/chat-logic";
import { User, Bot, ExternalLink, ArrowRight } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  onAction: (action: ChatAction) => void;
}

export function ChatMessage({ message, onAction }: ChatMessageProps) {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex w-full mb-6 ${isBot ? 'justify-start' : 'justify-end animate-in slide-in-from-right-4'}`}>
      <div className={`flex max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'} gap-3`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isBot ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
        }`}>
          {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
        </div>

        {/* Content */}
        <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}>
          <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
            isBot 
              ? 'bg-white border border-slate-100 text-slate-800 shadow-sm rounded-tl-none' 
              : 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 rounded-tr-none'
          }`}>
            {message.content}
          </div>

          {/* Actions (Buttons) */}
          {message.actions && message.actions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 animate-in fade-in zoom-in-95 duration-500 delay-200">
              {message.actions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => onAction(action)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all active:scale-95 cursor-pointer"
                >
                  {action.type === 'url' ? <ExternalLink className="w-3 h-3 cursor-pointer" /> : <ArrowRight className="w-3 h-3 cursor-pointer" />}
                  {action.label}
                </button>
              ))}
            </div>
          )}
          
          <span className="text-[10px] text-slate-400 mt-1 font-medium">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
}
