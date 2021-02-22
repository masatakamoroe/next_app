import React from "react";
import { CheckboxWithLabel, SimpleDatePickerWithLabel } from "components/molecules";
import styles from "./styles.module.sass";
import { PrimaryButton } from "components/atoms";

const EditorButtonForm: React.VFC = () => {
    return (
        <div className={styles.container}>
            <CheckboxWithLabel text="All day Schedule" />
            <SimpleDatePickerWithLabel text="Start" />
            <SimpleDatePickerWithLabel text="End" />
            <PrimaryButton text="Comfirm" />
        </div>
    );
};

export default EditorButtonForm;