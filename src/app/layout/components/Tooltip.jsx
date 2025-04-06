import React from "react";
import { RiArrowLeftDownLine, RiArrowRightUpLine } from "react-icons/ri";

const Tooltip = ({ type, amount }) => {
  return (
    <div
      className={`flex text-[10px] md:text-[12px] items-center rounded-lg p-[10px] ${
        type === "income"
          ? "bg-[#DC2626]/5 text-[#DC2626]"
          : "bg-[#16A34A]/5 text-[#16A34A]"
      }`}
    >
      <span>
        {type === "income" ? "+" : "-"}
        {amount}
      </span>
      <span>
        {type === "income" ? <RiArrowRightUpLine /> : <RiArrowLeftDownLine />}
      </span>
    </div>
  );
};

export default Tooltip;
