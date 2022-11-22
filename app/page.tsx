import Stack from "../components/layout/Stack/Stack";
import NewsLetter from "../components/modules/NewsLetter/news-letter";
import HomeArticleSection from "./sections/article";
import HomeCategorySection from "./sections/category";
import HomeCommunitySection from "./sections/community";
import HomeHeader from "./sections/header";
import HomeIdeaSection from "./sections/idea";
import HomeStatsSection from "./sections/stats";
import HomeWhyHereSection from "./sections/whyhere";

export default function HomePage() {
  return (
    <Stack style={{ paddingBottom: 100 }}>
      <HomeHeader />
      <Stack spacing={200}>
        <HomeCommunitySection />
        <HomeIdeaSection />
        <HomeArticleSection />
        <HomeWhyHereSection />
        <HomeStatsSection />
        <HomeCategorySection />
        <NewsLetter />
      </Stack>
    </Stack>
  );
}
