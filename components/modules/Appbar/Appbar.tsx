"use client";
import Image from "next/image";
import React from "react";
import drawerLogo from "../../../public/assets/images/common/logo-white.png";
import longLogo from "../../../public/assets/images/long-logo.png";
import { composeClasses } from "../../../utils";
import NavLink from "../../core/NavLink/NavLink";
import styles from "./Appbar.module.scss";

export default function Appbar() {
  const [scrolled, setScrolled] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const menuButtonClickHandler = () => {
    setMenuOpen((open) => (open ? false : open));
  };

  const scrollHandler = React.useCallback((event: Event) => {
    console.log(event);
    if (window.scrollY > 50) setScrolled(true);
    else setScrolled(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <nav
      className={composeClasses([
        styles.nav,
        scrolled ? styles.scrolled : undefined,
      ])}
    >
      <div className={styles.container}>
        <Image src={longLogo} alt="Appbar logo" className={styles.logo} />

        <div
          className={composeClasses([
            styles.menu,
            menuOpen ? styles.open : undefined,
          ])}
        >
          <Image
            src={drawerLogo}
            alt="Drawer logo"
            className={styles.drawer_logo}
          />
          <span>
            <NavLink href="/" onClick={menuButtonClickHandler}>
              Home
            </NavLink>
          </span>
          <span>
            <NavLink href="/about_us" onClick={menuButtonClickHandler}>
              Chi siamo
            </NavLink>
          </span>
          <span>
            <NavLink href="/discover" onClick={menuButtonClickHandler}>
              Scopri di più
            </NavLink>
          </span>
          {/* <span>
            <Button color="secondary" onClick={menuButtonClickHandler}>
              Iscriviti alla Newsletter
            </Button>
          </span> */}
        </div>

        <button
          className={composeClasses([
            styles.burger,
            menuOpen ? styles.open : undefined,
          ])}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
