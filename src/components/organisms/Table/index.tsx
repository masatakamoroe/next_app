import React from "react";
import { PrimaryButton } from "components/atoms";
import InputForm from "components/molecules/ImputForm";
import CheckButton from "components/molecules/CheckButton";
import styles from "./styles.module.sass";
import Header from "components/molecules/Header";


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