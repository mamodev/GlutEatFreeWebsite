import Button from "../../core/Button/Button";
import TextField from "../../core/TextField/TextField";
import SmallTitle from "../../core/Tipograpy/SmallTitle";
import Subtitle from "../../core/Tipograpy/Subtitle";
import Title from "../../core/Tipograpy/Title";
import Stack from "../../layout/Stack/Stack";
import styles from "./news-letter.module.scss";

export default function NewsLetter() {
  return (
    <div className={styles.container}>
      <Stack className={styles.text_container} spacing={20}>
        <Title className={styles.title}>NON PERDERTI LE PROSSIME NOVITÀ</Title>
        <Subtitle>ISCRIVITI ORA ALLA NEWSLETTER</Subtitle>
      </Stack>

      <Stack className={styles.form} spacing={10}>
        <SmallTitle className={styles.title}>Iscriviti</SmallTitle>
        <TextField placeholder="Nome" />
        <TextField placeholder="Email" />
        <Button color="secondary">Iscriviti</Button>
      </Stack>
    </div>
  );
}
