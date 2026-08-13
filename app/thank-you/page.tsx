"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { CheckCircle2, ArrowLeft, Phone, Sparkles } from "lucide-react";

export default function ThankYouPage() {
  const router = useRouter();

  // Automatically redirect back to home after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 8000);
    return () => clearTimeout(timer);
  }, [router]);

  const whatsappMessage = encodeURIComponent(
    "Hi! 👋 I would like to know more about the Gaur Alaris Sec 22 D project. Please share the latest price, available unit options, and complete project details."
  );

  return (
    <main className="relative w-full min-h-screen bg-cream-bg text-peacock-dark flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Google Ads Conversion Event Snippet with Window Safety Check */}
      <Script id="google-conversion-snippet" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('event', 'conversion', {'send_to': 'AW-18243414829/S1AyCPOR0sAcEK3WkftD'});
        `}
      </Script>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-base/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-gold-base/40 text-center relative z-10 space-y-6">
        
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-gold-light via-gold-base to-gold-dark flex items-center justify-center shadow-xl">
          <CheckCircle2 className="w-10 h-10 text-peacock-dark animate-bounce" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-base/10 border border-gold-base/40">
          <Sparkles className="w-3 h-3 text-gold-dark" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-sans font-semibold">
            Priority Registration Confirmed
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-serif text-peacock-dark">
            Thank <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-base to-gold-dark">You!</span>
          </h1>
          <p className="text-xs sm:text-sm text-peacock-dark/75 font-sans font-light leading-relaxed">
            Your enquiry has been successfully registered. Our luxury property advisor will connect with you shortly with the official cost sheet and floor plans.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 space-y-3">
          
          {/* Call Advisor */}
          <a
            href="tel:+919910374156"
            className="w-full py-3 rounded-xl bg-peacock-dark text-gold-light font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:bg-peacock-blue transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Advisor Now</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/917042080055?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-[0.2em] uppercase shadow-md transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
          >
            <div className="relative w-4 h-4">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            <span>Chat on WhatsApp</span>
          </a>

          {/* Return to Website */}
          <Link
            href="/"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-light via-gold-base to-gold-dark text-peacock-dark font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:opacity-95 transition-all cursor-pointer font-sans flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Website</span>
          </Link>

        </div>

        <div className="text-[10px] text-peacock-dark/50 font-sans">
          You will be redirected automatically in a few seconds...
        </div>

      </div>

    </main>
  );
}