import React from "react";
import styles from "./styles.module.sass";
import { MomentLabel } from "components/atoms";
import { HeaderIconList } from "components/molecules";

const TopHeader: React.VFC = () => {
    return (
        <div className={styles.container}>
            <HeaderIconList />
            <MomentLabel format="MMMM Do YYYY" />
        </div>
    );
};

export default TopHeader;
