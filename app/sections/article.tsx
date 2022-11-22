import Image from "next/image";
import SmallContent from "../../components/core/Tipograpy/SmallContent";
import Button from "../../components/core/Button/Button";
import SmallTitle from "../../components/core/Tipograpy/SmallTitle";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Title from "../../components/core/Tipograpy/Title";
import Flex from "../../components/layout/Flex/Flex";
import Stack from "../../components/layout/Stack/Stack";
import styles from "./article.module.scss";
export default function HomeArticleSection() {
  return (
    <Stack align="center" spacing={100} className={styles.container}>
      <Stack spacing={20}>
        <Title>{"UNA MAGGIORE CONSAPEVOLEZZA\nPER UNA MAGGIORE INCLUSIONE"}</Title>
        <Subtitle>Leggi gli ultimi articoli del nostro blog</Subtitle>
      </Stack>
      <Flex justify="space-between" style={{ paddingInline: 200, width: "100%" }}>
        <Card
          title="Titolo articolo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
        <Card
          title="Titolo articolo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
        <Card
          title="Titolo articolo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
        <Card
          title="Titolo articolo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
      </Flex>
      <Button size="large" color="secondary">
        Vedi più articoli
      </Button>
    </Stack>
  );
}

type CardProps = { title: string; description: string; image: string };
function Card({ title, description, image }: CardProps) {
  return (
    <Stack align="center" spacing={15} style={{ width: 300 }}>
      <Image src={image} alt="title" width={300} height={300} style={{ objectFit: "contain" }} />
      <Stack>
        <SmallTitle style={{ fontSize: 28 }}>{title}</SmallTitle>
        <SmallContent>{description}</SmallContent>
      </Stack>
    </Stack>
  );
}
