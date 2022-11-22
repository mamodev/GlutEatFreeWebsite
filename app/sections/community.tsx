import Image from "next/image";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Title from "../../components/core/Tipograpy/Title";
import Stack from "../../components/layout/Stack/Stack";
import web_info from "../../public/assets/images/home/web-info.png";
import social_life from "../../public/assets/images/home/social-life.png";
import integration from "../../public/assets/images/home/integration.png";
import styles from "./community.module.scss";
import SmallTitle from "../../components/core/Tipograpy/SmallTitle";

const size = 400;
export default function HomeCommunitySection() {
  return (
    <Stack spacing={50}>
      <div style={{ padding: 2, textAlign: "center" }}>
        <Title style={{ textTransform: "none" }}>
          Benvenuto nella community dell&apos; inclusione alimentare,
        </Title>
        <Subtitle>perchè uscire a mangiare torni a essere un piacere per tutti.</Subtitle>
      </div>

      <div className={styles.grid}>
        <Image src={web_info} alt="vita_sociale" width={size} style={{ objectFit: "contain" }} />
        <Image src={integration} alt="info" width={size} style={{ objectFit: "contain" }} />
        <Image src={social_life} alt="inclusione" width={size} style={{ objectFit: "contain" }} />
        <SmallTitle>Informazione</SmallTitle>
        <SmallTitle>Inclusione</SmallTitle>
        <SmallTitle>Vita sociale</SmallTitle>
      </div>
    </Stack>
  );
}
