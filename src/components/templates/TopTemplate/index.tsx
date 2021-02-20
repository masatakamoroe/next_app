import React from "react";
import { TopTable } from "components/organisms";
import styles from "./styles.module.sass";

const TopTemplate: React.VFC = () => {
    return (
        <div className={styles.container}>
            <TopTable />
        </div>
    );
};

export default TopTemplate;
