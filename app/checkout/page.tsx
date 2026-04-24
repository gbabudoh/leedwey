"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { 
  ShieldCheck, 
  Lock, 
  Truck, 
  ChevronRight, 
  CreditCard, 
  Building2, 
  CheckCircle2, 
  Globe, 
  ShieldAlert,
  Zap,
  MessageSquare,
  Plane,
  Ship,
  Package,
  Clock,
  Plus,
  X
} from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [step, setStep] = useState<"details" | "payment" | "success">("details");
  const [paymentMethod, setPaymentMethod] = useState<"escrow" | "bank" | "credit">("escrow");
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("1");
  const [addresses, setAddresses] = useState([
    {
      id: "1",
      label: "Primary Address",
      name: "HQ Logistics Terminal",
      address: "123 Tech Avenue, Building 4, Industrial Park, CA 94043, United States",
    },
    {
      id: "2",
      label: "Secondary Address",
      name: "East Coast Warehouse",
      address: "456 Supply Chain Blvd, New York, NY 10001, United States",
    }
  ]);
  const [newAddress, setNewAddress] = useState({ name: "", address: "", label: "" });
  const [selectedShippingId, setSelectedShippingId] = useState("1");
  const [isContactingLogistics, setIsContactingLogistics] = useState<string | null>(null);

  const shippingOptions = [
    {
      id: "1",
      provider: "Global Express Air",
      price: 145.00,
      eta: "3-5 Days",
      type: "Air",
      icon: <Plane className="w-5 h-5" />,
      recommended: true
    },
    {
      id: "2",
      provider: "Maersk Ocean Freight",
      price: 45.00,
      eta: "14-21 Days",
      type: "Sea",
      icon: <Ship className="w-5 h-5" />,
      recommended: false
    },
    {
      id: "3",
      provider: "Industrial Rail Link",
      price: 85.00,
      eta: "7-10 Days",
      type: "Rail",
      icon: <Truck className="w-5 h-5" />,
      recommended: false
    }
  ];

  const selectedShipping = shippingOptions.find(opt => opt.id === selectedShippingId) || shippingOptions[0];
  const shippingPrice = selectedShipping.price;

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddress.name || !newAddress.address || !newAddress.label) return;
    
    const id = (addresses.length + 1).toString();
    setAddresses([...addresses, { ...newAddress, id }]);
    setIsAddingAddress(false);
    setNewAddress({ name: "", address: "", label: "" });
    setSelectedAddress(id);
  };

  const cartItems = [
    {
      id: "1",
      name: "High-Precision CNC X-900 Component",
      manufacturer: "PrecisionTech Manufacturing Ltd.",
      price: 250.00,
      quantity: 10,
      total: 2500.00,
      image: <Package className="w-8 h-8 text-indigo-200" />
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const insurance = 25.00;
  const total = subtotal + shippingPrice + insurance;

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative">
      {/* Add Address Modal Overlay */}
      {isAddingAddress && (
        <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-lg bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
             <button 
              onClick={() => setIsAddingAddress(false)}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors"
             >
               <X className="w-5 h-5" />
             </button>
             
             <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Add New Address</h2>
                <p className="text-sm text-slate-500 font-medium">Register a new delivery node to your account.</p>
             </div>

             <form onSubmit={handleAddAddress} className="space-y-6">
                <div>
                   <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Destination Label</label>
                   <input 
                    type="text" 
                    placeholder="e.g. Asia Logistics Hub"
                    required
                    value={newAddress.label}
                    onChange={(e) => setNewAddress({...newAddress, label: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900"
                   />
                </div>
                <div>
                   <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Terminal Name</label>
                   <input 
                    type="text" 
                    placeholder="e.g. Precision Warehouse A"
                    required
                    value={newAddress.name}
                    onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900"
                   />
                </div>
                <div>
                   <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Full Address</label>
                   <textarea 
                    placeholder="Enter full street, city, state, zip and country"
                    required
                    rows={3}
                    value={newAddress.address}
                    onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900 resize-none"
                   ></textarea>
                </div>

                <div className="pt-4">
                   <button 
                    type="submit"
                    className="w-full py-5 bg-slate-900 text-white font-extrabold rounded-[2rem] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
                   >
                      <Plus className="w-5 h-5" /> Save Destination Node
                   </button>
                </div>
             </form>
          </div>
        </div>
      )}

      {/* Logistics Contact Modal */}
      {isContactingLogistics && (
        <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-lg bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
             <button 
              onClick={() => setIsContactingLogistics(null)}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors"
             >
               <X className="w-5 h-5" />
             </button>
             
             <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                   <MessageSquare className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Contact Logistics Agent</h2>
                <p className="text-sm text-slate-500 font-medium">Inquiry for {shippingOptions.find(o => o.id === isContactingLogistics)?.provider}</p>
             </div>

             <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Subject</p>
                   <p className="font-bold text-slate-900">Custom Freight Quotation & Capacity Check</p>
                </div>
                <div>
                   <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                   <textarea 
                    placeholder="Ask about customs, specific delivery requirements, or volume discounts..."
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-900 resize-none"
                    defaultValue={`Hello, we are interested in using ${shippingOptions.find(o => o.id === isContactingLogistics)?.provider} for our order of 10x CNC Components. Please confirm capacity for next week.`}
                   ></textarea>
                </div>

                <div className="pt-4">
                   <button 
                    onClick={() => setIsContactingLogistics(null)}
                    className="w-full py-5 bg-slate-900 text-white font-extrabold rounded-[2rem] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
                   >
                      <Zap className="w-5 h-5 text-indigo-400" /> Send Secure Message
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}

      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Checkout Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                <Lock className="w-4 h-4" />
                Secure Checkout
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Checkout</h1>
            </div>
            
            {/* Progress Stepper */}
            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
              <div className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${step === "details" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === "details" ? "bg-indigo-500" : "bg-slate-100"}`}>1</span>
                Order Details
              </div>
              <ChevronRight className="w-4 h-4 text-slate-200" />
              <div className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${step === "payment" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === "payment" ? "bg-indigo-500" : "bg-slate-100"}`}>2</span>
                Secure Payment
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Details & Forms */}
            <div className="lg:col-span-2 space-y-8">
              
              {step !== "success" ? (
                <>
                  {/* Shipping Address */}
                  <section className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <Truck className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">Shipping Address</h2>
                          <p className="text-sm text-slate-400 font-medium">Select your delivery destination.</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setIsAddingAddress(true)}
                        className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Add New Address
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((addr) => (
                        <div 
                          key={addr.id}
                          onClick={() => setSelectedAddress(addr.id)}
                          className={`p-6 rounded-[2rem] border-2 transition-all cursor-pointer relative group ${selectedAddress === addr.id ? "border-indigo-600 bg-indigo-50/30" : "border-slate-100 bg-white hover:border-slate-200"}`}
                        >
                          {selectedAddress === addr.id && (
                            <div className="absolute top-6 right-6">
                              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                            </div>
                          )}
                          <p className={`text-xs font-extrabold uppercase tracking-widest mb-2 ${selectedAddress === addr.id ? "text-indigo-600" : "text-slate-400"}`}>{addr.label}</p>
                          <h3 className="font-bold text-slate-900 mb-1">{addr.name}</h3>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            {addr.address}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Logistics Terminal */}
                  <section className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                          <Globe className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">Logistics Selection</h2>
                          <p className="text-sm text-slate-400 font-medium">Manufacturer-provided shipping nodes.</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">
                        Verified Routes
                      </div>
                    </div>

                    <div className="space-y-4">
                      {shippingOptions.map((option) => (
                        <div 
                          key={option.id}
                          onClick={() => setSelectedShippingId(option.id)}
                          className={`p-6 rounded-[2.5rem] border-2 transition-all cursor-pointer relative group ${selectedShippingId === option.id ? "border-indigo-600 bg-indigo-50/30" : "border-slate-50 bg-white hover:border-slate-200"}`}
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-5">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${selectedShippingId === option.id ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                                {option.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-extrabold text-slate-900">{option.provider}</h3>
                                  {option.recommended && (
                                    <span className="px-2 py-0.5 rounded-lg bg-indigo-100 text-indigo-700 text-[8px] font-extrabold uppercase tracking-widest">Factory Pick</span>
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-xs font-bold">
                                  <span className="text-slate-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {option.eta}
                                  </span>
                                  <span className="text-slate-400 uppercase tracking-widest">{option.type} Freight</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 pt-4 md:pt-0">
                               <div className="text-right">
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Freight Cost</p>
                                  <p className="text-xl font-extrabold text-slate-900">${option.price.toFixed(2)}</p>
                               </div>
                               <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsContactingLogistics(option.id);
                                }}
                                className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm"
                                title="Contact Provider"
                               >
                                  <MessageSquare className="w-5 h-5" />
                               </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Payment Method */}
                  <section className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Payment Method</h2>
                        <p className="text-sm text-slate-400 font-medium">Secure transaction via Leedwey Ledger.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Escrow Option */}
                      <button 
                        onClick={() => setPaymentMethod("escrow")}
                        className={`w-full p-6 rounded-[2rem] border-2 transition-all text-left flex items-center justify-between group ${paymentMethod === "escrow" ? "border-emerald-500 bg-emerald-50/30" : "border-slate-100 hover:border-slate-200"}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${paymentMethod === "escrow" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`}>
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 flex items-center gap-2">
                              Leedwey Secure Escrow
                              <span className="px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-700 text-[8px] font-extrabold uppercase tracking-widest">Recommended</span>
                            </h3>
                            <p className="text-sm text-slate-500 font-medium">Funds released only upon verified milestone delivery.</p>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === "escrow" ? "border-emerald-500 bg-emerald-500" : "border-slate-200"}`}>
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </button>

                      {/* Bank Transfer */}
                      <button 
                        onClick={() => setPaymentMethod("bank")}
                        className={`w-full p-6 rounded-[2rem] border-2 transition-all text-left flex items-center justify-between group ${paymentMethod === "bank" ? "border-indigo-600 bg-indigo-50/30" : "border-slate-100 hover:border-slate-200"}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${paymentMethod === "bank" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                            <Building2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">Direct Bank Protocol (SWIFT)</h3>
                            <p className="text-sm text-slate-500 font-medium">Standard industrial wire transfer. 2-3 business days.</p>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === "bank" ? "border-indigo-600 bg-indigo-600" : "border-slate-200"}`}>
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </button>
                    </div>
                  </section>
                </>
              ) : (
                /* Success State */
                <section className="bg-white p-12 lg:p-20 rounded-[3.5rem] border border-slate-100 shadow-2xl text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-[2.5rem] bg-emerald-500 flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-200 animate-in zoom-in duration-500">
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Order Successful</h2>
                    <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed mb-12">Your order <span className="text-indigo-600 font-bold">#LW-992-004X</span> has been placed. The manufacturer has been notified to begin production.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                        <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-3" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Funds Status</p>
                        <p className="text-sm font-bold text-slate-900">Escrow Locked</p>
                      </div>
                      <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                        <Clock className="w-6 h-6 text-indigo-500 mx-auto mb-3" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Production</p>
                        <p className="text-sm font-bold text-slate-900">Queue Active</p>
                      </div>
                      <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                        <Globe className="w-6 h-6 text-slate-400 mx-auto mb-3" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tracking</p>
                        <p className="text-sm font-bold text-slate-900">Tracking Active</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link href="/dashboard" className="px-10 py-5 bg-slate-900 text-white font-extrabold rounded-[2rem] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                        Go to Dashboard
                      </Link>
                      <Link href="/products" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-extrabold rounded-[2rem] hover:bg-slate-50 transition-all">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: Order Summary */}
            <div className="space-y-8">
              <aside className="bg-slate-900 text-white p-8 lg:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-indigo-600/30"></div>
                
                <h2 className="text-2xl font-extrabold mb-8 relative z-10">Order Summary</h2>
                
                <div className="space-y-6 mb-8 relative z-10">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold leading-snug mb-1">{item.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">{item.manufacturer}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-extrabold px-2 py-0.5 bg-white/10 rounded-md">QTY: {item.quantity}</span>
                          <span className="text-sm font-extrabold">${item.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-8 border-t border-white/10 relative z-10">
                  <div className="flex justify-between text-sm font-medium text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-slate-400">
                    <span>Global Logistics</span>
                    <span className="text-white">${shippingPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-slate-400">
                    <span>Escrow Insurance</span>
                    <span className="text-white">${insurance.toLocaleString()}</span>
                  </div>
                  <div className="pt-6 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest mb-1">Total to Escrow</p>
                      <p className="text-3xl font-extrabold text-white">${total.toLocaleString()}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-indigo-400" />
                    </div>
                  </div>
                </div>

                {step !== "success" && (
                  <button 
                    onClick={() => setStep("success")}
                    className="w-full mt-10 py-5 bg-emerald-500 text-white font-extrabold rounded-[2rem] hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-900/40 flex items-center justify-center gap-3 cursor-pointer group/btn"
                  >
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Complete Secure Payment
                  </button>
                )}
                
                <div className="mt-8 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Milestone Protected Order</p>
                </div>
              </aside>

              {/* Trust Badge Section */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100">
                 <ShieldAlert className="w-8 h-8 text-indigo-600 mb-4" />
                 <h3 className="font-bold text-slate-900 mb-2">B2B Trade Protection</h3>
                 <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">You are protected by our secure trade system. Funds are held in a top-tier financial institution until inspection is confirmed.</p>
                 <div className="space-y-3">
                    {["Identified Entities", "Capacity Verified", "Secure Logistics", "Milestone Based"].map(trust => (
                       <div key={trust} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span className="text-[10px] font-extrabold text-slate-700 uppercase tracking-widest">{trust}</span>
                       </div>
                    ))}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
