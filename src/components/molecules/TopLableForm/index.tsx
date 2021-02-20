import React from "react";
import { SingleTopLabelForm } from "components/molecules";
import styles from "./styles.module.sass";

const TopLabelForm: React.VFC = () => {
    return (
        <div className={styles.container}>
            <SingleTopLabelForm />
            <SingleTopLabelForm />
            <SingleTopLabelForm />
            <SingleTopLabelForm />
        </div>
    );
};

export default TopLabelForm;
