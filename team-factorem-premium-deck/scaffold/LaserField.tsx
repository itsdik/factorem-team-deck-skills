"use client";

// Reusable title-card backdrop: blue->black field with slow-gliding laser beams.
// Wrap any slide's content in <LaserField>...</LaserField>. This is the cheapest way
// to get the "premium layered depth" look without hand-building gradients each time.

const BEAMS = [
  { top: "14%", w: "62%", dur: 19, delay: 0, color: "rgba(96,165,250,0.55)" },
  { top: "30%", w: "46%", dur: 24, delay: -7, color: "rgba(34,211,238,0.5)" },
  { top: "47%", w: "70%", dur: 21, delay: -13, color: "rgba(129,140,248,0.45)" },
  { top: "66%", w: "50%", dur: 27, delay: -4, color: "rgba(96,165,250,0.42)" },
  { top: "82%", w: "58%", dur: 23, delay: -16, color: "rgba(34,211,238,0.4)" },
];

export default function LaserField({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* layer 1: base diagonal gradient field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #1d4ed8 0%, #16306b 36%, #0a1530 64%, #02050d 100%)",
        }}
      />
      {/* layer 2: gliding beams */}
      <div className="absolute inset-0 overflow-hidden">
        {BEAMS.map((b, i) => (
          <div
            key={i}
            className="absolute left-0 right-0"
            style={{ top: b.top, transform: "rotate(-16deg)" }}
          >
            <div
              style={{
                width: b.w,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${b.color}, transparent)`,
                filter: "blur(1.5px)",
                boxShadow: `0 0 14px ${b.color}`,
                animation: `beamSlide ${b.dur}s linear infinite`,
                animationDelay: `${b.delay}s`,
              }}
            />
          </div>
        ))}
      </div>
      {/* layer 3: vignette scrim for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 50% 44%, transparent, rgba(2,5,13,0.5))",
        }}
      />
      {/* layer 4: content */}
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
