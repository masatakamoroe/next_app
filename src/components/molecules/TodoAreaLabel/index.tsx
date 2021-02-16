import React from "react";
import { SecondaryLabel, UnderLinedLabel } from "components/atoms";
import styles from "./styles.module.sass";

const TodoAreaLabel: React.VFC = () => {
    return (
        <div className={styles.container}>
            <UnderLinedLabel text="Today's schedule" />
            <SecondaryLabel text="Area" />
        </div>
    );
};

export default TodoAreaLabel;
