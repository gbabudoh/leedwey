"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Global B2B Trading Platform",
    subtitle: "Source directly from verified manufacturers worldwide.",
    image: "bg-gradient-to-br from-[#002F6C] to-[#004e92]",
    cta: "Start Sourcing"
  },
  {
    id: 2,
    title: "Consumer Electronics Expo",
    subtitle: "Discover the latest tech trends and innovations.",
    image: "bg-gradient-to-br from-[#FF6600] to-[#ff8533]",
    cta: "View Deals"
  },
  {
    id: 3,
    title: "Industrial Machinery Week",
    subtitle: "Heavy equipment at factory-direct prices.",
    image: "bg-gradient-to-br from-[#1a1a1a] to-[#404040]",
    cta: "Learn More"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 h-[400px] relative overflow-hidden bg-gray-100 rounded-none md:rounded-lg md:mx-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${slides[current].image} text-white flex flex-col justify-center px-12`}
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 max-w-lg leading-tight"
          >
            {slides[current].title}
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl mb-8 opacity-90 max-w-md"
          >
            {slides[current].subtitle}
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-fit bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            {slides[current].cta}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </AnimatePresence>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
