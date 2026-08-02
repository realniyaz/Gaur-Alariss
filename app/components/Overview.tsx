"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight, Loader2 } from "lucide-react";

const cornerImages = [
  {
    src: "/o1.png",
    alt: "Gaur Alaris Grand Architectural Elevation",
    position: "top-left",
  },
  {
    src: "/o_3.png",
    alt: "Luxurious Landscaped Courtyard & Amenities",
    position: "top-right",
  },
  {
    src: "/o_4.png",
    alt: "Exquisite Interior Living Spaces",
    position: "bottom-left",
  },
  {
    src: "/banner_1.png",
    alt: "Exclusive Clubhouse & Lifestyle Epicenter",
    position: "bottom-right",
  },
];

export default function Overview() {
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
        body: JSON.stringify({ ...formData, planType: "Overview Section Enquiry" }),
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

  return (
    <section id="overview" className="relative w-full py-20 lg:py-32 bg-cream-bg text-peacock-dark overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold-base blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-peacock-blue blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================= */}
        {/* DESKTOP LAYOUT: Centered Content + 4 Corner Images */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative min-h-[620px] py-12">
          
          {/* Top-Left Corner Image */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-base/30 group"
          >
            <Image
              src={cornerImages[0].src}
              alt={cornerImages[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-[11px] text-cream-bg font-sans">{cornerImages[0].alt}</span>
            </div>
          </motion.div>

          {/* Top-Right Corner Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-0 right-0 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-base/30 group"
          >
            <Image
              src={cornerImages[1].src}
              alt={cornerImages[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-[11px] text-cream-bg font-sans">{cornerImages[1].alt}</span>
            </div>
          </motion.div>

          {/* Bottom-Left Corner Image */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-base/30 group"
          >
            <Image
              src={cornerImages[2].src}
              alt={cornerImages[2].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-[11px] text-cream-bg font-sans">{cornerImages[2].alt}</span>
            </div>
          </motion.div>

          {/* Bottom-Right Corner Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 right-0 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-base/30 group"
          >
            <Image
              src={cornerImages[3].src}
              alt={cornerImages[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-[11px] text-cream-bg font-sans">{cornerImages[3].alt}</span>
            </div>
          </motion.div>

          {/* Centered Description Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center px-6 py-8 my-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-base/10 border border-gold-base/40 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold">
                Project Legacy & Vision
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif text-peacock-dark mb-6 tracking-tight leading-tight">
              A Symphony of Art Deco Elegance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-base to-gold-dark">Peacock Grace</span>
            </h2>

            <p className="text-sm lg:text-base text-peacock-dark/80 font-sans font-light leading-relaxed mb-8">
              Gaur Alaris in Sector 22D, Yamuna Expressway represents the absolute pinnacle of high-rise luxury. Spread across 11.8 magnificent acres of Phase 1 development, this landmark features 8 iconic 34-storey towers designed by Hafeez Contractor. Drawing inspiration from the royal poise of the peacock, every detail—from expansive 3 & 4 BHK residences to the 5-level Clubhouse Regalia—is crafted for discerning connoisseurs.
            </p>

            <button
              onClick={() => {
                setIsLoading(false);
                setFormData({ name: "", phone: "", email: "" });
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer font-sans"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>


        {/* ========================================================= */}
        {/* MOBILE & TABLET VIEW: Optimized Stacked Layout */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-8">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-base/10 border border-gold-base/40 shadow-sm">
              <Sparkles className="w-3 h-3 text-gold-dark" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-sans font-semibold">
                Project Legacy & Vision
              </span>
            </div>

            <h2 className="text-3xl font-serif text-peacock-dark tracking-tight leading-snug">
              A Symphony of Art Deco Elegance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-base to-gold-dark">Peacock Grace</span>
            </h2>

            <p className="text-xs sm:text-sm text-peacock-dark/80 font-sans font-light leading-relaxed max-w-xl mx-auto">
              Gaur Alaris in Sector 22D, Yamuna Expressway represents the absolute pinnacle of high-rise luxury across 11.8 majestic acres with 8 iconic 34-storey towers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {cornerImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gold-base/30 group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/90 via-transparent to-transparent p-2.5 flex items-end">
                  <span className="text-[10px] text-cream-bg font-sans leading-tight line-clamp-2">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                setIsLoading(false);
                setFormData({ name: "", phone: "", email: "" });
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-lg cursor-pointer font-sans"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

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
                    Gaur Alaris Advisory
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

    </section>
  );
}