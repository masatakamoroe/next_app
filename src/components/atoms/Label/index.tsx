import React from "react";
import styles from "./styles.module.sass";

interface Props {
  text: string;
}

const Label: React.VFC<Props> = ({ text }) => {
  return <p className={styles.title}>{text}</p>;
};

export default Label;
