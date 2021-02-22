import React from "react";
import styles from "./styles.module.sass";
import { FaHome, FaPen, FaCalendarAlt } from 'react-icons/fa';

const EditorIconList: React.VFC = () => {
    return (
        <div className={styles.container}>
            <FaHome />
            <FaPen />
            <FaCalendarAlt />
        </div>
    );
};

export default EditorIconList;
