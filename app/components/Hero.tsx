"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Building2, MapPin, ArrowRight, Loader2 } from "lucide-react";

const banners = ["/banner_1.png", "/banner1.png", "/banner2.png", "/banner3.png"];

export default function Hero() {
  const router = useRouter();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  // Cinematic background slideshow every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, planType: "Hero Section Cost Sheet Enquiry" }),
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-peacock-dark pt-24 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden">
      
      {/* ========================================================= */}
      {/* 1. FULL-SCREEN BACKGROUND SLIDESHOW (100% Width & Height) */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${banners[currentBanner]})` }}
            />
            {/* Elegant Royal Peacock Blue Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/95 via-peacock-dark/50 to-peacock-dark/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP VIEW: Side-by-Side Layout */}
      {/* ========================================================= */}
      <div className="hidden lg:grid relative z-10 max-w-7xl mx-auto w-full grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Column */}
        <div className="col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-bg/10 border border-gold-base/40 shadow-md backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-light font-sans font-medium">
              Sector 22D, YEIDA • Ultra-Luxury Residences
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-serif text-cream-bg tracking-tight leading-[1.1] drop-shadow-md">
            GAUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-base to-gold-light">ALARIS</span>
          </h1>

          <p className="text-base text-cream-bg/90 font-sans tracking-wide max-w-xl font-light leading-relaxed">
            Magnificent 3 & 4 BHK high-rise living across 8 iconic towers (34 storeys). Designed around the royal grace of the peacock motif.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 max-w-lg">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-peacock-dark/40 border border-gold-base/30 backdrop-blur-md shadow-lg">
              <Building2 className="w-4 h-4 text-gold-light shrink-0" />
              <span className="text-xs text-cream-bg font-sans font-medium">8 Iconic Towers</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-peacock-dark/40 border border-gold-base/30 backdrop-blur-md shadow-lg">
              <MapPin className="w-4 h-4 text-gold-light shrink-0" />
              <span className="text-xs text-cream-bg font-sans font-medium">Near Jewar Airport</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="px-5 py-2.5 rounded-xl bg-peacock-dark/40 border border-gold-base/40 backdrop-blur-sm shadow-lg">
              <span className="block text-[9px] uppercase tracking-widest text-gold-light font-sans">Investment</span>
              <span className="text-lg font-serif text-cream-bg font-semibold">₹1.36 Cr* Onwards</span>
            </div>

            <button
              onClick={() => scrollToSection("price")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2 font-sans"
            >
              <span>Explore Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-span-5 bg-cream-bg text-peacock-dark p-6 rounded-2xl shadow-2xl border border-gold-base/50">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="text-center mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-base font-sans font-semibold">
                Priority Access Desk
              </span>
              <h3 className="text-xl font-serif text-peacock-dark mt-0.5">Request Official Cost Sheet</h3>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-peacock-dark/70 mb-1 font-sans">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-gold-base/30 rounded-xl px-3.5 py-2.5 text-xs text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-peacock-dark/70 mb-1 font-sans">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gold-base/30 rounded-xl px-3.5 py-2.5 text-xs text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-peacock-dark/70 mb-1 font-sans">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 Enter your number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-gold-base/30 rounded-xl px-3.5 py-2.5 text-xs text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-1 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Get Instant Details</span>
              )}
            </button>
          </form>
        </div>

      </div>


      {/* ========================================================= */}
      {/* 3. MOBILE & TABLET VIEW */}
      {/* ========================================================= */}
      <div className="block lg:hidden relative z-10 w-full flex flex-col justify-between h-full pt-2 min-h-[82vh]">
        
        <div className="text-center space-y-1.5 px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peacock-dark/40 border border-gold-base/40 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-gold-light" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-sans font-medium">
              Sector 22D, YEIDA • Ultra-Luxury
            </span>
          </div>
          <h1 className="text-3xl font-serif text-cream-bg drop-shadow-md">
            GAUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-base to-gold-light">ALARIS</span>
          </h1>
        </div>

        <div className="flex-1 my-auto" />

        <div className="space-y-3 mt-auto">
          
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-xl bg-peacock-dark/30 border border-gold-base/40 text-center shadow-lg backdrop-blur-md">
              <span className="block text-[8px] uppercase tracking-wider text-gold-light font-sans">Architecture</span>
              <span className="text-xs text-cream-bg font-serif font-medium">8 Iconic Towers</span>
            </div>
            <div className="p-2.5 rounded-xl bg-peacock-dark/30 border border-gold-base/40 text-center shadow-lg backdrop-blur-md">
              <span className="block text-[8px] uppercase tracking-wider text-gold-light font-sans">Investment</span>
              <span className="text-xs text-cream-bg font-serif font-semibold">₹1.36 Cr* Onwards</span>
            </div>
          </div>

          <div className="bg-cream-bg text-peacock-dark p-4 rounded-2xl shadow-2xl border border-gold-base/50">
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="text-center mb-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold-base font-sans font-semibold">
                  Priority Access
                </span>
                <h3 className="text-base font-serif text-peacock-dark">Request Cost Sheet</h3>
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-gold-base/30 rounded-lg px-3 py-2 text-xs text-peacock-dark placeholder-peacock-dark/40 focus:outline-none focus:border-gold-base transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-gold-base/30 rounded-lg px-3 py-2 text-xs text-peacock-dark placeholder-peacock-dark/40 focus:outline-none focus:border-gold-base transition-all"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-gold-base/30 rounded-lg px-3 py-2 text-xs text-peacock-dark placeholder-peacock-dark/40 focus:outline-none focus:border-gold-base transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-[11px] tracking-[0.15em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Get Instant Details</span>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Slide Indicators at bottom */}
      <div className="relative z-20 flex items-center justify-center gap-2 mt-4">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentBanner(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              currentBanner === idx ? "w-8 bg-gold-base" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}