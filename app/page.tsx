"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Search,
  MessageSquare,
  Truck,
  FileText,
  BarChart3,
  Lock,
  ShoppingCart,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-[#F3E5D7]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#EDF0F3] rounded-full mb-6"
            >
              <Globe className="w-4 h-4 text-[#F49B41]" />
              <span className="text-sm font-medium text-gray-700">
                Global B2B Platform • Trusted by Manufacturers Worldwide
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The Full-Stack B2B
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F49B41] to-[#ACC8E5]">
                Operating System
              </span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Connect directly with manufacturers. Streamline logistics, payments, and compliance.
              <br />
              All in one trusted, secure platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#F49B41] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-[#ACC8E5] text-gray-900 rounded-xl font-semibold text-lg hover:bg-[#EDF0F3] transition-all"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Layout - Grid 1 & Grid 2 */}
      <section id="solutions" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Grid 1 - Trust & Security */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#F3E5D7] to-white border border-[#EDF0F3] hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#F49B41]/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#F49B41]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 mt-4">
                Trust-as-a-Service
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Every manufacturer and buyer is verified and authenticated. Our subscription model
                ensures only legitimate businesses join the platform, eliminating fraud and
                building genuine trust.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F49B41] flex-shrink-0" />
                  <span className="text-gray-700">Verified counterparty identity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F49B41] flex-shrink-0" />
                  <span className="text-gray-700">Secure internal messaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F49B41] flex-shrink-0" />
                  <span className="text-gray-700">Voice, video & chat verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F49B41] flex-shrink-0" />
                  <span className="text-gray-700">Advanced fraud detection</span>
                </div>
              </div>
            </motion.div>

            {/* Grid 2 - All-in-One Platform */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#ACC8E5]/20 to-white border border-[#EDF0F3] hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#ACC8E5]/30 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#ACC8E5]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 mt-4">
                Complete B2B Ecosystem
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                From discovery to delivery—everything you need in one platform. No more juggling
                multiple services. Integrated logistics, payments, compliance, and communication.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ACC8E5] flex-shrink-0" />
                  <span className="text-gray-700">Product discovery & showroom</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ACC8E5] flex-shrink-0" />
                  <span className="text-gray-700">FOB, FTA & customs integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ACC8E5] flex-shrink-0" />
                  <span className="text-gray-700">Automated quote generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ACC8E5] flex-shrink-0" />
                  <span className="text-gray-700">End-to-end logistics & insurance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-[#EDF0F3]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Scale Globally
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for modern B2B commerce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Virtual Global Expo",
                description:
                  "24/7/365 digital showroom accessible worldwide. No travel, no trade show fees—just global reach.",
                color: "from-[#F49B41] to-[#F49B41]/80",
              },
              {
                icon: Search,
                title: "Smart Discovery",
                description:
                  "Advanced search and filtering to find exactly what you need. AI-powered product matching.",
                color: "from-[#ACC8E5] to-[#ACC8E5]/80",
              },
              {
                icon: MessageSquare,
                title: "Integrated Communication",
                description:
                  "Secure messaging, video calls, and document sharing—all within the platform.",
                color: "from-[#F49B41] to-[#F49B41]/80",
              },
              {
                icon: Truck,
                title: "Logistics Integration",
                description:
                  "Seamless freight forwarding, customs clearance, and delivery tracking.",
                color: "from-[#ACC8E5] to-[#ACC8E5]/80",
              },
              {
                icon: FileText,
                title: "Compliance & Documentation",
                description:
                  "Automated FOB, FTA, and customs documentation. Stay compliant effortlessly.",
                color: "from-[#F49B41] to-[#F49B41]/80",
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description:
                  "Real-time dashboards, transaction analytics, and market insights.",
                color: "from-[#ACC8E5] to-[#ACC8E5]/80",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Democratize Global Trade
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Small-to-midsize manufacturers can now access global markets without the
                prohibitive costs of international travel or trade show participation. Leedwey
                levels the playing field.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3E5D7] flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#F49B41]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Reduce Costs</h4>
                    <p className="text-gray-600">
                      Eliminate trade show fees, travel expenses, and multiple service subscriptions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ACC8E5]/30 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#ACC8E5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expand Reach</h4>
                    <p className="text-gray-600">
                      Connect with buyers worldwide, 24/7, from your digital showroom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3E5D7] flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-[#F49B41]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Build Trust</h4>
                    <p className="text-gray-600">
                      Verified businesses only. Every transaction is secure and authenticated.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#F3E5D7]/50 to-[#ACC8E5]/30 border border-[#EDF0F3]">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, label: "Manufacturers", value: "10K+", color: "#F49B41" },
                    { icon: ShoppingCart, label: "Active Buyers", value: "25K+", color: "#ACC8E5" },
                    { icon: Globe, label: "Countries", value: "150+", color: "#F49B41" },
                    { icon: TrendingUp, label: "Growth", value: "300%", color: "#ACC8E5" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-6 bg-white rounded-xl text-center hover:shadow-lg transition-shadow"
                    >
                      <stat.icon
                        className="w-8 h-8 mx-auto mb-3"
                        style={{ color: stat.color }}
                      />
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#F3E5D7] to-[#ACC8E5]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your B2B Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of manufacturers and buyers already using Leedwey to streamline their
              global trade operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#F49B41] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg border-2 border-[#ACC8E5] hover:bg-[#EDF0F3] transition-all"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F49B41] to-[#ACC8E5] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Leedwey</span>
              </div>
              <p className="text-sm">
                The complete B2B platform for global manufacturer-to-customer commerce.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
            Documentation
          </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F49B41] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Leedwey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
