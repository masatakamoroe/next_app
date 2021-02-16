import React from "react";
import { TodoAreaLabel } from "components/molecules";
import { TimeLabel } from "components/atoms";
import styles from "./styles.module.sass";

const SingleTopLabelForm: React.VFC = () => {
    return (
        <div className={styles.container}>
            <TodoAreaLabel />
            <TimeLabel text="00:00-00:00" />
        </div>
    );
};

export default SingleTopLabelForm;
