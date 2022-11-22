import Subtitle from "../../../components/core/Tipograpy/Subtitle";
import Title from "../../../components/core/Tipograpy/Title";
import Button from "../../../components/core/Button/Button";
import styles from "./celiac-disease.module.scss";
import Content from "../../../components/core/Tipograpy/Content";
export default function AboutUsCeliacDiesase() {
  return (
    <div className={styles.container}>
      <Title>LA CELIACHIA E LA STORIA DI TANTI, LA NOSTRA STORIA</Title>
      <Content>
        La celiachia, oltre a richiedere attenzioni particolari che non sempre i ristoratori sono in
        grado di dare, è anche circondata da stereotipi e informazioni errate. Perché iniziare dalla
        celiachia? Perché viviamo le conseguenze sulla nostra pelle. In tanti ci hanno raccontato le
        loro difficoltà con le quali vivono. La loro storia è anche la nostra: la viviamo sulla
        nostra pelle e su quella dei nostri familiari, ed è per questo che abbiamo deciso di
        iniziare proprio da qui.
      </Content>
      <Button color="secondary" size="large">
        Cos’è la celiachia?
      </Button>
    </div>
  );
}