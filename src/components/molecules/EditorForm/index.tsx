import React from "react";
import { TextareaWithLabel, UnderLinedTextboxWithLabel } from "components/molecules";
import styles from "./styles.module.sass";

const EditorForm: React.VFC = () => {
    return (
        <div className={styles.container}>
            <UnderLinedTextboxWithLabel text="Title" />
            <UnderLinedTextboxWithLabel text="Area" />
            <TextareaWithLabel text="Memo" />
        </div>
    );
};

export default EditorForm;
