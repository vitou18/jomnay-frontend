import React, { useEffect } from "react";
import Container from "../../layout/components/Container";
import useIncome from "./core/action";
import AllIncome from "./components/AllIncome";

const Income = () => {
  const { fetchIncome, income } = useIncome();

  useEffect(() => {
    fetchIncome();
  }, []);

  // console.log(income);

  return (
    <Container title="Income">
      <AllIncome data={income} />
    </Container>
  );
};

export default Income;
