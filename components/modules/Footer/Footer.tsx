import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "../../../public/assets/images/common/logo-white.png";
import Flex from "../../layout/Flex/Flex";
import NavLink from "../../core/NavLink/NavLink";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Flex spacing={20}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about_us">Chi siamo?</NavLink>
        <NavLink href="/discover">Scopri di più</NavLink>
      </Flex>
      <Image src={logo} className={styles.logo} alt="footer_logo" />
    </div>
  );
}
