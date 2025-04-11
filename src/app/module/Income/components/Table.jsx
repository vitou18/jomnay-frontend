import React, { useState } from "react";
import CardContainer from "../../../layout/components/card/CardContainer";
import HeaderTable from "../../../layout/components/table/HeaderTable";
import TableContainer from "../../../layout/components/table/TableContainer";
import Modal from "../../../utils/Modal";
import Action from "../../../utils/Action";

const Table = ({ data, onDelete, navigate }) => {
  const [selected, setSelected] = useState({ id: null, category: null });
  const [show, setShow] = useState(false);

  const onGetIdCard = (id, category) => {
    setSelected({ id, category });
    setShow(true);
  };

  const onDeleteIncome = () => {
    onDelete(selected.id, selected.category);
    setShow(false);
  };

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <HeaderTable onClick={() => navigate("/income/add")} />

      <CardContainer
        data={data}
        onDelete={onGetIdCard}
        navigate={navigate}
        type="income"
      />

      <TableContainer
        navigate={navigate}
        onDelete={onGetIdCard}
        data={data}
        type="income"
      />

      {show && (
        <Modal
          title={`Delete ${selected.category}`}
          desc="Are you sure you want to delete?"
          show={show}
          setShow={setShow}
        >
          <Action
            onCancel={() => setShow((pre) => !pre)}
            onSubmit={onDeleteIncome}
          />
        </Modal>
      )}
    </section>
  );
};

export default Table;
