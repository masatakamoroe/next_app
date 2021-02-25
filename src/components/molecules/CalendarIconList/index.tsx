import React from "react";
import styles from "./styles.module.sass";
import { FaHome, FaPlus } from 'react-icons/fa';

const CalendarIconList: React.VFC = () => {
    return (
        <div className={styles.container}>
            <FaHome />
            <FaPlus />
        </div>
    );
};

export default CalendarIconList;
