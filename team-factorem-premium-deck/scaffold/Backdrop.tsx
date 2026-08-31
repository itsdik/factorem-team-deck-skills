"use client";

// Fixed ambient background for content slides — deep navy base, floating blue/violet
// orbs, faint dot grid. Mount once (e.g. in page.tsx behind <SlideDeck/>) for a calm,
// consistent canvas; or use <LaserField> per-slide for the more dramatic title look.

export default function Backdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* base vertical gradient: near-black top -> electric blue depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #050810 0%, #081226 45%, #0c1f42 100%)",
        }}
      />
      {/* glowing orbs */}
      <div
        className="absolute rounded-full"
        style={{
          width: "55vw",
          height: "55vw",
          top: "-15vw",
          right: "-10vw",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.28), transparent 65%)",
          filter: "blur(40px)",
          animation: "floatOrb 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "45vw",
          height: "45vw",
          bottom: "-12vw",
          left: "-8vw",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.20), transparent 65%)",
          filter: "blur(40px)",
          animation: "floatOrb 20s ease-in-out infinite reverse",
        }}
      />
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
