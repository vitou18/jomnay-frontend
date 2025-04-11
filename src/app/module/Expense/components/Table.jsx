import React, { useState } from "react";
import Modal from "../../../utils/Modal";
import Action from "../../../utils/Action";
import CardContainer from "../../../layout/components/card/CardContainer";
import HeaderTable from "../../../layout/components/table/HeaderTable";
import TableContainer from "../../../layout/components/table/TableContainer";

const Table = ({ data, onDelete, onAdd, onEdit }) => {
  const [selected, setSelected] = useState({ id: null });
  const [show, setShow] = useState(false);

  const onGetIdCard = (id) => {
    setSelected({ id });
    setShow(true);
  };

  const onDeleteIncome = () => {
    onDelete(selected.id);
    setShow(false);
  };

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <HeaderTable onClick={onAdd} />

      <CardContainer
        data={data}
        onDelete={onGetIdCard}
        type="expense"
        onEdit={onEdit}
      />

      <TableContainer onDelete={onGetIdCard} onEdit={onEdit} data={data} />

      {show && (
        <Modal
          title="Delete Expense"
          desc="Are you sure you want to delete this expense?"
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
