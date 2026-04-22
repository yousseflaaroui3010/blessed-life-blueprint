/**
 * AssessmentsSection — "Open Shelf" Design
 * Assessment cards with expandable DNA checklists.
 * Uses the assessment section image as a visual accent.
 */
import { assessments as staticAssessments, type Assessment } from "@/lib/data";
import FadeInSection from "./FadeInSection";
import { useState } from "react";
import { Compass, ChevronDown, ChevronUp, ExternalLink, CheckCircle2 } from "lucide-react";

const ASSESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390020722/8ddoCusMxVxTD2N3FNSog8/assessment-section-HZDYrk9XM8PwJ8NnDnuUT2.webp";

function ExpandableCard({
  title,
  description,
  cta,
  items,
}: {
  title: string;
  description: string;
  cta: string;
  items: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
          {title}
        </h3>
        <p className="text-sm text-navy/60 leading-relaxed mb-5">
          {description}
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 bg-amber text-navy font-medium text-sm px-5 py-2.5 rounded-md hover:bg-amber-dark hover:text-white transition-colors"
        >
          {cta}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-6 md:px-8 py-6 bg-sand/30">
          <p className="text-xs uppercase tracking-widest text-navy/40 font-medium mb-4">
            Answer these questions to build your profile
          </p>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-amber shrink-0 mt-0.5"
                  size={16}
                />
                <span className="text-sm text-navy/70 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LinkCard({
  title,
  description,
  link,
  cta,
}: {
  title: string;
  description: string;
  link: string;
  cta: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 h-full flex flex-col">
      <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
        {title}
      </h3>
      <p className="text-sm text-navy/60 leading-relaxed mb-5 flex-1">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-amber text-navy font-medium text-sm px-5 py-2.5 rounded-md hover:bg-amber-dark hover:text-white transition-colors self-start"
      >
        {cta}
        <ExternalLink size={14} />
      </a>
    </div>
  );
}

export default function AssessmentsSection({ assessments = staticAssessments }: { assessments?: Assessment[] }) {
  return (
    <section id="assessments" className="py-20 md:py-28 bg-sand">
      <div className="container">
        <FadeInSection>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            {/* Section image */}
            <div className="lg:w-2/5 rounded-lg overflow-hidden max-h-56 lg:max-h-72 order-2 lg:order-1">
              <img
                src={ASSESS_IMG}
                alt="Self discovery tools"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Section header */}
            <div className="lg:w-3/5 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="text-amber" size={22} />
                <span className="text-amber text-xs font-medium uppercase tracking-widest">
                  Know Yourself
                </span>
              </div>
              <h2 className="section-heading text-3xl md:text-4xl font-serif text-navy mb-4">
                Assessments &amp; Self Discovery
              </h2>
              <p className="text-navy/60 leading-relaxed">
                You can't become the best version of yourself if you don't know
                who you are right now. These assessments changed my life and how
                I lead. Take them seriously.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Assessment cards */}
        <div className="space-y-6">
          {/* Link-based assessments in a 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assessments
              .filter((a) => a.type === "link")
              .map((a, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <LinkCard
                    title={a.title}
                    description={a.description}
                    link={a.link || "#"}
                    cta={a.cta}
                  />
                </FadeInSection>
              ))}
          </div>

          {/* Expandable DNA cards */}
          {assessments
            .filter((a) => a.type === "expandable")
            .map((a, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <ExpandableCard
                  title={a.title}
                  description={a.description}
                  cta={a.cta}
                  items={a.expandableContent || []}
                />
              </FadeInSection>
            ))}
        </div>
      </div>
    </section>
  );
}
