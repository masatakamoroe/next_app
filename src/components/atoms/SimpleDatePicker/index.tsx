import React, { useState } from "react";
import styles from "./styles.module.sass";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SimpleDatePicker: React.VFC = () => {

    const [, setStartDate] = useState<Date | [Date, Date] | null>(new Date());
    const [startDate] = useState<Date | null | undefined>(new Date());

    return (
        <DatePicker
            className={styles.container}
            selected={startDate}
            onChange={date => setStartDate(date)}
        />
    );
};

export default SimpleDatePicker;
