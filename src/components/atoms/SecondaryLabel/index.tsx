import React from "react";
import styles from "./styles.module.sass";

interface Props {
    text: string;
}

const SecondaryLabel: React.VFC<Props> = ({ text }) => {
    return <p className={styles.title}>{text}</p>;
};

export default SecondaryLabel;
