import React, { useEffect } from "react";
import useIncome from "./core/action";
import Container from "../../layout/components/container/Container";
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
