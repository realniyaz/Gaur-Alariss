"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Overview", href: "#overview" },
    { name: "Highlights", href: "#highlights" },
    { name: "Amenities", href: "#clubhouse" },
    { name: "Price", href: "#price" },
    { name: "Floor Plans", href: "#floorplans" },
    { name: "Location", href: "#location" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream-bg ${
        isScrolled ? "shadow-md py-3" : "py-3.5 border-b border-gold-base/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* 1. Brand Logo - Links directly to official website */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center cursor-pointer text-left focus:outline-none"
        >
          <div className="relative h-9 w-28 sm:w-36">
            <Image
              src="/logo.png"
              alt="Gaur Alaris Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* 2. Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button suppressHydrationWarning
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-xs uppercase tracking-wider font-sans text-peacock-dark hover:text-gold-base transition-colors cursor-pointer font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* 3. Desktop Action Buttons (Calling & WhatsApp CTA) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Calling Button */}
          <a
            href="tel:+919910374156"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-peacock-dark text-gold-light hover:bg-peacock-blue transition-all shadow-sm text-xs font-sans tracking-wide font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-gold-light animate-pulse shrink-0" />
            <span>+91 99103 74156</span>
          </a>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/917042080055/?text=Hi! 👋 I would like to know more about the Gaur Alaris  Sec 22 D project. Please share the latest price, available unit options, and complete project details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 transition-all text-xs font-sans font-semibold text-[#075E54]"
          >
            <div className="relative w-4 h-4 shrink-0">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            <span>WhatsApp Now</span>
          </a>
        </div>

        {/* Mobile View Header Actions */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="https://wa.me/917042080055/?text=Hi! 👋 I would like to know more about the Gaur Alaris  Sec 22 D project. Please share the latest price, available unit options, and complete project details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 text-[11px] font-sans font-semibold text-[#075E54]"
          >
            <div className="relative w-4 h-4 shrink-0">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-peacock-dark hover:bg-peacock-dark/5 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-cream-bg border-b border-gold-base/30 shadow-2xl py-5 px-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-xs uppercase tracking-wider font-sans text-peacock-dark hover:text-gold-base py-1.5 border-b border-gold-base/10 font-medium"
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:+919910374156"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-peacock-dark text-gold-light text-xs font-sans tracking-wide font-medium shadow-md"
            >
              <Phone className="w-4 h-4 text-gold-light" />
              <span>Call: +91 99103 74156</span>
            </a>

            <a
              href="https://wa.me/917042080055/?text=Hi! 👋 I would like to know more about the Gaur Alaris  Sec 22 D project. Please share the latest price, available unit options, and complete project details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-sans tracking-wide font-semibold shadow-md"
            >
              <div className="relative w-4 h-4">
                <Image src="/wh.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
              </div>
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}