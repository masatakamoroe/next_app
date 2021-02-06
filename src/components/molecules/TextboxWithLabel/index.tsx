import React from "react";
import Label from "components/atoms/Label";
import Textbox from "components/atoms/Textbox";
import styles from "./styles.module.css";

interface Props {
    text: string;
  }

const TextboxWithLabel: React.VFC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <Label text={text} />
      <Textbox />
    </div>
  );
};

export default TextboxWithLabel;