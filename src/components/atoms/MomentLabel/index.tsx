import React from "react";
import Moment from "react-moment";
import styles from "./styles.module.sass";

interface Props {
    format: string;
}

const MomentLabel: React.VFC<Props> = ({ format }) => {
    return <Moment format={format} className={styles.format}></Moment>
};

export default MomentLabel;
