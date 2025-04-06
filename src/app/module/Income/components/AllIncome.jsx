import React from "react";
import { RiAddLine, RiDownloadLine } from "react-icons/ri";
import Button from "../../../utils/Button";
import CardInfo from "./CardInfo";

const AllIncome = ({ data }) => {
  console.log(data);

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <header className="flex items-center justify-between">
        <h3 className="text-[18px] md:text-[20px] font-medium">Recent List</h3>

        <div className="flex items-center gap-x-[10px]">
          <Button text="Download" icon={RiDownloadLine} />
          <Button text="Add" icon={RiAddLine} />
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-x-[20px] gap-y-[20px] md:gap-x-[40px]">
        {data?.map((item) => {
          return <CardInfo data={item} />;
        })}
      </div>
    </section>
  );
};

export default AllIncome;
