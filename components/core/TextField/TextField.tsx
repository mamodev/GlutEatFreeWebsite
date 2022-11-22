import React, { InputHTMLAttributes } from "react";
import styles from "./TextField.module.scss";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({ ...inputProps }, _ref) => {
  return (
    <div className={styles.container}>
      <input ref={_ref} {...inputProps} />
    </div>
  );
});

TextField.displayName = "TextField";

export default TextField;
