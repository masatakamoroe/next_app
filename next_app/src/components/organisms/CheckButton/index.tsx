import React from "react";
import CheckboxWithLabel from "components/molecules/CheckboxWithLabel";
import {PrimaryButton} from "components/atoms";
import styles from "./styles.module.css";

const CheckButton: React.VFC = () => {
  return (
      <div className={styles.container}>
      <CheckboxWithLabel text= "Remember me" />
      <PrimaryButton text= "ForgotPassword" />
    </div>
  );
};

export default CheckButton;