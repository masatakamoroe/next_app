import React from "react";
import { SignUpTable } from "components/organisms";
import styles from "./styles.module.sass";

const SignUpTemplate: React.VFC = () => {
    return (
        <div className={styles.container}>
            <SignUpTable />
        </div>
    );
};

export default SignUpTemplate;

