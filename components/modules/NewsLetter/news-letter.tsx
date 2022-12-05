import Button from "../../core/Button/Button";
import TextField from "../../core/TextField/TextField";
import SmallTitle from "../../core/Tipograpy/SmallTitle";
import Subtitle from "../../core/Tipograpy/Subtitle";
import Title from "../../core/Tipograpy/Title";
import styles from "./news-letter.module.scss";

export default function NewsLetter() {
  return (
    <section className={styles.container}>
      <div className={styles.text_container}>
        <Title className={styles.title}>NON PERDERTI LE NOVITÀ</Title>
        <Subtitle className={styles.subtitle}>
          Iscriviti alla Newsletter!
        </Subtitle>
      </div>

      <form className={styles.form}>
        <SmallTitle className={styles.form__title}>Iscriviti</SmallTitle>
        <TextField id="first_name" placeholder="Nome" />
        <TextField id="email" placeholder="Email" type="email" />
        <Button color="secondary">Iscriviti</Button>
      </form>
    </section>
  );
}
