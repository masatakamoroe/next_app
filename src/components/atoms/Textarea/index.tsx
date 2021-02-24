import React from "react";
import styles from "./styles.module.sass";

const Textbox: React.VFC = () => {
    return <input className={styles.textarea} type="text" />;
};

export default Textbox;
