import React from "react";
import styles from "./styles.module.sass";

const Checkbox: React.VFC = () => {
  return <input className={styles.checkbox} type="checkbox" />;
};

export default Checkbox;