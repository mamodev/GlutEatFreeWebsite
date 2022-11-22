import Image from "next/image";
import Flex from "../../layout/Flex/Flex";
import longLogo from "../../../public/assets/images/long-logo.png";

import styles from "./Appbar.module.scss";
import NavLink from "../../core/NavLink/NavLink";
import Button from "../../core/Button/Button";

export default function Appbar() {
  return (
    <div id="appbar">
      <div className={styles.spacer}></div>
      <div className={styles["appbar-container"]}>
        <Image src={longLogo} alt="Appbar logo" className={styles.logo} />

        <div className={styles.navigation}>
          <Flex spacing={40}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about_us">Chi siamo</NavLink>
            <NavLink href="/discover">Scopri di più</NavLink>
          </Flex>
          <Flex spacing={8}>
            <Flex spacing={10}>
              <Button color="secondary">Iscriviti alla Newsletter</Button>
              {/* <Button color="secondary">Registrati</Button>
              <Button color="secondary" variant="outlined">
                Accedi
              </Button> */}
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
}
