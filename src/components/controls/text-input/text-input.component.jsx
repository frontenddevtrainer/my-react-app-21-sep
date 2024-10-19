import { forwardRef, useRef } from "react";
import styles from "./text-input.module.css";

const TextInput = forwardRef(
  ({ label, type = "text", change = () => {}, name = "", value }, ref) => {
    return (
      <p className={styles["text-row"]}>
        <label>{label}</label>
        <input type={type} ref={ref} name={name} onChange={change} />
      </p>
    );
  }
);

export default TextInput;
