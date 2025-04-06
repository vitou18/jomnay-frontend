import React from "react";
import Icon from "../../../layout/components/Icon";
import { RiCloseLargeLine, RiWalletLine } from "react-icons/ri";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useIncome from "../core/action";

const AddIncome = ({ onClick }) => {
  const { onChangeAdd, onResetAdd, incomeInfo } = useIncome();

  let { category, amount, date } = incomeInfo;

  console.log(incomeInfo);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-[#fff] w-full mx-[20px] md:mx-0 max-w-md p-6 rounded-lg shadow-lg relative">
        <div className="flex gap-x-[10px] items-center mb-[40px]">
          <Icon style="green" icon={RiWalletLine} />
          <h3 className="text-[18px] md:text-[24px] font-semibold text-gray-800">
            Add Income
          </h3>
        </div>

        <div
          className="absolute top-5 text-[18px] md:text-[24px] right-5 cursor-pointer"
          onClick={onClick}
        >
          <RiCloseLargeLine />
        </div>

        <form>
          <Input
            placeholder="Enter your category"
            name="category"
            type="text"
            value={category}
            onChange={onChangeAdd}
          />

          <Input
            placeholder="Enter your amount"
            name="amount"
            type="number"
            value={amount}
            mt
            onChange={onChangeAdd}
          />

          <Input
            placeholder="Enter your date"
            name="date"
            type="date"
            value={date}
            mt
            onChange={onChangeAdd}
          />

          <Button text="Add Income" />
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
