import { composeClasses } from "../../../utils";
import styles from "./SmallTitle.module.scss";

export type BigTitleProps = {
  children: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function SmallTitle(props: BigTitleProps) {
  return (
    <h1 style={props.style} className={composeClasses([styles.text, props.className])}>
      {props.children}
    </h1>
  );
}
