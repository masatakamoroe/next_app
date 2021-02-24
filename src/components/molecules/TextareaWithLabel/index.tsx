import React from "react";
import { Label, Textarea } from "components/atoms";
import styles from "./styles.module.sass";

interface Props {
    text: string;
}

const TextareaWithLabel: React.VFC<Props> = ({ text }) => {
    return (
        <div className={styles.container}>
            <Label text={text} />
            <Textarea />
        </div>
    );
};

export default TextareaWithLabel;
