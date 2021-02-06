import React from "react";
import TextboxWithLabel from "components/molecules/TextboxWithLabel";
import styles from "./styles.module.css";


const InputForm: React.VFC = () => {
  return (
    <div className={styles.container}>
      <TextboxWithLabel text= "UserName" />
      <TextboxWithLabel text= "Password" />
    </div>
  );
};

export default InputForm;