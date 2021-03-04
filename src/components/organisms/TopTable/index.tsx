import React from "react";
import { TopHeader, TopLabelForm, TopFooterIconList } from "components/molecules";
import styles from "./styles.module.sass";

const TopTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <TopHeader />
            <TopLabelForm />
            <TopFooterIconList />
        </div>
    );
};

export default TopTable;
