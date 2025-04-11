import React from "react";
import Button from "./Button";

const Action = ({ submitText, cancelText, onCancel, onSubmit }) => {
  return (
    <div className="flex mt-[20px] gap-x-[10px] justify-end items-center">
      <Button text={cancelText} style="gray" onClick={onCancel} />
      <Button text={submitText} style="delete" onClick={onSubmit} />
    </div>
  );
};

export default Action;
