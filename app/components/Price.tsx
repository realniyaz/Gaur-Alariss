"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, X, ShieldCheck, Loader2 } from "lucide-react";

const pricingData = [
  {
    type: "3 BHK Luxury",
    size: "1,550 Sq. Ft.",
    price: "₹1.36 Cr*",
    bsp: "₹8,499 per sq. ft.",
    config: "3 Bedrooms + 3 Bathrooms + Balconies",
    highlights: [
        "Spacious living & dining opening to wide deck balconies",
        "Designer modular kitchen with premium utility space",
        "Master bedroom with laminated wooden flooring",
        "High-speed elevators and dedicated parking"
    ],
    popular: true
  },
  {
    type: "4 BHK Ultra-Luxury",
    size: "1,950 Sq. Ft.",
    price: "₹1.71 Cr*",
    bsp: "₹8,499 per sq. ft.",
    config: "4 Bedrooms + 4 Bathrooms + Servant Room",
    highlights: [
        "Grand master suite with walk-in wardrobe space",
        "Multi-side open views overlooking 8 acres of greens",
        "Private elevator lobby option for elite privacy",
        "Ultra-premium imported marble flooring"
    ],
    popular: false
  }
];

export default function Price() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
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
        body: JSON.stringify({ ...formData, planType: selectedPlan }),
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

  const handleOpenModal = (planType: string) => {
    setSelectedPlan(planType);
    setIsLoading(false);
    setFormData({ name: "", phone: "", email: "" });
    setIsModalOpen(true);
  };

  return (
    <section id="price" className="relative w-full py-20 lg:py-32 bg-peacock-dark text-cream-bg overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-peacock-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-base/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-bg/10 border border-gold-base/40 mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-light font-sans font-medium">
              Investment & Pricing
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-cream-bg tracking-tight leading-tight">
            Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-base to-gold-light">Cost Structure</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-bg/80 font-sans font-light mt-3">
            Transparent pricing for ultra-luxury 3 & 4 BHK residences at Sector 22D, Yamuna Expressway.
          </p>

          {/* MOBILE NAV TABS */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-8">
            {pricingData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx as 0 | 1)}
                className={`px-6 py-2.5 rounded-xl text-xs font-sans tracking-wider uppercase transition-all cursor-pointer font-bold ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-gold-light to-gold-base text-peacock-dark shadow-lg scale-105"
                    : "bg-peacock-blue/40 border border-gold-base/30 text-cream-bg hover:bg-peacock-blue/60"
                }`}
              >
                {item.type}
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative bg-peacock-blue/60 backdrop-blur-md rounded-3xl p-8 border ${
                item.popular ? "border-gold-base shadow-2xl ring-2 ring-gold-base/30" : "border-gold-base/30 shadow-xl"
              } flex flex-col justify-between`}
            >
              {item.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-light to-gold-base text-peacock-dark text-[10px] uppercase tracking-[0.25em] font-bold font-sans shadow-md">
                  Most Preferred Choice
                </div>
              )}

              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-gold-base/20">
                  <h3 className="text-2xl font-serif text-cream-bg font-semibold">{item.type}</h3>
                  <span className="inline-block mt-2 px-3.5 py-1 rounded-full bg-cream-bg/10 text-gold-light text-xs font-sans tracking-wide">
                    Size: {item.size}
                  </span>
                </div>

                <div className="text-center py-4 bg-peacock-dark/50 rounded-2xl border border-gold-base/30">
                  <span className="block text-[10px] uppercase tracking-widest text-gold-light font-sans mb-1">Starting Investment</span>
                  <div className="text-4xl font-serif text-cream-bg font-bold tracking-tight">{item.price}</div>
                  <span className="text-[11px] text-cream-bg/60 font-sans mt-1 block">BSP: {item.bsp}</span>
                </div>

                <div className="space-y-3">
                  <span className="block text-xs uppercase tracking-wider text-gold-light font-sans font-semibold">Configuration & Layout:</span>
                  <p className="text-xs text-cream-bg/90 font-sans">{item.config}</p>

                  <span className="block text-xs uppercase tracking-wider text-gold-light font-sans font-semibold pt-2">Key Highlights:</span>
                  <ul className="space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-cream-bg/80 font-sans">
                        <ShieldCheck className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-gold-base/20">
                <button
                  onClick={() => handleOpenModal(item.type)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:scale-[1.02] transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
                >
                  <span>Request Official Cost Sheet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE & TABLET VIEW */}
        <div className="block lg:hidden max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative bg-peacock-blue/70 backdrop-blur-md rounded-2xl p-6 border border-gold-base/50 shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="text-center pb-4 border-b border-gold-base/20">
                  <h3 className="text-xl font-serif text-cream-bg font-semibold">{pricingData[activeTab].type}</h3>
                  <span className="inline-block mt-1.5 px-3 py-0.5 rounded-full bg-cream-bg/10 text-gold-light text-[11px] font-sans">
                    Size: {pricingData[activeTab].size}
                  </span>
                </div>

                <div className="text-center py-3 bg-peacock-dark/50 rounded-xl border border-gold-base/30">
                  <span className="block text-[9px] uppercase tracking-widest text-gold-light font-sans mb-0.5">Starting Investment</span>
                  <div className="text-3xl font-serif text-cream-bg font-bold tracking-tight">{pricingData[activeTab].price}</div>
                  <span className="text-[10px] text-cream-bg/60 font-sans mt-0.5 block">BSP: {pricingData[activeTab].bsp}</span>
                </div>

                <div className="space-y-2.5">
                  <span className="block text-[11px] uppercase tracking-wider text-gold-light font-sans font-semibold">Configuration:</span>
                  <p className="text-xs text-cream-bg/90 font-sans">{pricingData[activeTab].config}</p>

                  <span className="block text-[11px] uppercase tracking-wider text-gold-light font-sans font-semibold pt-1">Highlights:</span>
                  <ul className="space-y-1.5">
                    {pricingData[activeTab].highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-[11px] text-cream-bg/80 font-sans">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold-light shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-gold-base/20">
                <button
                  onClick={() => handleOpenModal(pricingData[activeTab].type)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.15em] uppercase shadow-lg cursor-pointer font-sans flex items-center justify-center gap-2"
                >
                  <span>Request Cost Sheet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* COST SHEET REQUEST MODAL */}
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
                    Gaur Alaris Pricing Desk
                  </span>
                  <h3 className="text-2xl font-serif text-peacock-dark mt-1">Get {selectedPlan} Cost Sheet</h3>
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
                    <span>Download Cost Sheet</span>
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