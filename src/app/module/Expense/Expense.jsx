import React, { useEffect } from "react";
import useExpense from "./core/action";
import Container from "../../layout/components/container/Container";
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
