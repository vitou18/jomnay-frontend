import React, { useEffect } from "react";
import Container from "../../layout/components/Container";
import useExpense from "./core/action";
import AllExpense from "./components/AllExpense";

const Expense = () => {
  const { fetchExpense, expense } = useExpense();

  useEffect(() => {
    fetchExpense();
  }, []);

  // console.log(expense);

  return (
    <Container title="Expense">
      <AllExpense data={expense} />
    </Container>
  );
};

export default Expense;
