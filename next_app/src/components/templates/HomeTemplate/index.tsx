import React from "react";
import { PrimaryButton, Label, Checkbox } from "components/atoms";
import CheckboxWithLabel from "components/molecules/CheckboxWithLabel";

const HomeTemplate: React.VFC = () => {
  return (
    <div>
      <CheckboxWithLabel text="チェックボックスとラベル" />
      <CheckboxWithLabel text="チェックボックスとラベル" />
      <CheckboxWithLabel text="チェックボックスとラベル" />
      <CheckboxWithLabel text="チェックボックスとラベル" />
      <CheckboxWithLabel text="チェックボックスとラベル" />
    </div>
  );
};

export default HomeTemplate;
