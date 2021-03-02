import React from "react";
import { TopHeader, TopLabelForm, PhoneIconList } from "components/molecules";
import styles from "./styles.module.sass";

const TopTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <TopHeader />
            <TopLabelForm />
            <PhoneIconList />
        </div>
    );
};

export default TopTable;
