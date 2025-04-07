import React, { useState } from "react";
import { RiAddLine, RiDownloadLine } from "react-icons/ri";
import Button from "../../../utils/Button";
import CardInfo from "./CardInfo";
import AddIncome from "./AddIncome";
import useIncome from "../core/action";

const AllIncome = ({ data }) => {
  const { onDeleteIncome } = useIncome();
  const [showAdd, setShowAdd] = useState(false);

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <header className="flex items-center justify-between">
        <h3 className="text-[18px] md:text-[20px] font-medium">Recent List</h3>

        <div className="flex items-center gap-x-[10px]">
          <Button text="Download" icon={RiDownloadLine} />
          <Button
            text="Add"
            onClick={() => setShowAdd(!showAdd)}
            icon={RiAddLine}
          />
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-x-[20px] md:gap-y-[30px] gap-y-[20px] md:gap-x-[80px]">
        {data?.map((item) => (
          <CardInfo key={item._id} data={item} onDelete={onDeleteIncome} />
        ))}
      </div>

      {showAdd && <AddIncome onClick={() => setShowAdd(!showAdd)} />}
    </section>
  );
};

export default AllIncome;
