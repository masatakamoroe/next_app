import React from "react";
import { PrimaryButton } from "components/atoms";
import { InputForm, CheckButton, Header } from "components/molecules";
import styles from "./styles.module.sass";



const Table: React.VFC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <InputForm />
      <CheckButton />
      <PrimaryButton text="LOGIN" />
    </div>
  );
};

export default Table;
