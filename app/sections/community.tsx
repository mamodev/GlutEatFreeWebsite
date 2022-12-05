import Image from "next/image";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Title from "../../components/core/Tipograpy/Title";
import web_info from "../../public/assets/images/home/web-info.png";
import social_life from "../../public/assets/images/home/social-life.png";
import integration from "../../public/assets/images/home/integration.png";
import styles from "./community.module.scss";
import SmallTitle from "../../components/core/Tipograpy/SmallTitle";

export default function HomeCommunitySection() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Title style={{ textTransform: "none" }}>
          Benvenuto nella community
        </Title>
        <Subtitle>
          Perchè uscire a mangiare torni a essere un piacere per tutti.
        </Subtitle>
      </div>

      <div className={styles.grid}>
        <div className={styles.grid__item}>
          <Image src={web_info} alt="vita_sociale" className={styles.image} />
          <SmallTitle>Informazione</SmallTitle>
        </div>
        <div className={styles.grid__item}>
          <Image src={integration} alt="info" className={styles.image} />
          <SmallTitle>Inclusione</SmallTitle>
        </div>
        <div className={styles.grid__item}>
          <Image src={social_life} alt="inclusione" className={styles.image} />
          <SmallTitle>Vita sociale</SmallTitle>
        </div>
      </div>
    </div>
  );
}
