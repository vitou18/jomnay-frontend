import React from "react";
import Button from "../../../utils/Button";
import { RiAddLargeFill } from "react-icons/ri";

const HeaderTable = ({onClick}) => {
  return (
    <header className="flex items-center justify-between">
      <h3 className="text-[18px] md:text-[20px] font-medium text-[#3A3A3A]">Recent List</h3>

      <div className="flex items-center gap-x-[10px]">
        <Button
          text="Add"
          onClick={onClick}
          icon={RiAddLargeFill}
        />
      </div>
    </header>
  );
};

export default HeaderTable;
