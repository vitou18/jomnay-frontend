import React from "react";
import useIncome from "../core/action";
import HeaderTable from "../../../layout/components/HeaderTable";
import CardContainer from "../../../layout/components/CardContainer";

const AllIncome = ({ data }) => {
  const { onDeleteIncome, navigate } = useIncome();

  return (
    <section className="bg-[#fff] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <HeaderTable onClick={() => navigate("/income/add")} />

      <CardContainer
        data={data}
        onDelete={onDeleteIncome}
        navigate={navigate}
        type="income"
      />
    </section>
  );
};

export default AllIncome;
