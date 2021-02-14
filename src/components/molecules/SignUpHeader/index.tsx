import React from "react";
import { Label } from "components/atoms";
import styles from "./styles.module.sass";

const SignUpHeader: React.VFC = () => {
    return (
        <div className={styles.container}>
            <Label text="SignUp" />
        </div>
    );
};

export default SignUpHeader;
