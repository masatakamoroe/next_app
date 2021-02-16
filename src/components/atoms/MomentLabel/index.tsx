import React from "react";
import moment from "moment";
import styles from "./styles.module.sass";

const MomentLabel: React.VFC = () => {
    return <p className={styles.title}>{moment().format('MMMM Do YYYY')}</p>;

};

export default MomentLabel;
