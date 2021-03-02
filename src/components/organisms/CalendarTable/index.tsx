import React from "react";
import { PrimaryCalendar } from "components/atoms";
import { CalendarIconList, PhoneIconList } from "components/molecules";
import styles from "./styles.module.sass";

const CalendarTable: React.VFC = () => {
    return (
        <div className={styles.container}>
            <CalendarIconList />
            <PrimaryCalendar />
            <PhoneIconList />
        </div>
    );
};

export default CalendarTable;
