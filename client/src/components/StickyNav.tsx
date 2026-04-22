/**
 * StickyNav — "Open Shelf" Design · Best Life Blueprint (BLB)
 * Slim sticky top bar with section links. Active section highlighted with amber underline.
 * Mobile: hamburger menu that slides down.
 */
import { navSections } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function StickyNav() {
  const activeId = useScrollSpy(
    navSections.map((s) => s.id),
    100
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-linen/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-navy text-lg tracking-tight hover:text-amber transition-colors"
        >
          BLB
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`relative text-sm font-medium uppercase tracking-widest transition-colors pb-1 ${
                activeId === s.id
                  ? "text-navy"
                  : "text-navy/50 hover:text-navy/80"
              }`}
            >
              {s.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-amber transition-all duration-200 ${
                  activeId === s.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-navy p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-linen/98 backdrop-blur-md border-t border-border pb-4">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`block w-full text-left px-6 py-3 text-sm font-medium uppercase tracking-widest transition-colors ${
                activeId === s.id
                  ? "text-amber bg-sand/50"
                  : "text-navy/60 hover:text-navy"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
