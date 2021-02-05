import React from "react";
import styles from "./styles.module.css";

const Textbox: React.VFC = () => {
    return <input className={styles.textbox} type="text" />;
  };
  
  export default Textbox;