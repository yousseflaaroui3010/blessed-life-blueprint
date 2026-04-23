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

function LinkCard({ name, url, description, icon: Icon }: {
  name: string;
  url?: string;
  description: string;
  icon: React.ElementType;
}) {
  const inner = (
    <div className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-serif text-lg text-navy">{name}</h4>
        {url && (
          <ExternalLink size={14} className="text-navy/30 group-hover:text-amber transition-colors" />
        )}
      </div>
      <p className="text-sm text-navy/60 leading-relaxed flex-1">{description}</p>
      {url && (
        <div className="mt-4 text-xs text-amber font-medium uppercase tracking-wider">Visit →</div>
      )}
    </div>
  );

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
      {inner}
    </a>
  ) : (
    <div className="h-full flex flex-col">{inner}</div>
  );
}

function SubSection({
  items,
  title,
  icon: Icon,
}: {
  items: { name: string; url?: string; description: string; placeholder?: boolean }[];
  title: React.ReactNode;
  icon: React.ElementType;
}) {
  const real = items.filter((item) => !item.placeholder);
  if (real.length === 0) return null;

  return (
    <>
      <FadeInSection>
        <SubSectionTitle>{title}</SubSectionTitle>
      </FadeInSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {real.map((item, i) => (
          <FadeInSection key={i} delay={i * 80}>
            <LinkCard name={item.name} url={item.url} description={item.description} icon={Icon} />
          </FadeInSection>
        ))}
      </div>
    </>
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
  const realTools = aiTools.filter((t) => !t.placeholder);

  return (
    <section id="ai" className="bg-linen">
      {/* Dark banner with image */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${AI_IMG})` }} />
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

      <div className="container py-16">
        {/* AI Tools I Use */}
        {realTools.length > 0 && (
          <>
            <FadeInSection>
              <SubSectionTitle>
                <Bot className="text-amber" size={22} />
                AI Tools I Use
              </SubSectionTitle>
            </FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {realTools.map((tool, i) => (
                <FadeInSection key={i} delay={i * 80}>
                  <LinkCard name={tool.name} url={tool.url} description={tool.description} icon={Bot} />
                </FadeInSection>
              ))}
            </div>
          </>
        )}

        {/* AI Education */}
        <SubSection
          items={aiEducation}
          icon={GraduationCap}
          title={<><GraduationCap className="text-amber" size={22} />AI Education &amp; Learning</>}
        />

        {/* Facebook Groups */}
        <SubSection
          items={facebookGroups}
          icon={Users}
          title={<><Users className="text-amber" size={22} />Facebook Groups for AI</>}
        />

        {/* AI Leaders */}
        <SubSection
          items={aiLeaders}
          icon={UserCircle}
          title={<><UserCircle className="text-amber" size={22} />People I Follow in AI</>}
        />
      </div>
    </section>
  );
}
