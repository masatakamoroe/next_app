import React from "react";
import {PrimaryButton} from "components/atoms";
import InputForm from "components/organisms/ImputForm";
import CheckButton from "components/organisms/CheckButton";
import styles from "./styles.module.css";
import Header from "components/organisms/Header";


const HomeTemplate: React.VFC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <InputForm />
      <CheckButton/>
      <PrimaryButton text="LOGIN"/>
    </div>
  );
};

export default HomeTemplate;