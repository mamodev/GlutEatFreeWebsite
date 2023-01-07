import Content from "../../../components/core/Tipograpy/Content";
import Image from "next/image";
import Title from "../../../components/core/Tipograpy/Title";
import img from "../../../public/assets/images/about-us/network.png";
import styles from "./network.module.scss";

export default function AboutUsNetwork() {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image alt="header-image" src={img} className={styles.image} />
      </div>

      <div className={styles.paragraph}>
        <Title className={styles.title}>
          IL NETWORK DI RISTORANTI INCLUSIVI
        </Title>
        <div className={styles.content_container}>
          <Content className={styles.subtitle}>Come vogliamo aiutare?</Content>
          <Content>
            Creando un network di ristoranti inclusivi: un posto dove non solo i
            celiaci, ma anche i loro parenti e amici possano cercare e prenotare
            un pasto in compagnia in ristoranti che offrano opzioni sicure, per
            le diverse esigenze alimentari, inclusa la celiachia.
          </Content>
          <Content>
            Ma soprattutto vogliamo offrire agli stessi ristoranti che hanno
            un’offerta per diverse esigenze alimentari una vetrina, dove possono
            loro stessi presentarsi, e spiegare quali misure utilizzano per
            assicurare la sicurezza dei loro piatti.
          </Content>
        </div>
      </div>
    </div>
  );
}
