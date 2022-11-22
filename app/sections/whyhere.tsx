import Image from "next/image";
import Button from "../../components/core/Button/Button";
import Content from "../../components/core/Tipograpy/Content";
import Title from "../../components/core/Tipograpy/Title";
import Flex from "../../components/layout/Flex/Flex";
import Stack from "../../components/layout/Stack/Stack";
import image from "../../public/assets/images/home/table-bar.png";
import styles from "./whyhere.module.scss";

export default function HomeWhyHereSection() {
  return (
    <Stack align="start">
      <Title className={styles.title}>PERCHÈ SIAMO QUI</Title>
      <Flex className={styles.container} justify="left">
        <Image className={styles.image} src={image} alt="image" />
        <Stack spacing={20} className={styles.content}>
          <Content>
            In Italia si stima che l&apos;1% della popolazione sia celiaco, circa{" "}
            <strong>600.000</strong> persone. Tuttavia ci sono solamente <strong>233.147</strong>{" "}
            pazienti diagnosticati.
          </Content>
          <Content>
            Ad oggi l&apos; <strong>unica</strong> terapia riconosciuta è una rigorosa dieta senza
            glutine. E senza contaminazioni. Infatti se si soffre di celiachia basta una quantità{" "}
            <strong>minima</strong> di glutine per causare danni all&apos;intestino.
          </Content>
          <Content>
            Ma 3 italiani su 10 pensano ancora che una dieta senza glutine serva a dimagrire.
          </Content>
          <Button color="secondary">Scopri di più sulla celiachia</Button>
        </Stack>
      </Flex>
    </Stack>
  );
}
