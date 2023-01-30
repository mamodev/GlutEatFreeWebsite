import Image from "next/image";
import Link from "next/link";
import Button from "../../components/core/Button/Button";
import Content from "../../components/core/Tipograpy/Content";
import Title from "../../components/core/Tipograpy/Title";
import Flex from "../../components/layout/Flex/Flex";
import image from "../../public/assets/images/common/logo-primary.png";
import styles from "./idea.module.scss";
export default function HomeIdeaSection() {
  return (
    <div className={styles.section_container}>
      <div className={styles.title_container}>
        <Title className={styles.title}>La nostra idea</Title>
      </div>
      <Flex className={styles.container} justify="space-between">
        <div className={styles.content}>
          <Content>
            Quando si hanno delle esigenze alimentari, anche uscire a mangiare
            può diventare un peso.
          </Content>
          <Content>
            È cercando una soluzione a questa situazione che è nata l&apos;idea
            di GlutEatFree: una piattaforma accessibile a tutti che permetta ai
            ristoranti inclusivi di farsi conoscere e che aiuti a combattere la
            disinformazione. Siamo partiti dalla celiachia e l&apos;intolleranza
            al glutine.
          </Content>
          <Content>
            È da questa esigenza alimentare infatti che è nata la nostra idea,
            vedendo e vivendo sulla nostra pelle non solo la mancanza di opzioni
            e le limitazioni che questo causa, ma anche la mancanza di
            consapevolezza e conoscenza del problema.
          </Content>
          <Link href="/about_us">
            <Button color="secondary">Scopri di più su di noi</Button>
          </Link>
        </div>

        <Image className={styles.image} src={image} alt="image"></Image>
      </Flex>
    </div>
  );
}
