import React from "react";
import { RiArrowLeftDownLine, RiArrowRightUpLine } from "react-icons/ri";

const Tooltip = ({ type, amount }) => {
  return (
    <div
      className={`flex text-[10px] gap-x-[5px] md: md:text-[14px] md:font-medium items-center rounded-lg p-[10px] ${
        type === "income"
          ? "bg-[#16A34A]/5 text-[#16A34A]"
          : "bg-[#DC2626]/5 text-[#DC2626]"
      }`}
    >
      <span>
        {type === "income" ? "+" : "-"}
        $
        {amount}
      </span>
      <span className="text-[12px] md:text-[18px]">
        {type === "income" ? <RiArrowRightUpLine /> : <RiArrowLeftDownLine />}
      </span>
    </div>
  );
};

export default Tooltip;
