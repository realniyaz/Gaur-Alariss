"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Building2, MapPin, ArrowRight, Loader2 } from "lucide-react";

const banners = ["/banner_1.png", "/banner1.png", "/banner2.png", "/banner3.png"];

export default function Hero() {
  const router = useRouter();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", countryCode: "+91", phone: "" });
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
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          phone: `${formData.countryCode} ${formData.phone}`, 
          planType: "Hero Section Cost Sheet Enquiry" 
        }),
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

  const whatsappMessage = encodeURIComponent(
    "Hi! 👋 I would like to know more about the Gaur Alaris Sec 22 D project. Please share the latest price, available unit options, and complete project details."
  );

  return (
    <section id="hero" className="relative w-full min-h-screen bg-peacock-dark pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
      
      {/* ========================================================= */}
      {/* 1. DESKTOP VIEW: Previous Side-by-Side Layout with Slideshow */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 hidden lg:block">
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
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/95 via-peacock-dark/60 to-peacock-dark/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden lg:grid relative z-10 max-w-7xl mx-auto w-full grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Column */}
        <div className="col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-bg/10 border border-gold-base/40 shadow-lg backdrop-blur-md">
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
            <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-peacock-dark/50 border border-gold-base/30 backdrop-blur-md shadow-lg">
              <Building2 className="w-5 h-5 text-gold-light shrink-0" />
              <span className="text-sm text-cream-bg font-sans font-medium">8 Iconic Towers</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-peacock-dark/50 border border-gold-base/30 backdrop-blur-md shadow-lg">
              <MapPin className="w-5 h-5 text-gold-light shrink-0" />
              <span className="text-sm text-cream-bg font-sans font-medium">Near Jewar Airport</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="px-6 py-3 rounded-2xl bg-peacock-dark/60 border border-gold-base/40 backdrop-blur-md shadow-xl text-center">
              <span className="block text-[10px] uppercase tracking-widest text-gold-light font-sans">Investment</span>
              <span className="text-xl font-serif text-cream-bg font-semibold">₹1.36 Cr* Onwards</span>
            </div>

            <button
              onClick={() => scrollToSection("price")}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-2xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2 font-sans"
            >
              <span>Explore Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-span-5 bg-cream-bg text-peacock-dark p-8 rounded-3xl shadow-2xl border border-gold-base/50 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold">
                Priority Access Desk
              </span>
              <h3 className="text-2xl font-serif text-peacock-dark mt-1">Request Official Cost Sheet</h3>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-peacock-dark/80 mb-1 font-sans font-medium">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-gold-base/30 rounded-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-peacock-dark/80 mb-1 font-sans font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gold-base/30 rounded-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-peacock-dark/80 mb-1 font-sans font-medium">Phone Number *</label>
              <div className="flex">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 border-gold-base/30 bg-cream-bg text-peacock-dark text-xs sm:text-sm focus:outline-none focus:border-gold-base cursor-pointer font-sans"
                >
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US/CA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+971">+971 (UAE)</option>
                </select>
                <input
                  suppressHydrationWarning
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-gold-base/30 rounded-r-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all font-sans"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.15em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
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

              <a
                href={`https://wa.me/917042080055?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-[0.15em] uppercase shadow-md transition-all cursor-pointer font-sans flex items-center justify-center gap-2 shrink-0"
              >
                <div className="relative w-4 h-4">
                  <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </form>
        </div>

      </div>

      {/* Slide Navigation Dots for Desktop */}
      <div className="relative z-20 hidden lg:flex items-center justify-center gap-2 mt-8">
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


      {/* ========================================================= */}
      {/* 2. MOBILE VIEW: Standalone Image Banner then Details & Form */}
      {/* ========================================================= */}
      <div className="block lg:hidden relative z-10 w-full space-y-8 pt-2">
        
        {/* Crisp Cinematic Banner Display */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gold-base/40 bg-peacock-dark">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={banners[currentBanner]}
                alt="Gaur Alaris Elevation"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Slide Navigation Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-peacock-dark/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold-base/30">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBanner(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentBanner === idx ? "w-5 bg-gold-light" : "w-1.5 bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Details Below Image */}
        <div className="text-center space-y-3 px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cream-bg/10 border border-gold-base/40 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-gold-light" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-sans font-medium">
              Sector 22D, YEIDA • Ultra-Luxury
            </span>
          </div>
          <h1 className="text-3xl font-serif text-cream-bg drop-shadow-md">
            GAUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-base to-gold-light">ALARIS</span>
          </h1>
          <p className="text-xs text-cream-bg/90 font-sans font-light max-w-sm mx-auto leading-relaxed">
            Magnificent 3 & 4 BHK high-rise living across 8 iconic towers. Designed around the royal grace of the peacock motif.
          </p>
        </div>

        {/* Specification Summary Cards */}
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <div className="p-3 rounded-2xl bg-peacock-blue/40 border border-gold-base/30 text-center shadow-lg">
            <span className="block text-[9px] uppercase tracking-wider text-gold-light font-sans">Architecture</span>
            <span className="text-xs text-cream-bg font-serif font-medium">8 Iconic Towers</span>
          </div>
          <div className="p-3 rounded-2xl bg-peacock-blue/40 border border-gold-base/30 text-center shadow-lg">
            <span className="block text-[9px] uppercase tracking-wider text-gold-light font-sans">Investment</span>
            <span className="text-xs text-cream-bg font-serif font-semibold">₹1.36 Cr* Onwards</span>
          </div>
        </div>

        {/* Contact Form Below Details */}
        <div className="max-w-md mx-auto w-full bg-cream-bg text-peacock-dark p-6 rounded-3xl shadow-2xl border border-gold-base/50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-base font-sans font-semibold">
                Priority Access
              </span>
              <h3 className="text-xl font-serif text-peacock-dark mt-0.5">Request Cost Sheet</h3>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-peacock-dark/80 mb-1 font-sans font-medium">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-gold-base/30 rounded-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-peacock-dark/80 mb-1 font-sans font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gold-base/30 rounded-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-peacock-dark/80 mb-1 font-sans font-medium">Phone Number *</label>
              <div className="flex">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 border-gold-base/30 bg-cream-bg text-peacock-dark text-xs sm:text-sm focus:outline-none focus:border-gold-base cursor-pointer font-sans"
                >
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US/CA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+971">+971 (UAE)</option>
                </select>
                <input
                  suppressHydrationWarning
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-gold-base/30 rounded-r-xl px-4 py-2.5 text-sm text-peacock-dark placeholder-peacock-dark/30 focus:outline-none focus:border-gold-base transition-all font-sans"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.15em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
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

              <a
                href={`https://wa.me/917042080055?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-[0.15em] uppercase shadow-md transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
              >
                <div className="relative w-4 h-4">
                  <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </form>
        </div>

      </div>

    </section>
  );
}