"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-peacock-dark text-cream-bg pt-16 pb-8 border-t border-gold-base/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gold-base/20">
          
          {/* Column 1: Logo (White Background), Channel Partner & Description (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-36 h-12 bg-white rounded-lg p-2 border border-gold-base/30 flex items-center justify-center shadow-md">
                <Image
                  src="/logo.png"
                  alt="Gaur Alaris Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
            
            <div className="inline-block px-3 py-1 rounded-full bg-gold-base/20 border border-gold-base/40 text-[10px] uppercase tracking-[0.25em] text-gold-light font-sans font-semibold">
              Authorised Channel Partner
            </div>

            <p className="text-xs text-cream-bg/80 font-sans font-light leading-relaxed max-w-sm">
              Gaur Alaris in Sector 22D, Yamuna Expressway represents the absolute pinnacle of high-rise luxury living across 11.8 acres of architectural magnificence.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-light font-sans font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans text-cream-bg/80">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-gold-light transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("overview")} className="hover:text-gold-light transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("highlights")} className="hover:text-gold-light transition-colors cursor-pointer">
                  Highlights
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("clubhouse")} className="hover:text-gold-light transition-colors cursor-pointer">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("price")} className="hover:text-gold-light transition-colors cursor-pointer">
                  Pricing & Cost Sheet
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("floorplans")} className="hover:text-gold-light transition-colors cursor-pointer">
                  Floor Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("location")} className="hover:text-gold-light transition-colors cursor-pointer">
                  Location Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Other Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-light font-sans font-semibold">
              Compliance & Legal
            </h4>
            <ul className="space-y-2 text-xs font-sans text-cream-bg/80">
              <li>
                <Link href="/disclaimer" className="hover:text-gold-light transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gold-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-gold-light transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-cream-bg/60 font-sans leading-tight">
              *Disclaimer: Pricing and availability are subject to change without prior notice. Images are for illustrative purposes.
            </div>
          </div>

          {/* Column 4: Advisory Desk (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-light font-sans font-semibold">
              Priority Advisory Desk
            </h4>
            <div className="space-y-2.5 text-xs font-sans text-cream-bg/90">
              <a href="mailto:realtyfmleads@gmail.com" className="flex items-center gap-2.5 hover:text-gold-light transition-colors">
                <Mail className="w-4 h-4 text-gold-base shrink-0" />
                <span>realtyfmleads@gmail.com</span>
              </a>
              <a href="tel:+919910374156" className="flex items-center gap-2.5 hover:text-gold-light transition-colors">
                <Phone className="w-4 h-4 text-gold-base shrink-0" />
                <span>+91 99103 74156</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-gold-light transition-colors">
                <MessageSquare className="w-4 h-4 text-gold-base shrink-0" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright | RERA | Managed By */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-cream-bg/70 font-sans">
          
          {/* Left: Copyright */}
          <div>
            © {new Date().getFullYear()} Gaur Alaris. All Rights Reserved.
          </div>

          {/* Centre: RERA Number */}
          <div className="px-4 py-1.5 rounded-lg bg-peacock-blue/50 border border-gold-base/30 text-gold-light font-serif tracking-wider text-[11px]">
            RERA No: UPRERAPRJ950965/07/2026
          </div>

          {/* Right: Managed By */}
          <div className="flex items-center gap-1.5 justify-center">
            <span>Managed by</span>
            <strong className="text-gold-light tracking-wide font-sans">Marguax Tech</strong>
          </div>

        </div>

      </div>
    </footer>
  );
}