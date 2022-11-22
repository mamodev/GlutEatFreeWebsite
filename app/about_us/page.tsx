import NewsLetter from "../../components/modules/NewsLetter/news-letter";
import HomeStatsSection from "../sections/stats";
import AboutUsAwareness from "./sections/awareness";
import AboutUsCeliacDiesase from "./sections/celiac-disease";
import AboutUsHeader from "./sections/header";
import AboutUsNetwork from "./sections/network";
import AboutUsServices from "./sections/services";
import AboutUsTeam from "./sections/team";
import styles from "./page.module.scss";
import AboutUsTheProblem from "./sections/the-problem";

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHeader />
      <div className={styles.sections_container}>
        <AboutUsNetwork />
        <AboutUsServices />
        <AboutUsAwareness />
        <AboutUsCeliacDiesase />
        {/* <AboutUsTheProblem /> */}
        <HomeStatsSection />
        <AboutUsTeam />
        <NewsLetter />
      </div>
    </>
  );
}
