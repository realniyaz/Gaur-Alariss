"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lock, ArrowRight, CheckCircle2, X, ShieldAlert } from "lucide-react";

const floorplansData = [
  {
    id: "3bhk",
    title: "3 BHK Luxury Residence",
    size: "1,550 Sq. Ft.",
    price: "₹1.36 Cr* Onwards",
    config: "3 Bedrooms + 3 Bathrooms + Wide Deck Balconies",
    image: "/3BHK.jpg", // Replace with actual 3 BHK floorplan image path if available
    tag: "Most Popular",
  },
  {
    id: "4bhk",
    title: "4 BHK Ultra-Luxury Residence",
    size: "1,950 Sq. Ft.",
    price: "₹1.71 Cr* Onwards",
    config: "4 Bedrooms + 4 Bathrooms + Servant Room + Private Lobby",
    image: "/4BHK.jpg", // Replace with actual 4 BHK floorplan image path if available
    tag: "Exclusive",
  },
];

export default function Floorplans() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0); // 0 for 3 BHK, 1 for 4 BHK
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleOpenModal = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "" });
    setIsModalOpen(true);
  };

  return (
    <section id="floorplans" className="relative w-full py-20 lg:py-32 bg-cream-bg text-peacock-dark overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-base/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-peacock-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-base/10 border border-gold-base/40 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold">
              Architectural Layouts
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-peacock-dark tracking-tight leading-tight">
            Masterful <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-base to-gold-dark">Floor Plans</span>
          </h2>
          <p className="text-sm sm:text-base text-peacock-dark/80 font-sans font-light mt-3">
            Thoughtfully engineered spaces maximizing cross-ventilation, privacy, and majestic vistas.
          </p>

          {/* Tab Navigation (Works seamlessly across mobile & desktop) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {floorplansData.map((plan, idx) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(idx as 0 | 1)}
                className={`px-6 py-2.5 rounded-xl text-xs font-sans tracking-wider uppercase transition-all cursor-pointer font-bold ${
                  activeTab === idx
                    ? "bg-peacock-dark text-gold-light shadow-lg scale-105"
                    : "bg-white border border-gold-base/40 text-peacock-dark hover:bg-gold-base/10"
                }`}
              >
                {plan.title.split(" ")[0]} {plan.title.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>


        {/* ========================================================= */}
        {/* FLOOR PLAN SHOWCASE CARD */}
        {/* ========================================================= */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gold-base/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Details & Button */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-base/10 text-gold-dark text-[10px] uppercase tracking-widest font-sans font-semibold mb-2">
                    {floorplansData[activeTab].tag}
                  </span>
                  <h3 className="text-3xl font-serif text-peacock-dark font-semibold">
                    {floorplansData[activeTab].title}
                  </h3>
                  <p className="text-xs text-peacock-dark/70 font-sans mt-1">
                    {floorplansData[activeTab].config}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-bg border border-gold-base/30 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-peacock-dark/70 uppercase tracking-wider font-sans">Super Built-up Area:</span>
                    <strong className="text-peacock-dark font-serif text-sm">{floorplansData[activeTab].size}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-gold-base/20">
                    <span className="text-peacock-dark/70 uppercase tracking-wider font-sans">Investment:</span>
                    <strong className="text-gold-dark font-serif text-sm">{floorplansData[activeTab].price}</strong>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(floorplansData[activeTab].title)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
                >
                  <span>Unlock Full Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Column: Protected Blurred Image with Animated Lock Overlay */}
              <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden bg-peacock-dark border border-gold-base/30 shadow-inner group">
                
                {/* Blurred Blueprint Image */}
                <Image
                  src={floorplansData[activeTab].image}
                  alt={floorplansData[activeTab].title}
                  fill
                  className="object-contain filter blur-[3px] opacity-80 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-peacock-dark/30" />

                {/* Animated Locked Badge Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="p-4 rounded-full bg-peacock-dark/80 backdrop-blur-md border border-gold-base/60 text-gold-light shadow-2xl mb-3"
                  >
                    <Lock className="w-6 h-6 animate-pulse" />
                  </motion.div>
                  <span className="px-3 py-1 rounded-full bg-peacock-dark/80 backdrop-blur-md border border-gold-base/40 text-[10px] uppercase tracking-[0.25em] text-gold-light font-sans font-semibold mb-1 shadow-md">
                    Protected Blueprint
                  </span>
                  <p className="text-xs text-cream-bg/90 font-sans font-light max-w-xs drop-shadow">
                    Register below to instantly unlock high-resolution floor plans & pricing sheet.
                  </p>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ========================================================= */}
      {/* UNLOCK BLUEPRINT MODAL */}
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
                  <h3 className="text-2xl font-serif text-peacock-dark">Blueprint Unlocked</h3>
                  <p className="text-sm text-peacock-dark/70 font-sans">
                    Thank you. The high-resolution blueprint for <strong className="text-peacock-dark">{selectedPlan}</strong> has been sent along with the cost sheet.
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
                      Gaur Alaris Blueprints
                    </span>
                    <h3 className="text-2xl font-serif text-peacock-dark mt-1">Unlock {selectedPlan}</h3>
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
                    Instant Unlock Blueprint
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