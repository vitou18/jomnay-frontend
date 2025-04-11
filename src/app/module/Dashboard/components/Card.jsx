import React from "react";
import CountUp from "react-countup";
import Icon from "../../../layout/components/card/Icon";

const Card = ({ icon, title, balance, style }) => {
  return (
    <div className="bg-[#fff] min-w-[240px] rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.05)] flex-1 flex items-center gap-x-[20px] p-[20px]">
      <Icon icon={icon} style={style} />

      <div className="flex flex-col">
        <span className="text-[#696969] md:text-[18px]">{title}</span>
        <span className="text-[18px] md:text-[24px] font-medium text-[#3A3A3A]">
          $
          <CountUp
            start={0}
            end={parseFloat(balance)}
            duration={1.5}
            decimals={2}
            separator=","
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
