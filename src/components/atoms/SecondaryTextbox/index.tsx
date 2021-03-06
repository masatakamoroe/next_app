import React from "react";
import styles from "./styles.module.sass";

interface Props {
    text: string;
}

const SecondaryTextbox: React.VFC<Props> = ({ text }) => {
    return <input className={styles.secondaryTextbox} type="text" placeholder={text} />
};

export default SecondaryTextbox;
