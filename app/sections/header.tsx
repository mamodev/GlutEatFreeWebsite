import Image from "next/image";
import LargeTitle from "../../components/core/Tipograpy/LargeTitle";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import logo from "../../public/assets/images/common/logo-primary.png";
import styles from "./header.module.scss";

export default function HomeHeader() {
  return (
    <div className={styles.container}>
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

      <Image src={logo} alt="logo" className={styles.logo} />
      <div className={styles.content}>
        <div className={styles.text_container}>
          <LargeTitle>{"CELIACHIA E INCLUSIONE ALIMENTARE"}</LargeTitle>
          <Subtitle>Tutto il mondo senza glutine ma non per moda</Subtitle>
        </div>
        {/* <Button size="large" variant="contained" color="secondary">
          Iscriviti alla Newsletter
        </Button> */}
      </div>
    </div>
  );
}
