import React, { useEffect } from "react";
import Container from "../../layout/components/Container";
import useExpense from "./core/action";

const Expense = () => {
  const { fetchExpense, expense } = useExpense();

  useEffect(() => {
    fetchExpense();
  }, []);

  console.log(expense);

  return (
    <Container title="Expense">
      <div className="w-full h-[250px] bg-amber-50"></div>
      <div className="w-full h-[250px] bg-amber-200"></div>
      <div className="w-full h-[250px] bg-amber-300"></div>
      <div className="w-full h-[250px] bg-amber-400"></div>
      <div className="w-full h-[250px] bg-amber-500"></div>
      <div className="w-full h-[250px] bg-amber-600"></div>
    </Container>
  );
};

export default Expense;
