import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import PeopleSection from "@/components/PeopleSection";
import BooksSection from "@/components/BooksSection";
import VideosSection from "@/components/VideosSection";
import AISection from "@/components/AISection";
import AssessmentsSection from "@/components/AssessmentsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useContent } from "@/lib/useContent";

export default function Home() {
  const content = useContent();

  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <PeopleSection people={content.people} />
      <BooksSection books={content.books} />
      <VideosSection videos={content.videos} />
      <AISection
        aiTools={content.aiTools}
        aiEducation={content.aiEducation}
        facebookGroups={content.facebookGroups}
        aiLeaders={content.aiLeaders}
      />
      <AssessmentsSection assessments={content.assessments} />
      <Footer />
      <BackToTop />
    </div>
  );
}
