import { composeClasses } from "../../../utils";
import styles from "./Subtitle.module.scss";

export type SubtitleProps = {
  children: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function Subtitle(props: SubtitleProps) {
  return (
    <h1 style={props.style} className={composeClasses([styles.text, props.className])}>
      {props.children}
    </h1>
  );
}
