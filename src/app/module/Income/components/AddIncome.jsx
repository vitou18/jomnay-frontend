import React from "react";
import Icon from "../../../layout/components/Icon";
import { RiCloseLargeLine, RiWalletLine } from "react-icons/ri";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useIncome from "../core/action";

const AddIncome = ({ onClick }) => {
  const { onChangeAdd, incomeInfo, onCreateIncome, loading } = useIncome();
  const { category, amount, date } = incomeInfo;

  const onSubmit = async (e) => {
    e.preventDefault();
    await onCreateIncome();
    onClick();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white w-full mx-5 md:mx-0 max-w-md p-6 rounded-lg shadow-lg relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <Icon style="green" icon={RiWalletLine} />
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
            Add Income
          </h3>
        </div>

        {/* Close Button */}
        <div
          className="absolute top-5 right-5 text-xl cursor-pointer"
          onClick={onClick}
        >
          <RiCloseLargeLine />
        </div>

        {/* Form */}
        <form onSubmit={onSubmit}>
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

          <Button
            text={loading ? "Saving..." : "Add Income"}
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
