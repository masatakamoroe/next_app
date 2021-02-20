import React from "react";
import { TopHeader, TopLabelForm, } from "components/molecules";
import styles from "./styles.module.sass";

const TopTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <TopHeader />
            <TopLabelForm />
        </div>
    );
};

export default TopTable;
