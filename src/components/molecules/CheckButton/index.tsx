import React from "react";
import { CheckboxWithLabel } from "components/molecules";
import { SecondaryButton } from "components/atoms";
import styles from "./styles.module.sass";

const CheckButton: React.VFC = () => {
  return (
    <div className={styles.container}>
      <CheckboxWithLabel text="Remember me" />
      <SecondaryButton text="ForgotPassword" />
    </div>
  );
};

export default CheckButton;
