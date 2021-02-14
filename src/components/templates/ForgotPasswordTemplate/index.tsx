import React from "react";
import { ForgotPasswordTable } from "components/organisms";
import styles from "./styles.module.sass";

const ForgotPasswordTemplate: React.VFC = () => {
    return (
        <div className={styles.container}>
            <ForgotPasswordTable />
        </div>
    );
};

export default ForgotPasswordTemplate;
