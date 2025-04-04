import React, { useEffect } from "react";
import Container from "../../layout/components/Container";
import useIncome from "./core/action";

const Income = () => {
  const { fetchIncome, income } = useIncome();

  useEffect(() => {
    fetchIncome();
  }, []);

  console.log(income);

  return (
    <Container title="Income">
      <div className="w-full h-[250px] bg-amber-50"></div>
      <div className="w-full h-[250px] bg-amber-200"></div>
      <div className="w-full h-[250px] bg-amber-300"></div>
      <div className="w-full h-[250px] bg-amber-400"></div>
      <div className="w-full h-[250px] bg-amber-500"></div>
      <div className="w-full h-[250px] bg-amber-600"></div>
    </Container>
  );
};

export default Income;
