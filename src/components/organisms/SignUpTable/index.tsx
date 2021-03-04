import React from "react";
import { PrimaryButton, SecondaryButton } from "components/atoms"
import { SignUpHeader, UserNameForm, UserDateForm, SignUpFooterIconList } from "components/molecules";
import styles from "./styles.module.sass";

const SignUpTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <SignUpHeader />
            <UserNameForm />
            <UserDateForm />
            <PrimaryButton text="Sign Up" />
            <SecondaryButton text="Back to Home" />
            <SignUpFooterIconList />
        </div>
    )
}

export default SignUpTable;
