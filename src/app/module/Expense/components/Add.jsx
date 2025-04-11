import React from "react";
import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import useExpense from "../core/action";

const Add = ({ onClick }) => {
  const { loading, expenseInfo, onChangeAdd, onCreateExpense } = useExpense();

  let { category, amount, date } = expenseInfo;

  const onSubmit = async (e) => {
    e.preventDefault();
    await onCreateExpense();
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
          text={loading ? "Adding Expense..." : "Add Expense"}
          type="submit"
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default Add;
