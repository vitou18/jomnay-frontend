import React from "react";
import Container from "../../../layout/components/container/Container";
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
        
      </div>
    </Container>
  );
};

export default AddExpense;
