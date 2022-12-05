import SmallContent from "../../components/core/Tipograpy/SmallContent";
import Button from "../../components/core/Button/Button";
import SmallTitle from "../../components/core/Tipograpy/SmallTitle";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Title from "../../components/core/Tipograpy/Title";
import Stack from "../../components/layout/Stack/Stack";
import styles from "./article.module.scss";
import Image, { StaticImageData } from "next/image";
import img from "../../public/assets/images/home/article.png";

export default function HomeArticleSection() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Title>{"MAGGIORE CONSAPEVOLEZZA\nPER MAGGIORE INCLUSIONE"}</Title>
        <Subtitle>Leggi gli ultimi articoli del nostro blog</Subtitle>
      </div>
      <div className={styles.card_container}>
        <Card
          title="Benvenuti in GlutEatFree"
          description="Iniziamo insieme un nuovo percorso per un futuro di inclusione alimentare"
          image={img}
        />
        <Card
          title="La celiachia"
          description="Cos’è la celiachia?"
          image={img}
        />
        <Card
          title="Non solo celiachia "
          description="La celiachia non è l’unico disturbo legato all’ingestione di glutine: facciamo chiarezza"
          image={img}
        />
        <Card
          title="I sintomi"
          description="Come si manifesta la celiachia?"
          image={img}
        />
      </div>
      <Button size="large" color="secondary">
        Vedi più articoli
      </Button>
    </div>
  );
}

type CardProps = { title: string; description: string; image: StaticImageData };
function Card({ title, description, image }: CardProps) {
  return (
    <Stack className={styles.card}>
      <Image src={image} alt="title" className={styles.image} />
      <div>
        <SmallTitle>{title}</SmallTitle>
        <SmallContent>{description}</SmallContent>
      </div>
    </Stack>
  );
}
