"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { composeClasses } from "../../../utils";

import styles from "./NavLink.module.scss";

export type LinkProps = {
  children: string;
  href: string;
};

export default function NavLink({ children, href }: LinkProps) {
  const path = usePathname();
  const linkClasses = [styles.link];
  if (path === href) {
    linkClasses.push(styles.active);
  }
  return (
    <NextLink href={href} className={composeClasses(linkClasses)}>
      {children}
    </NextLink>
  );
}
