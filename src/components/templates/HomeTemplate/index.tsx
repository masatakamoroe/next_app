import React from "react";
import { Table } from "components/organisms";
import styles from "./styles.module.sass";

const HomeTemplate: React.VFC = () => {
    return (
        <div className={styles.container}>
            <Table />
        </div>
    );
};

export default HomeTemplate;
