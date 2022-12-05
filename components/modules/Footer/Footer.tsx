import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "../../../public/assets/images/common/logo-white.png";
import NavLink from "../../core/NavLink/NavLink";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.link_container}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about_us">Chi siamo?</NavLink>
        <NavLink href="/discover">Scopri di più</NavLink>
      </div>
      <Image src={logo} className={styles.logo} alt="footer_logo" />
    </div>
  );
}
