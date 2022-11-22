import Button from "../../components/core/Button/Button";
import BigTitle from "../../components/core/Tipograpy/BigTitle";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Stack from "../../components/layout/Stack/Stack";
import styles from "./header.module.scss";

export default function HomeHeader() {
  return (
    <Stack className={styles.container} spacing={50} justify="center">
      <svg
        className={styles.svg}
        width="597"
        height="576"
        viewBox="0 0 597 576"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="500" cy="76" r="500" className={styles.svg__path} />
      </svg>

      <Stack spacing={20}>
        <BigTitle style={{ lineHeight: 1.4 }}>
          {"LA CELIACHIA NELLA VITA \nDI TUTTI I GIORNI"}
        </BigTitle>

        <Subtitle>Un nuovo inizio per un futuro di inclusione alimentare</Subtitle>
      </Stack>

      <Button size="large" variant="contained" color="secondary">
        Iscriviti alla Newsletter
      </Button>
    </Stack>
  );
}
