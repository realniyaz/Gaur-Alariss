"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, X } from "lucide-react";

const highlightItems = [
  {
    number: "01",
    title: "11.8 Acres Expansive Luxury Community Layout",
  },
  {
    number: "02",
    title: "8 Iconic Towers Structured at 34 Storeys High",
  },
  {
    number: "03",
    title: "Spacious & Meticulously Planned 3 & 4 BHK Residences",
  },
  {
    number: "04",
    title: "1,00,000 Sq. Ft. Club Regalia (Multi-Level Clubhouse)",
  },
  {
    number: "05",
    title: "5 Minutes Proximity to Noida International Airport (Jewar)",
  },
  {
    number: "06",
    title: "8 Acres of Peacock-Inspired Landscape Greens & Gardens",
  },
  {
    number: "07",
    title: "Masterminded by Hafeez Contractor & Global Consultants",
  },
];

const galleryImages = [
  { src: "/banner_1.png", alt: "Gaur Alaris Grand Elevation" },
  { src: "/banner2.png", alt: "Club Regalia Epicenter" },
  { src: "/banner3.png", alt: "Landscaped Gardens & Greens" },
  { src: "/banner1.png", alt: "Ultra-Luxury Interiors" },
];

export default function Highlights() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="highlights" className="relative w-full py-20 lg:py-32 bg-peacock-dark text-cream-bg overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-peacock-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-base/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-bg/10 border border-gold-base/40 mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-light font-sans font-medium">
              Architectural Distinction
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-cream-bg tracking-tight leading-tight">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-base to-gold-light">Highlights</span> of Gaur Alaris
          </h2>
          <p className="text-sm sm:text-base text-cream-bg/80 font-sans font-light mt-3">
            An uncompromising residential masterpiece engineered for the elite.
          </p>
        </div>


        {/* ========================================================= */}
        {/* DESKTOP VIEW: Left Pointers (7 items) + Right 4-Image Gallery */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Side: Sequential Pointers (Clean & Balanced) */}
          <div className="col-span-7 space-y-3.5">
            {highlightItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-peacock-blue/40 border border-gold-base/20 hover:border-gold-base/60 hover:bg-peacock-blue/60 transition-all duration-300 group"
              >
                <span className="text-lg font-serif text-gold-light font-bold shrink-0 w-8 text-right">
                  {item.number}
                </span>
                <h3 className="text-sm lg:text-base font-serif text-cream-bg group-hover:text-gold-light transition-colors leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Right Side: 4-Image Gallery Grid (Balanced Height) */}
          <div className="col-span-5 grid grid-cols-2 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gold-base/40 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] text-cream-bg font-sans">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>


        {/* ========================================================= */}
        {/* MOBILE & TABLET VIEW: Interactive Sequential Card Carousel */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-6 mb-12">
          
          {/* Active Highlight Card Display */}
          <motion.div
            key={activeMobileIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-3xl bg-peacock-blue/70 border border-gold-base/50 shadow-2xl backdrop-blur-md relative overflow-hidden text-center"
          >
            <div className="absolute top-3 right-4 text-4xl font-serif text-gold-light/20 font-bold">
              {highlightItems[activeMobileIdx].number}
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-sans font-semibold">
              Highlight {highlightItems[activeMobileIdx].number} of 07
            </span>
            <h3 className="text-lg font-serif text-cream-bg mt-2 mb-1 leading-snug">
              {highlightItems[activeMobileIdx].title}
            </h3>
          </motion.div>

          {/* Quick Select Dots / Numbers */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {highlightItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMobileIdx(idx)}
                className={`w-9 h-9 rounded-xl font-serif text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                  activeMobileIdx === idx
                    ? "bg-gradient-to-r from-gold-light to-gold-base text-peacock-dark shadow-lg scale-105"
                    : "bg-peacock-blue/40 border border-gold-base/30 text-cream-bg hover:bg-peacock-blue/70"
                }`}
              >
                {item.number}
              </button>
            ))}
          </div>

          {/* Mobile Gallery Carousel Preview */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gold-base/30">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/80 via-transparent to-transparent p-2 flex items-end">
                  <span className="text-[10px] text-cream-bg font-sans line-clamp-1">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

        </div>


        {/* ========================================================= */}
        {/* BOTTOM ACTION BAR (2 Buttons) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-gold-base/30 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Button 1: Redirects to Amenities Section */}
          <button
            onClick={() => scrollToSection("clubhouse")}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-peacock-blue/60 hover:bg-peacock-blue border border-gold-base/40 text-cream-bg font-bold text-xs tracking-[0.2em] uppercase shadow-lg transition-all cursor-pointer font-sans flex items-center justify-center gap-3 group"
          >
            <span>Explore Club Regalia Amenities</span>
            <ArrowRight className="w-4 h-4 text-gold-light group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: Opens Enquire Form Modal */}
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", phone: "", email: "" });
              setIsModalOpen(true);
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-2xl hover:scale-105 transition-all cursor-pointer font-sans flex items-center justify-center gap-3"
          >
            <span>Enquire For Priority Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>

      {/* ========================================================= */}
      {/* ENQUIRE NOW MODAL */}
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
                  <h3 className="text-2xl font-serif text-peacock-dark">Enquiry Received</h3>
                  <p className="text-sm text-peacock-dark/70 font-sans">
                    Thank you. Our luxury property advisor will get in touch with you shortly.
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
                      Gaur Alaris Advisory
                    </span>
                    <h3 className="text-2xl font-serif text-peacock-dark mt-1">Request Priority Access</h3>
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
                    Submit Enquiry
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