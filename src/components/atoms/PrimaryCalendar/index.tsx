import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "./styles.module.sass";
import 'react-calendar/dist/Calendar.css';

const PrimaryCalendar: React.VFC = () => {
    const [value, onChange] = useState<Date | Date[]>(new Date());

    return (
        <Calendar
            className={styles.container}
            onChange={onChange}
            value={value}
        />
    )
};

export default PrimaryCalendar;
