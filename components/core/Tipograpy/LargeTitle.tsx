import { composeClasses } from "../../../utils";
import styles from "./LargeTitle.module.scss";

export type LargeTitleProps = {
  children: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function LargeTitle(props: LargeTitleProps) {
  return (
    <h1
      style={props.style}
      className={composeClasses([styles.text, props.className])}
    >
      {props.children}
    </h1>
  );
}
