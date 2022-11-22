import Content from "../../../components/core/Tipograpy/Content";
import Subtitle from "../../../components/core/Tipograpy/Subtitle";
import img from "../../../public/assets/images/about-us/laptop.png";
import Image from "next/image";
import Title from "../../../components/core/Tipograpy/Title";
import styles from "./awareness.module.scss";

export default function AboutUsAwareness() {
  return (
    <div className={styles.container}>
      <div className={styles.paragraph}>
        <Title className={styles.title}>
          MAGGIORE CONSAPEVOLEZZA PER MAGGIORE INCLUSIONE
        </Title>
        <div className={styles.content_container}>
          <Content>
            Oltre all’impatto sulla vita sociale e la poca visibilità delle
            risorse già presenti, un altro problema con il quale i celiaci si
            trovano a fare i conti è la disinformazione.
          </Content>
          <Content>
            La celiachia è circondata da falsi miti e informazioni errate sulla
            celiachia stessa e sul glutine, che causano danni, e a volte mettono
            a rischio la salute dei celiaci.
          </Content>
          <Content>
            Per questo parte della nostra missione è fare informazione. Come?
            Grazie al nostro blog e ai nostri social, semplificando quando e
            quanto possibile queste informazioni, così da renderle accessibili a
            tutti, non solo a chi è affetto da celiachia!
          </Content>
        </div>
      </div>
      <div className={styles.image_container}>
        <Image alt="header-image" src={img} className={styles.image} />
      </div>
    </div>
  );
}
