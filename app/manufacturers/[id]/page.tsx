"use client";

import { Navbar } from "@/components/layout/navbar";
import { ShieldCheck, CheckCircle2, Globe, Building2, Star, MapPin, Users, Zap, MessageSquare, Award, BarChart3, Factory, Video, Phone, Camera, ArrowRight, ShieldAlert, Cpu, Box, HardDrive, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ManufacturerProfilePage() {
  const [isOnline, setIsOnline] = useState(true);
  const [isQuoting, setIsQuoting] = useState(false);
  const [quoteStep, setQuoteStep] = useState<"idle" | "form" | "sending" | "success">("idle");
  const [isCalling, setIsCalling] = useState<"video" | "voice" | null>(null);
  const [tourRequested, setTourRequested] = useState(false);

  const handleCall = (type: "video" | "voice") => {
    setIsCalling(type);
    setTimeout(() => {
      setIsCalling(null);
      alert(`${type.charAt(0).toUpperCase() + type.slice(1)} call connection failed: Secure Node Busy.`);
    }, 3000);
  };

  const handleQuoteRequest = () => {
    setIsQuoting(true);
    setQuoteStep("form");
  };

  const submitQuote = () => {
    setQuoteStep("sending");
    setTimeout(() => {
      setQuoteStep("success");
    }, 2000);
  };

  const handleTourRequest = () => {
    setTourRequested(true);
    setTimeout(() => setTourRequested(false), 5000);
  };

  const manufacturer = {
    name: "PrecisionTech Manufacturing Ltd.",
    status: "Physically Audited",
    location: "Shenzhen, High-Tech Industrial Zone",
    years: 12,
    rating: 4.9,
    capacity: "500,000 Units / Month",
    staff: "1,200+ Employees",
    specialization: "Aerospace & Automotive Components",
    verified: true,
    certifications: [
      { name: "ISO 9001", issued: "2010", status: "Active", icon: <ShieldCheck className="w-5 h-5 text-indigo-400" /> },
      { name: "ISO 14001", issued: "2015", status: "Active", icon: <Globe className="w-5 h-5 text-emerald-400" /> },
      { name: "IATF 16949", issued: "2018", status: "Active", icon: <Award className="w-5 h-5 text-amber-400" /> }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Quote Terminal Overlay */}
      {isQuoting && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-2xl flex items-center justify-center p-6">
           <div className="w-full max-w-2xl bg-white rounded-[3rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
              
              {quoteStep === "form" && (
                <div className="space-y-8 relative z-10">
                   <div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Quick Quote Protocol</h2>
                      <p className="text-slate-500 font-medium">Request secure pricing for {manufacturer.name}</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Target Quantity</label>
                         <div className="relative">
                            <Box className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                            <input 
                              type="number" 
                              placeholder="e.g. 5000"
                              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                            />
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Required By</label>
                         <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                            <input 
                              type="date" 
                              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                            />
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Technical Specifications / Custom Requirements</label>
                      <textarea 
                        rows={4}
                        placeholder="Detail your aerospace grade requirements, material specs, or custom tolerances..."
                        className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[2rem] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                      ></textarea>
                   </div>

                   <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={submitQuote}
                        className="flex-1 py-5 bg-slate-900 text-white font-extrabold rounded-[2rem] hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 cursor-pointer"
                      >
                         <Zap className="w-5 h-5 text-indigo-400" /> Transmit Quote Request
                      </button>
                      <button 
                        onClick={() => setIsQuoting(false)}
                        className="px-10 py-5 bg-white border border-slate-200 text-slate-400 font-extrabold rounded-[2rem] hover:bg-slate-50 transition-all text-[10px] uppercase tracking-widest"
                      >
                         Cancel
                      </button>
                   </div>
                </div>
              )}

              {quoteStep === "sending" && (
                <div className="text-center py-16">
                   <div className="w-24 h-24 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-8 relative">
                      <div className="absolute inset-0 rounded-[2rem] border-2 border-indigo-500 animate-ping"></div>
                      <Globe className="w-10 h-10 text-indigo-500" />
                   </div>
                   <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Transmitting Data...</h2>
                   <p className="text-slate-500 font-medium">Encrypting quote specifications for secure factory node.</p>
                </div>
              )}

              {quoteStep === "success" && (
                <div className="text-center py-16 animate-in zoom-in duration-500">
                   <div className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-100">
                      <CheckCircle2 className="w-12 h-12 text-white" />
                   </div>
                   <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Protocol Success</h2>
                   <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">Your quote request has been recorded. Reference: <span className="font-mono font-bold text-slate-900">RFQ-992-PX</span>. The manufacturer will respond through your secure message terminal.</p>
                   <button 
                    onClick={() => { setIsQuoting(false); setQuoteStep("idle"); }}
                    className="mt-12 px-12 py-4 bg-slate-900 text-white font-extrabold rounded-2xl hover:bg-slate-800 transition-all shadow-xl"
                   >
                     Close Terminal
                   </button>
                </div>
              )}
           </div>
        </div>
      )}

      {/* Calling Overlay */}
      {isCalling && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8">
           <div className="w-40 h-40 rounded-[4rem] bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-12 relative">
              <div className="absolute inset-0 rounded-[4rem] border-2 border-indigo-500 animate-ping"></div>
              <div className="absolute inset-4 rounded-[3.5rem] border border-indigo-400/30 animate-pulse"></div>
              {isCalling === "video" ? <Video className="w-16 h-16 text-indigo-400" /> : <Phone className="w-16 h-16 text-indigo-400" />}
           </div>
           <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">Connecting Secure Node...</h2>
           <p className="text-slate-400 font-medium mb-16 max-w-sm text-center leading-relaxed">Establishing encrypted {isCalling} channel to the {manufacturer.name} manufacturing terminal.</p>
           <button 
            onClick={() => setIsCalling(null)}
            className="px-16 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-[2rem] transition-all border border-white/10 cursor-pointer shadow-2xl backdrop-blur-md"
           >
             Cancel Connection
           </button>
        </div>
      )}
      
      {/* Dynamic Hero Header */}
      <section className="pt-32 pb-32 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] -mr-96 -mt-96 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
               <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-[3.5rem] bg-white border border-slate-100 flex items-center justify-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative group">
                  <Building2 className="w-16 h-16 lg:w-24 lg:h-24 text-indigo-600 transition-transform group-hover:scale-110 duration-500" />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 border-4 border-white">
                     <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
               </div>
               <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                     <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
                        <ShieldCheck className="w-4 h-4 text-indigo-500" />
                        <span className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-widest">{manufacturer.status}</span>
                     </div>
                     <button 
                        onClick={() => setIsOnline(!isOnline)}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-sm transition-all cursor-pointer ${
                           isOnline 
                           ? "bg-white border-emerald-100 text-emerald-600" 
                           : "bg-slate-50 border-slate-200 text-slate-400"
                        }`}
                     >
                        <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`}></div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest">{isOnline ? "Online" : "Offline"}</span>
                     </button>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">{manufacturer.name}</h1>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-400 font-bold text-sm">
                     <div className="flex items-center gap-2.5">
                        <MapPin className="w-5 h-5 text-slate-300" />
                        {manufacturer.location}
                     </div>
                     <div className="flex items-center gap-2.5">
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                        <span className="text-slate-900">{manufacturer.rating} Node Rating</span>
                     </div>
                     <div className="flex items-center gap-2.5">
                        <Award className="w-5 h-5 text-indigo-400" />
                        {manufacturer.years} Years Experience
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-[380px] p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col gap-4">
               <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => isOnline ? handleCall("video") : alert("Node offline. Request queued.")}
                    className={`py-4 rounded-2xl font-extrabold text-[9px] uppercase tracking-widest flex flex-col items-center justify-center gap-2 transition-all cursor-pointer border ${
                     isOnline 
                     ? "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100" 
                     : "bg-white border-slate-100 text-slate-400 hover:bg-slate-50"
                  }`}>
                     <Video className="w-5 h-5" />
                     {isOnline ? "Video Call" : "Request Video"}
                  </button>
                  <button 
                    onClick={() => isOnline ? handleCall("voice") : alert("Node offline. Request queued.")}
                    className={`py-4 rounded-2xl font-extrabold text-[9px] uppercase tracking-widest flex flex-col items-center justify-center gap-2 transition-all cursor-pointer border ${
                     isOnline 
                     ? "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-100" 
                     : "bg-white border-slate-100 text-slate-400 hover:bg-slate-50"
                  }`}>
                     <Phone className="w-5 h-5" />
                     {isOnline ? "Voice Call" : "Request Voice"}
                  </button>
               </div>
               
               <button 
                  onClick={handleTourRequest}
                  disabled={tourRequested}
                  className={`w-full py-4 font-extrabold text-[10px] uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3 cursor-pointer group shadow-xl ${
                  tourRequested 
                  ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200 border-none"
               }`}>
                  {tourRequested ? (
                     <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-in zoom-in duration-300" />
                  ) : (
                     <Camera className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  )}
                  {tourRequested ? "Tour Request Sent" : "Request Video Factory Tour"}
               </button>

               <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <Link href="/messages" className="text-[10px] font-extrabold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest flex items-center gap-2 group">
                     <MessageSquare className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" /> Chat Factory
                  </Link>
                  <button 
                    onClick={handleQuoteRequest}
                    className="text-[10px] font-extrabold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest flex items-center gap-2 group cursor-pointer"
                  >
                     <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" /> Quick Quote
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile Terminal */}
      <main className="py-24">
         <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               
               {/* Primary Intelligence Lane */}
               <div className="lg:col-span-8 space-y-24">
                  
                  {/* Facility Intelligence Section */}
                  <section>
                     <div className="flex items-end justify-between mb-12">
                        <div>
                           <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-4">
                              <Factory className="w-8 h-8 text-indigo-600" /> Facility Intelligence
                           </h2>
                           <p className="text-slate-500 font-medium">Real-time production metrics from the manufacturing floor.</p>
                        </div>
                        <div className="hidden md:flex items-center gap-3 text-xs font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                           <ShieldAlert className="w-4 h-4" /> Data Secured
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 group hover:border-indigo-100 transition-all duration-500">
                           <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <BarChart3 className="w-6 h-6 text-indigo-600" />
                           </div>
                           <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">Monthly Throughput</p>
                           <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{manufacturer.capacity}</p>
                           <div className="mt-4 h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-indigo-500 rounded-full"></div>
                           </div>
                        </div>
                        <div className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 group hover:border-emerald-100 transition-all duration-500">
                           <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <Users className="w-6 h-6 text-emerald-600" />
                           </div>
                           <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">Specialized Workforce</p>
                           <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{manufacturer.staff}</p>
                           <p className="mt-4 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Active Shift: 1st</p>
                        </div>
                        <div className="p-8 rounded-[3rem] bg-slate-900 shadow-xl shadow-slate-900/10 group hover:translate-y-[-4px] transition-all duration-500">
                           <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                              <Cpu className="w-6 h-6 text-indigo-400" />
                           </div>
                           <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Technical Focus</p>
                           <p className="text-lg font-extrabold text-white leading-tight">Advanced Aerospace & Auto Components</p>
                        </div>
                     </div>
                  </section>

                  {/* Audit & Compliance Hub */}
                  <section className="p-12 lg:p-16 rounded-[4rem] bg-indigo-600 text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                     <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                           <div>
                              <h2 className="text-4xl font-extrabold tracking-tight mb-4 leading-tight">Physical Audit <br/>Status: Confirmed</h2>
                              <p className="text-indigo-100 font-medium max-w-md">Last full-facility inspection performed on March 12, 2026 by Leedwey Compliance Group.</p>
                           </div>
                           <div className="flex -space-x-4">
                              {[1, 2, 3].map(i => (
                                 <div key={i} className="w-14 h-14 rounded-2xl bg-indigo-500 border-4 border-indigo-600 flex items-center justify-center text-xs font-bold shadow-xl">
                                    {i === 1 ? <ShieldCheck className="w-6 h-6" /> : i === 2 ? <Globe className="w-6 h-6 text-indigo-200" /> : <Award className="w-6 h-6 text-indigo-200" />}
                                 </div>
                              ))}
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                           {["Identity", "Capacity", "Finance", "Ethics"].map(node => (
                              <div key={node} className="p-6 rounded-[2rem] bg-white/10 border border-white/10 backdrop-blur-md flex items-center gap-4">
                                 <CheckCircle2 className="w-5 h-5 text-indigo-200" />
                                 <span className="text-sm font-bold uppercase tracking-widest">{node}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </section>

                  {/* Operational Capabilities */}
                  <section>
                     <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-12">Operational Capability</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                           <p className="text-xl text-slate-600 font-medium leading-relaxed">
                              PrecisionTech specializes in the high-fidelity manufacturing of critical industrial components. Our Shenzhen facility is a flagship node in the Leedwey network, featuring advanced AI-driven quality assurance and a multi-stage logistics buffer.
                           </p>
                           <div className="flex flex-wrap gap-4">
                              {["ISO-9001", "AS9100D", "IATF-16949", "GDPR"].map(tag => (
                                 <span key={tag} className="px-5 py-2.5 rounded-2xl bg-white border border-slate-100 text-xs font-extrabold text-slate-500 uppercase tracking-widest shadow-sm">{tag}</span>
                              ))}
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                           <div className="p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                              <Box className="w-7 h-7 text-indigo-400 mb-4" />
                              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">R&D Lab</p>
                              <p className="text-sm font-bold text-slate-900 leading-tight">Advanced Material Testing Suite</p>
                           </div>
                           <div className="p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                              <HardDrive className="w-7 h-7 text-emerald-400 mb-4" />
                              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">QC Line</p>
                              <p className="text-sm font-bold text-slate-900 leading-tight">Zero-Tolerance Optical Inspection</p>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>

               {/* Tactical Sidebar Lane */}
               <div className="lg:col-span-4 space-y-12">
                  
                  {/* Compliance Console */}
                  <div className="p-10 lg:p-12 rounded-[4rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
                     <h3 className="text-2xl font-extrabold mb-10 tracking-tight flex items-center justify-between">
                        Compliance Console
                        <ArrowRight className="w-5 h-5 text-indigo-400" />
                     </h3>
                     <div className="space-y-8">
                        {manufacturer.certifications.map(cert => (
                           <div key={cert.name} className="relative group/item cursor-pointer">
                              <div className="flex items-center justify-between mb-3">
                                 <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-indigo-500 transition-colors">
                                       {cert.icon}
                                    </div>
                                    <div>
                                       <p className="text-lg font-extrabold group-hover/item:text-indigo-400 transition-colors">{cert.name}</p>
                                       <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Node Verified: {cert.issued}</p>
                                    </div>
                                 </div>
                                 <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
                              </div>
                           </div>
                        ))}
                     </div>
                     <button className="w-full mt-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[2rem] text-xs font-extrabold uppercase tracking-widest transition-all">
                        Download Audit Reports
                     </button>
                  </div>

                  {/* Trade Node Profile */}
                  <div className="p-10 lg:p-12 rounded-[4rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                           <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                           <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Active Trade Node</h3>
                           <p className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">Escrow Protection Level: 4</p>
                        </div>
                     </div>
                     <p className="text-slate-500 font-medium mb-10 leading-relaxed text-sm">
                        This node is fully integrated into the Leedwey Smart Contract network. All trade interactions are milestone-audited and secured.
                     </p>
                     <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-50 flex items-center justify-between">
                           <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Node ID</span>
                           <span className="text-xs font-mono font-bold text-slate-900">LTN-90210-PT</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-50 flex items-center justify-between">
                           <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Global Rank</span>
                           <span className="text-xs font-bold text-slate-900">Top 0.5% (Region)</span>
                        </div>
                     </div>
                     <Link href="/auth/signup" className="w-full mt-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] text-xs font-extrabold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-100">
                        Initiate Trade Protocol <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>

               </div>

            </div>
         </div>
      </main>
    </div>
  );
}
