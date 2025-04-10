import React, { useState } from "react";
import useExpense from "../core/action";
import HeaderTable from "../../../layout/components/HeaderTable";
import CardContainer from "../../../layout/components/CardContainer";
import Modal from "../../../layout/components/Modal";
import TableContainer from "../../../layout/components/TableContainer";

const AllExpense = ({ data }) => {
  const { navigate, onDeleteExpense } = useExpense();
  const [selected, setSelected] = useState({ id: null, category: null });
  const [show, setShow] = useState(false);

  const onGetIdCard = (id, category) => {
    setSelected({ id, category });
    setShow(true);
  };

  // console.log(selected);

  const onDelete = () => {
    onDeleteExpense(selected.id, selected.category);
    setShow(false);
  };

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <HeaderTable onClick={() => navigate("/expense/add")} />

      <CardContainer
        data={data}
        onDelete={onGetIdCard}
        navigate={navigate}
        type="expense"
      />

      <TableContainer
        data={data}
        onDelete={onGetIdCard}
        navigate={navigate}
        type="expense"
      />

      {show && (
        <Modal
          title={`Delete ${selected.category}`}
          desc="Are you sure you want to delete?"
          show={show}
          setShow={setShow}
          onDelete={onDelete}
        />
      )}
    </section>
  );
};

export default AllExpense;
