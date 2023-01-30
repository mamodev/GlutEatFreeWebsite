import { composeClasses } from "../../../utils";
import styles from "./Button.module.scss";

export type ButtonSize = "normal" | "large" | "small";
export type ButtonVariant = "contained" | "outlined";
export type ButtonColor = "primary" | "secondary";
export type ButtonProps = {
  disabled?: boolean;
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "contained",
    color = "primary",
    size = "normal",
    onClick,
    disabled,
  } = props;

  const buttonClasses = composeClasses([
    styles.button,
    styles[color],
    styles[variant],
    styles[size],
  ]);

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
