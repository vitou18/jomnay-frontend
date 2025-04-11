import { useEffect, useState } from "react";
import useIncome from "../core/action";
import Table from "./Table";
import Modal from "../../../utils/Modal";
import Add from "./Add";

const AllIncome = () => {
  const { fetchIncome, income, onDeleteIncome, navigate } = useIncome();
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    fetchIncome();
  }, []);

  return (
    <>
      <Table
        data={income}
        onAdd={() => setShowAdd((pre) => !pre)}
        onDelete={onDeleteIncome}
        navigate={navigate}
      />

      {showAdd && (
        <Modal
          title="Add Income"
          desc="Record income to track earnings and manage budget."
          show={showAdd}
          setShow={setShowAdd}
        >
          <Add onClick={() => setShowAdd((pre) => !pre)} />
        </Modal>
      )}
    </>
  );
};

export default AllIncome;
