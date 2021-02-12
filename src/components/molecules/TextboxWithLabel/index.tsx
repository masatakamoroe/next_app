import React from "react";
import { Label, Textbox } from "components/atoms";
import styles from "./styles.module.sass";

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
