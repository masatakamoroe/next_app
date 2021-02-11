import React from "react";
import { Label, Checkbox, } from "components/atoms";
import styles from "./styles.module.sass";

interface Props {
  text: string;
}

const CheckboxWithLabel: React.VFC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <Checkbox />
      <Label text={text} />
    </div>
  );
};

export default CheckboxWithLabel;
