import React, { useEffect } from "react";
import useExpense from "../core/action";
import Table from "./Table";

const AllExpense = () => {
  const { fetchExpense, expense, onDeleteExpense } = useExpense();

  useEffect(() => {
    fetchExpense();
  }, []);

  return (
    <>
      <Table data={expense} onDelete={onDeleteExpense} />
    </>
  );
};

export default AllExpense;
