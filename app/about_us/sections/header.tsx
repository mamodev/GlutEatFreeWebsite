import Content from "../../../components/core/Tipograpy/Content";
import Subtitle from "../../../components/core/Tipograpy/Subtitle";
import img from "../../../public/assets/images/about-us/header.png";
import styles from "./header.module.scss";
import Image from "next/image";
import LargeTitle from "../../../components/core/Tipograpy/LargeTitle";

export default function AboutUsHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.title_container}>
          <LargeTitle>UNA VISIONE DI INCLUSIONE ALIMENTARE</LargeTitle>
          <Subtitle>Così che tutti possano mangiare liberamente</Subtitle>
        </div>
        <div className={styles.text_container}>
          <Content>
            Poter uscire a mangiare con amici, parenti o colleghi, senza la
            paura di stare male, il disagio e l&apos;ansia di essere di peso, a
            prescidere da esigenze alimentari come la celiachia. Vogliamo
            favorire la diffusione di una cultura inclusiva anche a tavola,
            aumentando l&apos;informazione e la visibilità dei ristoranti e
            delle offerte disponibili.
          </Content>
        </div>
      </div>

      <div className={styles.image_container}>
        <Image alt="header-image" src={img} className={styles.image} />
      </div>
    </div>
  );
}
