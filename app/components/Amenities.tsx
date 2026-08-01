"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const amenitiesData = [
  {
    id: 1,
    title: "Club Regalia Entrance",
    category: "Clubhouse",
    image: "/a1.png",
    desc: "Grand architectural arrival experience welcoming residents.",
  },
  {
    id: 2,
    title: "Opulent Swimming Pool",
    category: "Wellness",
    image: "/a2.png",
    desc: "Resort-style aquatic zone framed by lush tropical greens.",
  },
  {
    id: 3,
    title: "Fine Dining & Lounge",
    category: "Leisure",
    image: "/a3.png",
    desc: "Exclusive culinary spaces crafted for private gatherings.",
  },
  {
    id: 4,
    title: "State-of-the-Art Gymnasium",
    category: "Wellness",
    image: "/a4.png",
    desc: "Cutting-edge fitness studio equipped with elite training apparatus.",
  },
  {
    id: 5,
    title: "Peacock-Themed Landscape",
    category: "Greenery",
    image: "/a5.png",
    desc: "Breathtaking manicured lawns and water features.",
  },
  {
    id: 6,
    title: "Indoor Sports Arena",
    category: "Recreation",
    image: "/a6.png",
    desc: "Badminton courts, squash, and indoor gaming zones.",
  },
  {
    id: 7,
    title: "Spa & Wellness Sanctuary",
    category: "Wellness",
    image: "/a7.png",
    desc: "Tranquil retreat featuring therapeutic massage rooms and sauna.",
  },
  {
    id: 8,
    title: "Private Celebration Lawn",
    category: "Leisure",
    image: "/a8.png",
    desc: "Expansive open-air party lawns for grand events.",
  },
];

export default function Amenities() {
  return (
    <section id="clubhouse" className="relative w-full py-16 lg:py-32 bg-cream-bg text-peacock-dark overflow-hidden px-3 sm:px-6 lg:px-8">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-base/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-peacock-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-base/10 border border-gold-base/40 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold">
              Club Regalia & Lifestyle
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-peacock-dark tracking-tight leading-tight">
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-base to-gold-dark">Amenities</span>
          </h2>
          <p className="text-xs sm:text-base text-peacock-dark/80 font-sans font-light mt-2 sm:mt-3">
            Immerse yourself in 1,00,000 sq. ft. of curated recreational and wellness indulgence.
          </p>
        </div>


        {/* ========================================================= */}
        {/* GRID LAYOUT: 2 Images per row on Mobile (grid-cols-2) -> 4 per row on Desktop (lg:grid-cols-4) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {amenitiesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-gold-base/30 bg-peacock-dark group"
            >
              {/* Stable Static Image (Crystal Clear Render) */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/95 via-peacock-dark/30 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-cream-bg/20 backdrop-blur-md border border-gold-base/40 text-[8px] sm:text-[9px] uppercase tracking-widest text-gold-light font-sans font-semibold">
                  {item.category}
                </span>
              </div>

              {/* Title and Description at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4 space-y-0.5">
                <h3 className="text-xs sm:text-lg font-serif text-cream-bg font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="hidden sm:block text-[11px] text-cream-bg/75 font-sans font-light line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}