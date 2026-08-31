"use client";

// ONE EXCELLENT EXAMPLE — a hero slide that shows every premium move.
// Rename to SlideHero.tsx and adapt the copy. Read the layer comments: the depth
// comes from STACKED absolute layers, not one flat background.

import { motion } from "framer-motion";
import Wordmark from "@/components/Wordmark";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function SlideHero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* LAYER 1 — base diagonal gradient field (royal blue -> navy -> black) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1e40af 0%, #16306b 38%, #0a1838 68%, #03060f 100%)",
        }}
      />

      {/* LAYER 2 — off-center radial glow accent (warm, low) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 72% 78%, rgba(94,234,212,0.12), transparent 40%)",
        }}
      />

      {/* LAYER 3 — two slow gliding beams (ambient motion; needs @keyframes beamSlide) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { top: "26%", dur: 26, delay: 0 },
          { top: "68%", dur: 32, delay: -12 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute left-0 right-0"
            style={{ top: b.top, transform: "rotate(-13deg)" }}
          >
            <div
              style={{
                width: "55%",
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, rgba(120,180,255,0.35), transparent)",
                filter: "blur(2px)",
                boxShadow: "0 0 16px rgba(120,180,255,0.35)",
                animation: `beamSlide ${b.dur}s linear infinite`,
                animationDelay: `${b.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* LAYER 4 — left scrim so the title stays legible over the busy field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,6,15,0.78) 0%, rgba(3,6,15,0.45) 34%, transparent 60%)",
        }}
      />

      {/* LAYER 5 — brand lockup */}
      <div className="absolute left-12 top-10 z-10">
        <Wordmark className="h-9" />
      </div>

      {/* LAYER 6 — content, choreographed with stagger */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full items-center px-16"
      >
        <div className="max-w-3xl">
          {/* kicker — tracked, uppercase, with a hairline rule */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-blue-200/80"
          >
            <span className="h-px w-8 bg-blue-200/50" />
            {"<KICKER · UPPERCASE>"}
          </motion.div>

          {/* headline — display bold + Playfair serif italic on the emotional word */}
          <motion.h1 variants={staggerItem} className="mt-7 leading-[0.95]">
            <span className="block font-display text-7xl font-bold text-white">
              The factory floor,
            </span>
            <span
              className="block font-serif text-7xl italic"
              style={{ color: "#f3e4d0" }}
            >
              reimagined.
            </span>
          </motion.h1>

          {/* ONE gradient "money" line — reserve .text-gradient for a single hero stat */}
          <motion.p
            variants={staggerItem}
            className="mt-8 font-display text-2xl font-semibold"
          >
            <span className="text-gradient">{"<REAL_METRIC>"}</span>
            <span className="text-blue-100/70"> {"<context for the number>"}</span>
          </motion.p>

          {/* supporting copy — Inter, relaxed, with a serif-italic emphasis */}
          <motion.p
            variants={fadeInUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-blue-100/75"
          >
            Factorem turns a CAD file into a delivered part through an{" "}
            <em className="font-serif italic text-white">AI-native</em> supply
            network — faster quotes, tighter margins, global reach.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
