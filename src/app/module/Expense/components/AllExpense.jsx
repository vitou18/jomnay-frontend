import React from "react";
import { RiAddLine } from "react-icons/ri";
import Button from "../../../utils/Button";
import CardInfo from "../../../layout/components/CardInfo";
import useExpense from "../core/action";

const AllExpense = ({ data }) => {
  const { navigate } = useExpense();

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <header className="flex items-center justify-between">
        <h3 className="text-[18px] md:text-[20px] font-medium">Recent List</h3>

        <div className="flex items-center gap-x-[10px]">
          <Button
            text="Add"
            onClick={''}
            icon={RiAddLine}
          />
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-x-[20px] md:gap-y-[30px] gap-y-[20px] md:gap-x-[80px]">
        {data?.map((item) => (
          <CardInfo
            type="expense"
            key={item._id}
            data={item}
            navigate={navigate}
            onDelete={""}
          />
        ))}
      </div>
    </section>
  );
};

export default AllExpense;
