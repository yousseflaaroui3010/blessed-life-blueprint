import { useState, useEffect } from "react";
import {
  people as staticPeople,
  books as staticBooks,
  videos as staticVideos,
  aiTools as staticAITools,
  aiEducation as staticAIEducation,
  facebookGroups as staticFacebookGroups,
  aiLeaders as staticAILeaders,
  assessments as staticAssessments,
  type Person,
  type Book,
  type Video,
  type AITool,
  type AIEducation,
  type FacebookGroup,
  type AILeader,
  type Assessment,
} from "./data";
import { isSanityConfigured } from "./sanityClient";
import {
  fetchPeople,
  fetchBooks,
  fetchVideos,
  fetchAITools,
  fetchAIEducation,
  fetchFacebookGroups,
  fetchAILeaders,
  fetchAssessments,
} from "./sanityQueries";

export interface SiteContent {
  people: Person[];
  books: Book[];
  videos: Video[];
  aiTools: AITool[];
  aiEducation: AIEducation[];
  facebookGroups: FacebookGroup[];
  aiLeaders: AILeader[];
  assessments: Assessment[];
  isLoading: boolean;
  source: "static" | "sanity";
}

const staticContent: Omit<SiteContent, "isLoading" | "source"> = {
  people: staticPeople,
  books: staticBooks,
  videos: staticVideos,
  aiTools: staticAITools,
  aiEducation: staticAIEducation,
  facebookGroups: staticFacebookGroups,
  aiLeaders: staticAILeaders,
  assessments: staticAssessments,
};

export function useContent(): SiteContent {
  const [content, setContent] = useState<SiteContent>({
    ...staticContent,
    isLoading: isSanityConfigured,
    source: "static",
  });

  useEffect(() => {
    if (!isSanityConfigured) return;

    Promise.all([
      fetchPeople(),
      fetchBooks(),
      fetchVideos(),
      fetchAITools(),
      fetchAIEducation(),
      fetchFacebookGroups(),
      fetchAILeaders(),
      fetchAssessments(),
    ])
      .then(([people, books, videos, aiTools, aiEducation, facebookGroups, aiLeaders, assessments]) => {
        setContent({
          people: people.length ? people : staticPeople,
          books: books.length ? books : staticBooks,
          videos: videos.length ? videos : staticVideos,
          aiTools: aiTools.length ? aiTools : staticAITools,
          aiEducation: aiEducation.length ? aiEducation : staticAIEducation,
          facebookGroups: facebookGroups.length ? facebookGroups : staticFacebookGroups,
          aiLeaders: aiLeaders.length ? aiLeaders : staticAILeaders,
          assessments: assessments.length ? assessments : staticAssessments,
          isLoading: false,
          source: "sanity",
        });
      })
      .catch(() => {
        // Sanity unavailable — keep static fallback, stop loading spinner
        setContent((prev) => ({ ...prev, isLoading: false }));
      });
  }, []);

  return content;
}
