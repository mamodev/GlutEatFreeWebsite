import React from "react";
import { composeClasses } from "../../../utils";
import styles from "./Content.module.scss";

export type ContentProps = {
  children: string | React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export default function Content(props: ContentProps) {
  return (
    <h1 style={props.style} className={composeClasses([styles.text, props.className])}>
      {props.children}
    </h1>
  );
}
