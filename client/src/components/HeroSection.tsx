/**
 * HeroSection — Best Life Blueprint (BLB)
 * Jon's ocean panorama as full-bleed hero background.
 * Image is dark/moody sky + water → use WHITE text for contrast.
 */

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390020722/8ddoCusMxVxTD2N3FNSog8/hero-ocean_d9d30c18.jpeg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image — full cover */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-navy/55" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Amber accent bar */}
          <div className="w-12 h-1.5 bg-amber rounded-full mb-8" />

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Best Life
            <br />
            <span className="text-amber">Blueprint</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 font-medium mb-6 leading-relaxed">
            Everything I've read, used, watched, studied, and shared to become
            the best version of myself — all in one place.
          </p>

          <p className="text-base text-white/70 leading-relaxed max-w-xl">
            This is my personal playbook. The books that rewired my thinking,
            the content that pushed me to grow, the AI tools that changed how I
            work, and the assessments that helped me understand who I really am.
            Take what serves you. Share what helps someone else.
          </p>

          <p className="text-sm text-white/50 mt-4">
            — Jon Westrom
          </p>

          {/* Scroll hint */}
          <div className="mt-12 flex items-center gap-3 text-white/40">
            <div className="w-px h-8 bg-amber/60" />
            <span className="text-xs uppercase tracking-widest font-medium">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
