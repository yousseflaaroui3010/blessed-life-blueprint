/**
 * BackToTop — "Open Shelf" Design
 * Appears after scrolling past the hero. Smooth scroll to top on click.
 */
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-navy text-white shadow-lg flex items-center justify-center hover:bg-amber hover:text-navy transition-all duration-200 hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
