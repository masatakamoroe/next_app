import React from "react";
import { Label } from "components/atoms";
import styles from "./styles.module.sass";

const Header: React.VFC = () => {
  return (
    <div className={styles.container}>
      <Label text="Login" />
    </div>
  );
};

export default Header;
