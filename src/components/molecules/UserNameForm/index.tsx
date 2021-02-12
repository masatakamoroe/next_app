import React from "react";
import styles from "./styles.module.sass";
import { SecondaryTextbox } from "components/atoms";

const UserNameForm: React.VFC = () => {
    return (
        <div className={styles.container}>
            <SecondaryTextbox text="FirstName" />
            <SecondaryTextbox text="LastName" />
        </div>
    );
};


export default UserNameForm;

