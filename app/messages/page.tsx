"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/layout/navbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Paperclip, Video, Phone } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function MessagesPage() {
  const { data: session } = useSession();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  // Mock conversations - replace with actual data
  const conversations = [
    {
      id: "1",
      name: "SteelWorks Inc.",
      lastMessage: "Thank you for your interest in our products",
      timestamp: new Date(),
      unread: 2,
      avatar: null,
    },
    {
      id: "2",
      name: "TechElectronics",
      lastMessage: "We can provide a quote for 500 units",
      timestamp: new Date(Date.now() - 3600000),
      unread: 0,
      avatar: null,
    },
  ];

  const messages = selectedConversation
    ? [
        {
          id: "1",
          senderId: "other",
          content: "Hello, I'm interested in your products",
          timestamp: new Date(Date.now() - 7200000),
        },
        {
          id: "2",
          senderId: session?.user?.id || "me",
          content: "Thank you for your interest! How can I help you?",
          timestamp: new Date(Date.now() - 3600000),
        },
        {
          id: "3",
          senderId: "other",
          content: "I'd like to know more about pricing and minimum order quantities",
          timestamp: new Date(Date.now() - 1800000),
        },
      ]
    : [];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // TODO: Send message via Socket.io
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#EDF0F3]">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
            <p className="text-gray-600">Communicate with buyers and manufacturers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
            {/* Conversations List */}
            <Card className="lg:col-span-1 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-[#EDF0F3]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b border-[#EDF0F3] cursor-pointer hover:bg-[#EDF0F3] transition-colors ${
                      selectedConversation === conversation.id ? "bg-[#F3E5D7]/30" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={conversation.avatar || undefined} />
                        <AvatarFallback>
                          {conversation.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {conversation.name}
                          </h3>
                          {conversation.unread > 0 && (
                            <span className="bg-[#F49B41] text-white text-xs rounded-full px-2 py-0.5">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {formatDate(conversation.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Messages Area */}
            <Card className="lg:col-span-2 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Header */}
                  <div className="p-4 border-b border-[#EDF0F3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {conversations.find((c) => c.id === selectedConversation)?.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {conversations.find((c) => c.id === selectedConversation)?.name}
                        </h3>
                        <p className="text-xs text-gray-500">Online</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => {
                      const isOwn = msg.senderId === session?.user?.id;
                      return (
                        <div
                          key={msg.id}
                          className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg px-4 py-2 ${
                              isOwn
                                ? "bg-[#F49B41] text-white"
                                : "bg-[#EDF0F3] text-gray-900"
                            }`}
                          >
                            <p>{msg.content}</p>
                            <p
                              className={`text-xs mt-1 ${
                                isOwn ? "text-white/70" : "text-gray-500"
                              }`}
                            >
                              {formatDate(msg.timestamp)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-[#EDF0F3]">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") handleSendMessage();
                        }}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p className="text-lg mb-2">Select a conversation</p>
                    <p className="text-sm">Choose a conversation from the list to start messaging</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

