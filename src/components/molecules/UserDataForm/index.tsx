import React from "react";
import styles from "./styles.module.sass";
import { SecondaryTextbox } from "components/atoms";

const UserDateForm: React.VFC = () => {
    return (
        <div className={styles.container}>
            <SecondaryTextbox text="Username" />
            <SecondaryTextbox text="Email" />
            <SecondaryTextbox text="Password" />
            <SecondaryTextbox text="ConfirmPassword" />
        </div>
    );
};

export default UserDateForm;
