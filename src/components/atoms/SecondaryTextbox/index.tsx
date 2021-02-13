import React from "react";
import styles from "./styles.module.sass";

interface Props {
    text: string;
}

const Textbox: React.VFC<Props> = ({ text }) => {
    return <input className={styles.textbox} type="text" placeholder={text} />
};

export default Textbox;
