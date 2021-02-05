import React from "react";
import Label from "components/atoms/Label";
import Checkbox from "components/atoms/Checkbox";
import styles from "./styles.module.css";

interface Props {
  text: string;
}

const CheckboxWithLabel: React.VFC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <Label text={text} />
      <Checkbox />
    </div>
  );
};

export default CheckboxWithLabel;
