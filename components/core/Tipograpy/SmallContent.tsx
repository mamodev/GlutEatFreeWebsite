import { composeClasses } from "../../../utils";
import styles from "./SmallContent.module.scss";
export type SmallContentProps = {
  children: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function SmallContent(props: SmallContentProps) {
  return (
    <h1 style={props.style} className={composeClasses([styles.text, props.className])}>
      {props.children}
    </h1>
  );
}
