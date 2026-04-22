/**
 * MiscSection — "Open Shelf" Design
 * 6 placeholder cards for miscellaneous resources.
 * Each card has fields for title, description, link, and tag.
 */
import { miscResources } from "@/lib/data";
import FadeInSection from "./FadeInSection";
import { Bookmark } from "lucide-react";

export default function MiscSection() {
  return (
    <section id="misc" className="py-20 md:py-28 bg-linen">
      <div className="container">
        <FadeInSection>
          <h2 className="section-heading text-3xl md:text-4xl font-serif text-navy mb-4">
            Miscellaneous Resources
          </h2>
          <p className="text-navy/60 leading-relaxed mb-14 max-w-2xl">
            Everything else that doesn't fit neatly into a category but is still
            worth your time. If it's here, it's because I believe it can help
            you grow.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {miscResources.map((res, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div className="placeholder-card rounded-lg p-6 h-full flex flex-col items-center justify-center min-h-[160px]">
                <Bookmark className="text-gray-cool/40 mb-3" size={28} />
                <span className="text-sm text-gray-cool/60 font-medium mb-1">
                  {res.title}
                </span>
                <span className="text-xs text-gray-cool/40 bg-gray-cool/10 px-2 py-0.5 rounded-full">
                  {res.tag}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
