import React from "react";
import styles from "./styles.module.sass";
import { Icon, MomentLabel } from "components/atoms";

const TopHeader: React.VFC = () => {
    return (
        <div className={styles.container}>
            <Icon />
            <MomentLabel />
        </div>
    );
};

export default TopHeader;
