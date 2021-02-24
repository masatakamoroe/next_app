import React from "react";
import { Label, UnderLinedTextbox } from "components/atoms";
import styles from "./styles.module.sass";

interface Props {
    text: string;
}

const TextboxWithLabel: React.VFC<Props> = ({ text }) => {
    return (
        <div className={styles.container}>
            <Label text={text} />
            <UnderLinedTextbox />
        </div>
    );
};

export default TextboxWithLabel;
