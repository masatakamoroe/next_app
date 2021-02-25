import React from "react";
import { CalendarTable } from "components/organisms";
import styles from "./styles.module.sass";

const CalendarTemplate: React.VFC = () => {
    return (
        <div className={styles.container}>
            <CalendarTable />
        </div>
    );
};

export default CalendarTemplate;
