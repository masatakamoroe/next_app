import React from "react";
import styles from "./styles.module.sass";
import { Label, SimpleDatePicker } from "components/atoms";

interface Props {
  text: string;
}

const SimpleDatePickerWithLabel: React.VFC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <Label text={text} />
      <SimpleDatePicker />
    </div>
  );
};

export default SimpleDatePickerWithLabel;