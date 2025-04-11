import React, { useEffect, useState } from "react";
import useExpense from "../core/action";
import Table from "./Table";
import Modal from "../../../utils/Modal";
import Add from "./Add";

const AllExpense = () => {
  const { fetchExpense, expense, onDeleteExpense } = useExpense();
  const [showAdd, setShowAdd] = useState();

  useEffect(() => {
    fetchExpense();
  }, []);

  return (
    <>
      <Table
        onAdd={() => setShowAdd((pre) => !pre)}
        data={expense}
        onDelete={onDeleteExpense}
      />

      {showAdd && (
        <Modal
          title="Add Expense"
          desc="Record a new expense entry."
          show={showAdd}
          setShow={setShowAdd}
        >
          <Add onClick={() => setShowAdd((pre) => !pre)} />
        </Modal>
      )}
    </>
  );
};

export default AllExpense;
