import React from "react";
import Icon from "../../../layout/components/Icon";

const Card = ({ icon, title, balance }) => {
  return (
    <div className="bg-[#fff] shadow-[0_0_8px_0_rgba(0,0,0,0.05)] flex-1 flex items-center gap-x-[20px] p-[20px]">
      <Icon icon={icon} />

      <div className="flex flex-col">
        <span>{title}</span>
        <span>${balance}</span>
      </div>
    </div>
  );
};

export default Card;
