"use client";
import Content from "../../../components/core/Tipograpy/Content";
import Subtitle from "../../../components/core/Tipograpy/Subtitle";
import img from "../../../public/assets/images/about-us/header.png";
import { composeClasses } from "../../../utils";
import { motion } from "framer-motion";

import Title from "../../../components/core/Tipograpy/Title";
import Image from "next/image";
import chiara from "../../../public/assets/images/avatar/chiara.png";
import andrea from "../../../public/assets/images/avatar/andrea.png";
import isabella from "../../../public/assets/images/avatar/isabella.png";
import marco from "../../../public/assets/images/avatar/marco.png";
import matteo from "../../../public/assets/images/avatar/matteo.png";
import styles from "./team.module.scss";

export default function AboutUsTeam() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={styles.container}
    >
      <Title>Il team</Title>

      <div className={styles.avatar_container}>
        <div
          className={composeClasses([
            styles.avatar,
            styles.secondary,
            styles.down,
          ])}
        >
          <div className={styles.content_wrapper}>
            <div className={styles.image}>
              <Image src={chiara} alt="chiara" />
            </div>

            <div className={styles.info_container}>
              <p className={styles.name}>Chiara D&apos;ubaldi</p>
              <p className={styles.role}>Marketing and Brand Communications</p>
            </div>
          </div>
        </div>
        <div
          className={composeClasses([
            styles.avatar,
            styles.secondary,
            styles.up,
          ])}
        >
          <div className={styles.content_wrapper}>
            <div className={styles.image}>
              <Image src={andrea} alt="andrea" />
            </div>
            <div className={styles.info_container}>
              <p className={styles.name}>Andrea Stucchi</p>
              <p className={styles.role}>Market Analyst</p>
            </div>
          </div>
        </div>
        <div
          className={composeClasses([
            styles.avatar,
            styles.primary,
            styles.down,
          ])}
        >
          <div className={styles.content_wrapper}>
            <div className={styles.image}>
              <Image src={isabella} alt="isabella" />
            </div>
            <div className={styles.info_container}>
              <p className={styles.name}>Isabella Sala</p>
              <p className={styles.role}>Project Manager</p>
            </div>
          </div>
        </div>
        <div
          className={composeClasses([styles.avatar, styles.primary, styles.up])}
        >
          <div className={styles.content_wrapper}>
            <div className={styles.image}>
              <Image src={marco} alt="marco" />
            </div>

            <div className={styles.info_container}>
              <p className={styles.name}>Marco Morozzi</p>
              <p className={styles.role}>Frontend developer</p>
            </div>
          </div>
        </div>
        <div
          className={composeClasses([
            styles.avatar,
            styles.secondary,
            styles.down,
          ])}
        >
          <div className={styles.content_wrapper}>
            <div className={styles.image}>
              <Image src={matteo} alt="matteo" />
            </div>
            <div className={styles.info_container}>
              <p className={styles.name}>Matteo Giuntoni</p>
              <p className={styles.role}>Backend developer</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
