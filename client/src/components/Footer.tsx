/**
 * Footer — "Open Shelf" Design · Best Life Blueprint (BLB)
 * Simple footer with attribution and optional contact line.
 */
export default function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="container text-center">
        <div className="w-10 h-0.5 bg-amber mx-auto mb-6 rounded-full" />
        <p className="text-white/90 font-serif text-lg mb-1">
          Best Life Blueprint
        </p>
        <p className="text-white/50 text-xs leading-relaxed max-w-md mx-auto">
          Curated by Jon Westrom — everything I've learned, used, and shared to
          help people become the best version of themselves.
        </p>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-white/30 text-xs">
            Have something I should add?{" "}
            <span className="text-amber/70">Text me.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
