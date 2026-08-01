"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, Plane, Building, Car, CheckCircle2, X, ArrowRight } from "lucide-react";

const locationBenefits = [
  {
    icon: Plane,
    title: "Noida International Airport (Jewar)",
    desc: "Just 5 minutes away from the upcoming mega aviation hub, ensuring exponential appreciation.",
  },
  {
    icon: Building,
    title: "Film City & Tech Zone",
    desc: "Seamless connectivity to the upcoming Film City and proposed IT/Tech corridors.",
  },
  {
    icon: Car,
    title: "Yamuna Expressway & FNG",
    desc: "Direct access to major highways offering swift commutes to Delhi, NCR, and Agra.",
  },
  {
    icon: MapPin,
    title: "Strategic Sector-22D Position",
    desc: "Situated in Greater Noida's prime high-growth residential and commercial corridor.",
  },
];

export default function Location() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="location" className="relative w-full py-20 lg:py-32 bg-cream-bg text-peacock-dark overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-base/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-peacock-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-base/10 border border-gold-base/40 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold">
              Prime Connectivity
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-peacock-dark tracking-tight leading-tight">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-base to-gold-dark">Location Advantage</span>
          </h2>
          <p className="text-sm sm:text-base text-peacock-dark/80 font-sans font-light mt-3">
            Positioned in Sector 22D, Yamuna Expressway — the most coveted growth corridor of NCR.
          </p>
        </div>


        {/* ========================================================= */}
        {/* DESKTOP VIEW: Side-by-Side Map & Key Benefits */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left Side: Location Map Image */}
          <div className="col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-base/50 bg-white group">
            <Image
              src="/gaurlocationmap.jpg"
              alt="Gaur Alaris Location Map"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-peacock-dark/90 backdrop-blur-md border border-gold-base/40 text-center">
              <span className="text-xs font-serif text-gold-light">Sector 22D, Yamuna Expressway, Greater Noida</span>
            </div>
          </div>

          {/* Right Side: Key Benefits List */}
          <div className="col-span-6 space-y-4">
            {locationBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gold-base/30 shadow-md hover:border-gold-base/60 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gold-light to-gold-base text-peacock-dark shrink-0 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif text-peacock-dark group-hover:text-gold-dark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-peacock-dark/75 font-sans font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>


        {/* ========================================================= */}
        {/* MOBILE & TABLET VIEW: Optimized Stacked Layout */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-6 mb-10">
          
          {/* Location Map Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gold-base/50 bg-white">
            <Image
              src="/gaurlocationmap.jpg"
              alt="Gaur Alaris Location Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-peacock-dark/90 backdrop-blur-md border border-gold-base/40 text-center">
              <span className="text-[11px] font-serif text-gold-light">Sector 22D, Yamuna Expressway</span>
            </div>
          </div>

          {/* Key Benefits Grid for Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {locationBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-gold-base/30 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gold-base/20 text-gold-dark">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-serif text-peacock-dark font-medium">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-peacock-dark/75 font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>


        {/* ========================================================= */}
        {/* LOCATION ENQUIRE CTA */}
        {/* ========================================================= */}
        <div className="text-center pt-4">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", phone: "", email: "" });
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-xl hover:scale-105 transition-all cursor-pointer font-sans"
          >
            <span>Get Location Brochure & Route Map</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* LOCATION ENQUIRY MODAL */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-peacock-dark/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-bg text-peacock-dark p-6 sm:p-8 rounded-3xl shadow-2xl border border-gold-base/50 w-full max-w-md relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-peacock-dark/5 text-peacock-dark hover:bg-peacock-dark/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-gold-base mx-auto animate-bounce" />
                  <h3 className="text-2xl font-serif text-peacock-dark">Brochure Requested</h3>
                  <p className="text-sm text-peacock-dark/70 font-sans">
                    Thank you. Our luxury advisor will dispatch the complete location map and connectivity guide to you shortly.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-peacock-dark text-gold-light text-xs font-sans uppercase tracking-wider cursor-pointer font-bold"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold">
                      Gaur Alaris Navigation
                    </span>
                    <h3 className="text-2xl font-serif text-peacock-dark mt-1">Get Location Guide</h3>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-peacock-dark/70 mb-1 font-sans">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gold-base/30 rounded-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-peacock-dark/70 mb-1 font-sans">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Enter your number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gold-base/30 rounded-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-peacock-dark/70 mb-1 font-sans">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gold-base/30 rounded-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans"
                  >
                    Send Location Details
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}