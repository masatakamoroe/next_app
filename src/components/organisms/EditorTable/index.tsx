import React from "react";
import { EditorIconList, EditorForm, EditorButtonForm, PhoneIconList } from "components/molecules";
import styles from "./styles.module.sass";

const EditorTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <EditorIconList />
            <EditorForm />
            <EditorButtonForm />
            <PhoneIconList />
        </div>
    );
};

export default EditorTable;
