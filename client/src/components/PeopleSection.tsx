/**
 * PeopleSection — "Open Shelf" Design
 * Cards for each person Jon follows and learns from.
 * Circular avatar (photo or styled initials), name, title, description, links.
 */
import { people as staticPeople, type Person } from "@/lib/data";
import FadeInSection from "./FadeInSection";
import { Users2, ExternalLink, Youtube, Star } from "lucide-react";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function PersonCard({ person, index }: { person: Person; index: number }) {
  return (
    <FadeInSection delay={index * 80}>
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          {person.imageUrl ? (
            <img
              src={person.imageUrl}
              alt={person.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-amber/30 shrink-0"
              loading="lazy"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-amber/15 ring-2 ring-amber/30 flex items-center justify-center shrink-0">
              <span className="text-navy font-serif text-xl font-bold">
                {getInitials(person.name)}
              </span>
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg text-navy leading-snug">
                {person.name}
              </h3>
              {person.isOwner && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-amber border border-amber/40 bg-amber/8 px-1.5 py-0.5 rounded-full shrink-0">
                  <Star size={9} className="fill-amber" />
                  Curator
                </span>
              )}
            </div>
            <p className="text-xs text-amber font-medium mt-0.5 uppercase tracking-wide">
              {person.title}
            </p>
          </div>
        </div>

        <p className="text-sm text-navy/65 leading-relaxed flex-1 italic">
          "{person.description}"
        </p>

        <div className="flex gap-4 mt-4 pt-4 border-t border-sand">
          {person.youtubeUrl && (
            <a
              href={person.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-navy/55 hover:text-amber transition-colors font-medium"
            >
              <Youtube size={14} />
              YouTube
            </a>
          )}
          {person.websiteUrl && (
            <a
              href={person.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-navy/55 hover:text-amber transition-colors font-medium"
            >
              <ExternalLink size={14} />
              Website
            </a>
          )}
        </div>
      </div>
    </FadeInSection>
  );
}

export default function PeopleSection({ people = staticPeople }: { people?: Person[] }) {
  return (
    <section id="people" className="bg-sand">
      {/* Dark intro banner */}
      <div className="bg-navy py-16 md:py-20">
        <div className="container">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-4">
              <Users2 className="text-amber" size={24} />
              <span className="text-amber text-xs font-medium uppercase tracking-widest">
                Learn From the Best
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              People I Follow &amp; Learn From
            </h2>
            <p className="text-white/70 leading-relaxed max-w-2xl">
              You become the average of the people you surround yourself with.
              These are the voices I keep coming back to — men and women whose
              principles, mindset, and work ethic I study and try to apply every
              day.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Person cards */}
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {people.map((person, i) => (
            <PersonCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
