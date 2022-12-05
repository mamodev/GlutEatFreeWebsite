import Image from "next/image";
import Button from "../../components/core/Button/Button";
import Content from "../../components/core/Tipograpy/Content";
import LargeTitle from "../../components/core/Tipograpy/LargeTitle";
import image from "../../public/assets/images/home/table-bar.png";
import styles from "./whyhere.module.scss";

export default function HomeWhyHereSection() {
  return (
    <>
      <LargeTitle className={styles.title}>PERCHÈ SIAMO QUI</LargeTitle>
      <div className={styles.container}>
        <Image className={styles.image} src={image} alt="image" />
        <div className={styles.content}>
          <Content>
            In Italia si stima che l&apos;1% della popolazione sia celiaco,
            circa <strong>600.000</strong> persone. Tuttavia ci sono solamente{" "}
            <strong>233.147</strong> pazienti diagnosticati.
          </Content>
          <Content>
            Ad oggi l&apos; <strong>unica</strong> terapia riconosciuta è una
            rigorosa dieta senza glutine. E senza contaminazioni. Infatti se si
            soffre di celiachia basta una quantità <strong>minima</strong> di
            glutine per causare danni all&apos;intestino.
          </Content>
          <Content>
            Ma 3 italiani su 10 pensano ancora che una dieta senza glutine serva
            a dimagrire.
          </Content>
          <Button color="secondary">Scopri di più sulla celiachia</Button>
        </div>
      </div>
    </>
  );
}
