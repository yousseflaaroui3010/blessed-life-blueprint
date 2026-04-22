/**
 * AISection — "Open Shelf" Design
 * Sub-sections: AI Tools I Use, AI Education, Facebook Groups, People I Follow.
 * Dark navy banner with AI section image, then card grids.
 */
import {
  aiTools as staticAITools,
  aiEducation as staticAIEducation,
  facebookGroups as staticFacebookGroups,
  aiLeaders as staticAILeaders,
  type AITool,
  type AIEducation,
  type FacebookGroup,
  type AILeader,
} from "@/lib/data";
import FadeInSection from "./FadeInSection";
import {
  Bot,
  ExternalLink,
  GraduationCap,
  Users,
  UserCircle,
  Sparkles,
} from "lucide-react";

const AI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390020722/8ddoCusMxVxTD2N3FNSog8/ai-section-agjiUTCoggumxPicuuJcMN.webp";

function SubSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-xl md:text-2xl text-navy mb-6 flex items-center gap-3">
      {children}
    </h3>
  );
}

function PlaceholderCard({ label, icon: Icon }: { label: string; icon: React.ElementType }) {
  return (
    <div className="placeholder-card rounded-lg p-6 h-full flex flex-col items-center justify-center min-h-[140px]">
      <Icon className="text-gray-cool/40 mb-3" size={28} />
      <span className="text-sm text-gray-cool/60 font-medium">{label}</span>
    </div>
  );
}

export default function AISection({
  aiTools = staticAITools,
  aiEducation = staticAIEducation,
  facebookGroups = staticFacebookGroups,
  aiLeaders = staticAILeaders,
}: {
  aiTools?: AITool[];
  aiEducation?: AIEducation[];
  facebookGroups?: FacebookGroup[];
  aiLeaders?: AILeader[];
}) {
  return (
    <section id="ai" className="bg-linen">
      {/* Dark banner with image */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AI_IMG})` }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-amber" size={24} />
              <span className="text-amber text-xs font-medium uppercase tracking-widest">
                The Future of Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              AI Tools &amp; Education
            </h2>
            <p className="text-white/70 leading-relaxed max-w-2xl">
              AI is changing everything about how we work. These are the tools I
              use, the communities I'm part of, and the people I follow to stay
              ahead of the curve.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* AI Tools I Use */}
      <div className="container py-16">
        <FadeInSection>
          <SubSectionTitle>
            <Bot className="text-amber" size={22} />
            AI Tools I Use
          </SubSectionTitle>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {aiTools.map((tool, i) => (
            <FadeInSection key={i} delay={i * 80}>
              {tool.placeholder ? (
                <PlaceholderCard label={tool.name} icon={Bot} />
              ) : (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-serif text-lg text-navy">
                      {tool.name}
                    </h4>
                    <ExternalLink
                      size={14}
                      className="text-navy/30 group-hover:text-amber transition-colors"
                    />
                  </div>
                  <p className="text-sm text-navy/60 leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  <div className="mt-4 text-xs text-amber font-medium uppercase tracking-wider">
                    Visit →
                  </div>
                </a>
              )}
            </FadeInSection>
          ))}
        </div>

        {/* AI Education */}
        <FadeInSection>
          <SubSectionTitle>
            <GraduationCap className="text-amber" size={22} />
            AI Education &amp; Learning
          </SubSectionTitle>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {aiEducation.map((item, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <PlaceholderCard label={item.name} icon={GraduationCap} />
            </FadeInSection>
          ))}
        </div>

        {/* Facebook Groups */}
        <FadeInSection>
          <SubSectionTitle>
            <Users className="text-amber" size={22} />
            Facebook Groups for AI
          </SubSectionTitle>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {facebookGroups.map((item, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <PlaceholderCard label={item.name} icon={Users} />
            </FadeInSection>
          ))}
        </div>

        {/* People I Follow */}
        <FadeInSection>
          <SubSectionTitle>
            <UserCircle className="text-amber" size={22} />
            People I Follow in AI
          </SubSectionTitle>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiLeaders.map((item, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <PlaceholderCard label={item.name} icon={UserCircle} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
