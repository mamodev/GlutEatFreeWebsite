import NewsLetter from "../components/modules/NewsLetter/news-letter";
import HomeArticleSection from "./sections/article";
import HomeCommunitySection from "./sections/community";
import HomeHeader from "./sections/header";
import HomeIdeaSection from "./sections/idea";
import HomeStatsSection from "./sections/stats";
import HomeWhyHereSection from "./sections/whyhere";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.spacer}>
      <HomeHeader />
      <HomeCommunitySection />
      <HomeIdeaSection />
      <HomeArticleSection />
      <HomeWhyHereSection />
      <HomeStatsSection />
      <NewsLetter />
    </div>
  );
}
