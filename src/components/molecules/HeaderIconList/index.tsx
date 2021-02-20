import React from "react";
import styles from "./styles.module.sass";
import { FaHome, FaPen, FaPlus, FaCalendarAlt } from 'react-icons/fa';

const HeaderIconList: React.VFC = () => {
    return (
        <div className={styles.container}>
            <FaHome />
            <FaPen />
            <FaPlus />
            <FaCalendarAlt />
        </div>
    );
};

export default HeaderIconList;
