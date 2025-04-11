import { useEffect, useState } from "react";
import useIncome from "../core/action";
import Table from "./Table";
import Modal from "../../../utils/Modal";
import Add from "./Add";
import Edit from "./Edit";

const AllIncome = () => {
  const { fetchIncome, income, onDeleteIncome, navigate, fetchIncomeById } =
    useIncome();
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const onEditIncome = (payload) => {
    setShowEdit((pre) => !pre);
    fetchIncomeById(payload);
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  return (
    <>
      <Table
        data={income}
        onAdd={() => setShowAdd((pre) => !pre)}
        onDelete={onDeleteIncome}
        onEdit={onEditIncome}
      />

      {showAdd && (
        <Modal
          title="Add Income"
          desc="Record a new income entry."
          show={showAdd}
          setShow={setShowAdd}
        >
          <Add onClick={() => setShowAdd((pre) => !pre)} />
        </Modal>
      )}

      {showEdit && (
        <Modal
          title="Edit Income"
          desc="Update your income details."
          show={showEdit}
          setShow={setShowEdit}
        >
          <Edit onClick={() => setShowEdit((pre) => !pre)} />
        </Modal>
      )}
    </>
  );
};

export default AllIncome;
