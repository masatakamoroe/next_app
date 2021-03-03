import React from "react";
import styles from "./styles.module.sass";

interface Props {
    text: string;
}

const ForgotSecondaryTextbox: React.VFC<Props> = ({ text }) => {
    return <input className={styles.Textbox} type="text" placeholder={text} />
};

export default ForgotSecondaryTextbox;