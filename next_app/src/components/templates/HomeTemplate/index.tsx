import React from "react";
import { PrimaryButton, Label, Checkbox,Textbox } from "components/atoms";
import InputForm from "components/organisms/ImputForm";
import CheckButton from "components/organisms/CheckButton";
import styles from "./styles.module.css";

const HomeTemplate: React.VFC = () => {
  return (
    <div className={styles.container}>
      <InputForm />
      <CheckButton/>
      <PrimaryButton text="LOGIN"/>
    </div>
  );
};

export default HomeTemplate;