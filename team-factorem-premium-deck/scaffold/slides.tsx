"use client";

// The slide registry — the deck's table of contents. Add one entry per slide, in
// running order. `id` powers deep-linking (#id) and AnimatePresence keys; `label`
// shows in your own notes/tooling. Keep slides as separate components in
// components/slides/ and import them here.

import SlideHero from "@/components/slides/SlideHero";
// import SlideProblem from "@/components/slides/SlideProblem";
// import SlideMarket from "@/components/slides/SlideMarket";
// import SlideAsk from "@/components/slides/SlideAsk";

export interface SlideEntry {
  id: string;
  label: string;
  node: React.ReactNode;
}

export const slides: SlideEntry[] = [
  { id: "hero", label: "Hero", node: <SlideHero /> },
  // { id: "problem", label: "The problem", node: <SlideProblem /> },
  // { id: "market", label: "Market", node: <SlideMarket /> },
  // { id: "ask", label: "The ask", node: <SlideAsk /> },
];
