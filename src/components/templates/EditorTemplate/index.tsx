import React from "react";
import { EditorTable } from "components/organisms";
import styles from "./styles.module.sass";

const EditorTemplate: React.VFC = () => {
    return (
        <div className={styles.container}>
            <EditorTable />
        </div>
    );
};

export default EditorTemplate;
