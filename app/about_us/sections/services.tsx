import Image from "next/image";
import SmallTitle from "../../../components/core/Tipograpy/SmallTitle";
import bookingImg from "../../../public/assets/images/about-us/booking-service.png";
import securityImg from "../../../public/assets/images/about-us/security.png";
import infoImg from "../../../public/assets/images/about-us/info.png";
import styles from "./services.module.scss";

export default function AboutUsServices() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image alt="booking-service" src={bookingImg} />
        <SmallTitle className={styles.text}>
          SERVIZIO DI PRENOTAZIONE
        </SmallTitle>
      </div>
      <div className={styles.item}>
        <Image alt="securuty" src={securityImg} />
        <SmallTitle className={styles.text}>SICUREZZA E TRASPARENZA</SmallTitle>
      </div>
      <div className={styles.item}>
        <Image alt="info" src={infoImg} />
        <SmallTitle className={styles.text}>
          PRESENTAZIONE DEL RISTORATORE
        </SmallTitle>
      </div>
    </div>
  );
}
