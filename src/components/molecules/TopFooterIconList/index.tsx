import React from "react";
import styles from "./styles.module.sass";
import { PhoneIconList } from "components/molecules";

const TopFooterIconList: React.VFC = () => {
    return (
        <div className={styles.container}>
            <PhoneIconList />
        </div>
    );
};

export default TopFooterIconList;
