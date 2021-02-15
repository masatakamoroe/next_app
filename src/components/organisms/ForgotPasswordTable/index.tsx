import React from "react";
import { Label, PrimaryButton, SecondaryLabel, SecondaryTextbox } from "components/atoms";
import styles from "./styles.module.sass";

const ForgotPasswordTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <Label text="ForgotPassword" />
            <SecondaryLabel text="Enter your Email and send you a password" />
            <SecondaryTextbox text="Email" />
            <PrimaryButton text="Send request" />
        </div>
    );
};

export default ForgotPasswordTable;
