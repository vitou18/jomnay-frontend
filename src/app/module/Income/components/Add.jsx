import React from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useIncome from "../core/action";

const Add = ({ onClick }) => {
  const { onChangeAdd, incomeInfo, onCreateIncome, loading } = useIncome();
  const { category, amount, date } = incomeInfo;

  const onSubmit = async (e) => {
    e.preventDefault();
    await onCreateIncome();
    onClick();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-y-[10px] md:gap-y-[20px] mt-[20px]">
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
          onChange={onChangeAdd}
        />

        <Input
          placeholder="Enter your date"
          name="date"
          type="date"
          value={date}
          onChange={onChangeAdd}
        />

        <Button
          text={loading ? "Adding Income..." : "Add Income"}
          type="submit"
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default Add;
