"use client";

import { useState } from "react";
import { 
  Video, 
  Camera, 
  Mic, 
  Users, 
  Settings, 
  Plus, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Power,
  Monitor,
  Smartphone,
  ChevronRight,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function FactoryToursPage() {
  const [isActive, setIsActive] = useState(false);

  const upcomingTours = [
    { id: "T-102", buyer: "Global Logistics Corp", time: "14:30 GMT", date: "Today", status: "PENDING" },
    { id: "T-105", buyer: "Precision Auto Parts", time: "09:00 GMT", date: "Tomorrow", status: "CONFIRMED" },
  ];

  const cameraNodes = [
    { name: "Assembly Line A", status: "Online", resolution: "4K", bitrate: "12Mbps" },
    { name: "QC Station 1", status: "Online", resolution: "1080p", bitrate: "8Mbps" },
    { name: "Warehouse West", status: "Standby", resolution: "1080p", bitrate: "0Mbps" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
            <Video className="w-3.5 h-3.5 text-indigo-600" />
            Visual Trust Protocol
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Factory Tours</h1>
          <p className="text-slate-500 font-medium">Manage your live factory feeds and secure virtual inspections.</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsActive(!isActive)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-lg",
              isActive 
                ? "bg-red-500 text-white shadow-red-200 hover:bg-red-600" 
                : "bg-emerald-500 text-white shadow-emerald-200 hover:bg-emerald-600"
            )}
          >
            <Power className="w-4 h-4" />
            {isActive ? "Terminate Node" : "Go Live"}
          </button>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Feed Monitor */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-dark aspect-video rounded-[3rem] relative overflow-hidden flex flex-col items-center justify-center text-center p-12 group border border-white/5 shadow-2xl">
            {!isActive ? (
              <>
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-700">
                  <Camera className="w-10 h-10 text-slate-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Feed Offline</h3>
                <p className="text-slate-400 max-w-sm">Secure your manufacturing node and toggle &apos;Go Live&apos; to initiate encrypted transmission.</p>
              </>
            ) : (
              <div className="absolute inset-0 bg-slate-950 flex flex-col">
                <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
                   <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                   <span className="text-xs font-black text-white uppercase tracking-widest">Live Node: Alpha-1</span>
                </div>
                <div className="absolute top-8 right-8 flex items-center gap-3 z-10">
                   <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">02:45:12</span>
                </div>
                
                {/* Simulated Grid for UI beauty */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1 p-1 bg-slate-900">
                  <div className="bg-slate-800 flex items-center justify-center relative">
                    <Monitor className="w-12 h-12 text-slate-700" />
                    <span className="absolute bottom-4 left-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Main Assembly</span>
                  </div>
                  <div className="bg-slate-800 flex items-center justify-center relative">
                    <Smartphone className="w-12 h-12 text-slate-700" />
                    <span className="absolute bottom-4 left-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Inspector Cam</span>
                  </div>
                  <div className="bg-slate-800 flex items-center justify-center relative">
                    <Monitor className="w-12 h-12 text-slate-700" />
                    <span className="absolute bottom-4 left-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Loading Dock</span>
                  </div>
                  <div className="bg-slate-800 flex items-center justify-center relative">
                    <Monitor className="w-12 h-12 text-slate-700" />
                    <span className="absolute bottom-4 left-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">QC Lab</span>
                  </div>
                </div>

                {/* Control Overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 shadow-2xl">
                  <button className="p-4 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg"><Video className="w-6 h-6" /></button>
                  <button className="p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all"><Mic className="w-6 h-6" /></button>
                  <button className="p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all"><Users className="w-6 h-6" /></button>
                  <div className="w-px h-8 bg-white/10 mx-2"></div>
                  <button className="p-4 rounded-2xl bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"><Power className="w-6 h-6" /></button>
                </div>
              </div>
            )}
          </div>

          {/* Camera Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cameraNodes.map((node) => (
              <div key={node.name} className="glass-card p-6 rounded-3xl group hover:border-indigo-100 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    node.status === "Online" ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400"
                  )}>
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "text-[9px] font-black uppercase tracking-widest",
                    node.status === "Online" ? "text-emerald-500" : "text-slate-400"
                  )}>{node.status}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{node.name}</h4>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <span>{node.resolution}</span>
                  <span>{node.bitrate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-indigo-600/10 transition-all duration-700"></div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-indigo-600" /> Scheduled Inspections
            </h3>
            
            <div className="space-y-4">
              {upcomingTours.map((tour) => (
                <div key={tour.id} className="p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer group/item">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order #{tour.id}</span>
                    <span className={cn(
                      "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md",
                      tour.status === "CONFIRMED" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                    )}>{tour.status}</span>
                  </div>
                  <p className="font-bold text-slate-900 mb-1 group-hover/item:text-indigo-600 transition-colors">{tour.buyer}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{tour.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {tour.time}</span>
                  </div>
                </div>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Schedule Tour
              </button>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">Security Protocol</h3>
            <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
              All factory tours are point-to-point encrypted via our Secure Trade Node. Recording is blocked at the hardware level for buyer privacy.
            </p>
            <div className="space-y-3">
              {[
                "End-to-End Encryption",
                "No Data Persistence",
                "Mobile Cam Handover",
                "Node Integrity Verified"
              ].map((policy) => (
                <div key={policy} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-emerald-500" />
                  {policy}
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 bg-white/10 hover:bg-white/20 text-white font-extrabold rounded-2xl transition-all border border-white/10 flex items-center justify-center gap-2 text-sm">
              Node Analytics <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
