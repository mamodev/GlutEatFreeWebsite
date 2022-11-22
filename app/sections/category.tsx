import Image from "next/image";
import SmallContent from "../../components/core/Tipograpy/SmallContent";
import Button from "../../components/core/Button/Button";
import SmallTitle from "../../components/core/Tipograpy/SmallTitle";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Title from "../../components/core/Tipograpy/Title";
import Flex from "../../components/layout/Flex/Flex";
import Stack from "../../components/layout/Stack/Stack";
import styles from "./category.module.scss";

export default function HomeCategorySection() {
  return (
    <Stack align="center" spacing={100} className={styles.container}>
      <Stack spacing={20}>
        <Title>{"NÈ UNA MODA, NÈ UNA SCELTA, MA UNA MALATTIA"}</Title>
        <Subtitle>Scopri i nostri articoli per combattere gli stereotipi</Subtitle>
      </Stack>
      <Flex justify="space-between" style={{ paddingInline: 200, width: "100%" }}>
        <Card
          title="Categoria #"
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
        <Card
          title="Categoria #"
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
        <Card
          title="Categoria #"
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
        <Card
          title="Categoria #"
          image="https://via.placeholder.com/200x200.png?text=Article-Image"
        />
      </Flex>
      <Button size="large" color="secondary">
        Leggi per categoria
      </Button>
    </Stack>
  );
}

type CardProps = { title: string; image: string };
function Card({ title, image }: CardProps) {
  return (
    <Stack align="center" spacing={15} style={{ width: 300 }}>
      <Image src={image} alt="title" width={300} height={300} style={{ objectFit: "contain" }} />
      <Stack>
        <SmallTitle style={{ fontSize: 28 }}>{title}</SmallTitle>
      </Stack>
    </Stack>
  );
}
