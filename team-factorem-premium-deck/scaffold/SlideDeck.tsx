"use client";

// The deck controller. Owns ALL chrome: keyboard nav, touch swipe, progress bar,
// slide counter, deep-linking (#slide-id), fullscreen (F), and the persistent brand
// lockup. Slides themselves stay dumb — they just render. Drop this in unchanged.

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "@/lib/slides";
import { slideTransition } from "@/lib/animations";

export default function SlideDeck() {
  const [index, setIndex] = useState(0);
  const lock = useRef(false);
  const total = slides.length;

  const go = useCallback(
    (dir: number) => {
      if (lock.current) return; // debounce so one keypress = one slide
      lock.current = true;
      setIndex((i) => Math.min(Math.max(i + dir, 0), total - 1));
      window.setTimeout(() => {
        lock.current = false;
      }, 480);
    },
    [total]
  );

  const jump = useCallback(
    (n: number) => setIndex(Math.min(Math.max(n, 0), total - 1)),
    [total]
  );

  // deep-link: open directly on a slide via #slide-id
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const i = slides.findIndex((s) => s.id === id);
    if (i >= 0) jump(i);
  }, [jump]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " ", "Spacebar"].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        jump(0);
      } else if (e.key === "End") {
        jump(total - 1);
      } else if (e.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, jump, total]);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const accent = "linear-gradient(100deg,#5eead4,#3b82f6 55%,#a855f7)";

  return (
    <main
      className="relative h-screen w-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          variants={slideTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0"
        >
          {slides[index].node}
        </motion.div>
      </AnimatePresence>

      {/* persistent brand lockup — hide on self-branded opening slides (index > 1).
          Put your logo at /public/images/factorem-logo-white.png */}
      {index > 1 && (
        <div className="pointer-events-none fixed left-9 top-7 z-50 opacity-85">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/factorem-logo-white.png"
            alt="Factorem"
            className="h-9 w-auto"
          />
          <p className="mt-2 font-display text-[10px] uppercase tracking-[0.28em] text-muted">
            Powering the Future of Hardware
          </p>
        </div>
      )}

      {/* progress bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-1 bg-white/5">
        <motion.div
          className="h-full"
          style={{ background: accent }}
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* counter + arrows */}
      <div className="fixed bottom-4 right-6 z-50 flex items-center gap-3 text-sm text-muted">
        <button
          onClick={() => go(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/[0.03] transition-colors hover:text-ink"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <span className="font-display tabular-nums">
          {index + 1} / {total}
        </span>
        <button
          onClick={() => go(1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/[0.03] transition-colors hover:text-ink"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </main>
  );
}
