import Image from "next/image";
import SmallTitle from "../../../components/core/Tipograpy/SmallTitle";
import bookingImg from "../../../public/assets/images/about-us/booking-service.png";
import securityImg from "../../../public/assets/images/about-us/security.png";
import infoImg from "../../../public/assets/images/about-us/info.png";
import styles from "./services.module.scss";
import { motion } from "framer-motion";

export default function AboutUsServices() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image alt="booking-service" src={bookingImg} />
        <SmallTitle>SERVIZIO DI PRENOTAZIONE</SmallTitle>
      </div>
      <div className={styles.item}>
        <Image alt="securuty" src={securityImg} />
        <SmallTitle>SICUREZZA E TRASPARENZA</SmallTitle>
      </div>
      <div className={styles.item}>
        <Image alt="info" src={infoImg} />
        <SmallTitle>PRESENTAZIONE DEL RISTORATORE</SmallTitle>
      </div>
    </div>
  );
}
