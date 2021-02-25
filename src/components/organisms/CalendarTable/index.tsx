import React from "react";
import { PrimaryCalendar } from "components/atoms";
import { CalendarIconList } from "components/molecules";
import styles from "./styles.module.sass";

const CalendarTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <CalendarIconList />
            <PrimaryCalendar />
        </div>
    );
};

export default CalendarTable;
