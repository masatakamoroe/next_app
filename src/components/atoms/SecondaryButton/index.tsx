import React from "react";
import styles from "./styles.module.css";
interface Props {
  text: string;
}

const PrimaryButton: React.VFC<Props> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default PrimaryButton;
