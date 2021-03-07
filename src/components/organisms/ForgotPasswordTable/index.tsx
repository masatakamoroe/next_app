import React from "react";
import { Label, PrimaryButton, SecondaryLabel, ForgotSecondaryTextbox } from "components/atoms";
import styles from "./styles.module.sass";
import { ForgotFooterIconList } from "components/molecules";

const ForgotPasswordTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <Label text="ForgotPassword" />
            <SecondaryLabel text="Enter your Email and send you a password" />
            <ForgotSecondaryTextbox text="Email" />
            <PrimaryButton text="Send request" />
            <ForgotFooterIconList />
        </div>
    );
};

export default ForgotPasswordTable;
