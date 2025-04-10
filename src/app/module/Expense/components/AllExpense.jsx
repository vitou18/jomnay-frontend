import React from "react";
import useExpense from "../core/action";
import HeaderTable from "../../../layout/components/HeaderTable";
import CardContainer from "../../../layout/components/CardContainer";

const AllExpense = ({ data }) => {
  const { navigate, onDeleteExpense } = useExpense();

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <HeaderTable onClick={() => navigate("/expense/add")} />

      <CardContainer
        data={data}
        onDelete={onDeleteExpense}
        navigate={navigate}
        type="expense"
      />
    </section>
  );
};

export default AllExpense;
