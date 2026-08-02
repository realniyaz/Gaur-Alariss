"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, FileText, X, Loader2 } from "lucide-react";

export default function FloatingActions() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, planType: "Floating Actions Enquiry" }),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  const openEnquiryModal = () => {
    setIsLoading(false);
    setFormData({ name: "", phone: "", email: "" });
    setIsModalOpen(true);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP VIEW: Bottom-Right Corner Vertical Stack */}
      {/* ========================================================= */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3.5 items-center">
        
        {/* Call Action */}
        <a
          href="tel:+919910374156"
          aria-label="Call Now"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-peacock-dark border-2 border-gold-base shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <Phone className="w-5 h-5 text-gold-light" />
          <span className="absolute right-14 px-3 py-1 bg-peacock-dark text-gold-light text-xs font-sans rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold-base/40 pointer-events-none">
            +91 99103 74156
          </span>
        </a>

        {/* WhatsApp Action */}
        <a
          href="https://wa.me/917042080055"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 border-2 border-white shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden"
        >
          <div className="relative w-6 h-6">
            <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
          </div>
          <span className="absolute right-14 px-3 py-1 bg-peacock-dark text-gold-light text-xs font-sans rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold-base/40 pointer-events-none">
            WhatsApp Us
          </span>
        </a>

        {/* Enquire Form Action */}
        <button
          onClick={openEnquiryModal}
          aria-label="Enquire Now"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gold-light via-gold-base to-gold-dark border-2 border-peacock-dark shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <FileText className="w-5 h-5 text-peacock-dark" />
          <span className="absolute right-14 px-3 py-1 bg-peacock-dark text-gold-light text-xs font-sans rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold-base/40 pointer-events-none">
            Enquire Now
          </span>
        </button>

      </div>


      {/* ========================================================= */}
      {/* MOBILE VIEW: Bottom Sticky Bar (Call Now - Enquire Now - WhatsApp) */}
      {/* ========================================================= */}
      <div className="flex lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-peacock-dark/95 backdrop-blur-md border-t border-gold-base/40 shadow-2xl py-2 px-3 items-center justify-around">
        
        {/* Call Now */}
        <a
          href="tel:+919910374156"
          className="flex-1 flex flex-col items-center justify-center py-1 text-gold-light hover:text-white transition-colors border-r border-gold-base/20"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-sans font-bold">Call Now</span>
        </a>

        {/* Enquire Now */}
        <button
          onClick={openEnquiryModal}
          className="flex-1 flex flex-col items-center justify-center py-1 text-peacock-dark bg-gradient-to-r from-gold-light via-gold-base to-gold-dark mx-2 rounded-xl shadow-md cursor-pointer"
        >
          <FileText className="w-4 h-4 mb-0.5 text-peacock-dark" />
          <span className="text-[10px] uppercase tracking-wider font-sans font-bold">Enquire Now</span>
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917042080055"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-emerald-400 hover:text-emerald-300 transition-colors border-l border-gold-base/20"
        >
          <div className="relative w-4 h-4 mb-0.5">
            <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-sans font-bold">WhatsApp</span>
        </a>

      </div>


      {/* ========================================================= */}
      {/* ENQUIRY MODAL */}
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold">
                    Gaur Alaris Priority Desk
                  </span>
                  <h3 className="text-2xl font-serif text-peacock-dark mt-1">Schedule a Consultation</h3>
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
                  disabled={isLoading}
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Submit Enquiry</span>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}