import React, { useState } from "react";
import useIncome from "../core/action";
import HeaderTable from "../../../layout/components/HeaderTable";
import CardContainer from "../../../layout/components/CardContainer";
import TableContainer from "../../../layout/components/TableContainer";
import Modal from "../../../utils/Modal";

const AllIncome = ({ data }) => {
  const { onDeleteIncome, navigate } = useIncome();
  const [selected, setSelected] = useState({ id: null, category: null });
  const [show, setShow] = useState(false);

  const onGetIdCard = (id, category) => {
    setSelected({ id, category });
    setShow(true);
  };

  // console.log(selected);

  const onDelete = () => {
    onDeleteIncome(selected.id, selected.category);
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
          onDelete={onDelete}
        />
      )}
    </section>
  );
};

export default AllIncome;
