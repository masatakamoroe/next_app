import React, { useState } from "react";
import styles from "./styles.module.sass";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SimpleDatePicker: React.VFC = () => {

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <DatePicker
            className={styles.container}
            selected={startDate}
            onChange={date => setStartDate(date)}
        />
    );
};

export default SimpleDatePicker;
