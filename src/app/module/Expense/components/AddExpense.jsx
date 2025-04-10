import React from "react";
import Container from "../../../layout/components/Container";
import useExpense from "../core/action";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";

const AddExpense = () => {
  const { navigate, loading, expenseInfo, onChangeAdd, onCreateExpense } =
    useExpense();

  let { category, amount, date } = expenseInfo;

  //   console.log(expenseInfo);

  const onSubmit = async (e) => {
    e.preventDefault();
    await onCreateExpense();
    navigate("/expense");
  };

  return (
    <Container title="Expense - Add" onClick={() => navigate("expense")}>
      <div className="bg-[#fff] shadow-[0_0_8px_0_rgba(0,0,0,0.05)] rounded-lg p-[20px]">
        <form onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 gap-y-[10px] md:gap-y-[20px] md:gap-x-[30px]">
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
      </div>
    </Container>
  );
};

export default AddExpense;
