import styles from "./text-input.module.css";

console.log(styles);

const TextInput = ({ label, type = "text", change = () => {}, name = "" }) => {
  return (
    <p className={styles["text-row"]}>
      <label>{label}</label>
      <input type={type} name={name} onChange={change} />
    </p>
  );
};

export default TextInput;
