/**
 * VideosSection — "Open Shelf" Design
 * Cards with video/channel title, description, and clickable link.
 * Alternating sand background for visual rhythm.
 */
import { videos as staticVideos, type Video } from "@/lib/data";
import FadeInSection from "./FadeInSection";
import { Play, ExternalLink } from "lucide-react";

export default function VideosSection({ videos = staticVideos }: { videos?: Video[] }) {
  return (
    <section id="videos" className="py-20 md:py-28 bg-sand">
      <div className="container">
        <FadeInSection>
          <h2 className="section-heading text-3xl md:text-4xl font-serif text-navy mb-4">
            YouTube &amp; Video Content
          </h2>
          <p className="text-navy/60 leading-relaxed mb-14 max-w-2xl">
            These are channels, talks, and videos I keep coming back to. If
            you're going to scroll, scroll through something that makes you
            better.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video, i) => (
            <FadeInSection key={i} delay={i * 80}>
              {video.placeholder ? (
                <div className="placeholder-card rounded-lg p-6 h-full flex flex-col items-center justify-center min-h-[140px]">
                  <Play className="text-gray-cool/40 mb-3" size={28} />
                  <span className="text-sm text-gray-cool/60 font-medium">
                    {video.title}
                  </span>
                </div>
              ) : (
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-amber/10 transition-colors">
                      <Play className="text-amber" size={18} />
                    </div>
                    <h3 className="font-serif text-lg text-navy leading-snug">
                      {video.title}
                    </h3>
                  </div>
                  <p className="text-sm text-navy/60 leading-relaxed flex-1">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-4 text-amber text-xs font-medium uppercase tracking-wider">
                    Watch on YouTube
                    <ExternalLink size={12} />
                  </div>
                </a>
              )}
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
