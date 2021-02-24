import React from "react";
import { EditorIconList, EditorForm, EditorButtonForm } from "components/molecules";
import styles from "./styles.module.sass";

const EditorTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <EditorIconList />
            <EditorForm />
            <EditorButtonForm />
        </div>
    );
};

export default EditorTable;
