import { useEffect } from "react";
import useIncome from "../core/action";
import Table from "./Table";

const AllIncome = () => {
  const { fetchIncome, income, onDeleteIncome, navigate } = useIncome();

  useEffect(() => {
    fetchIncome();
  }, []);

  return (
    <>
      <Table data={income} onDelete={onDeleteIncome} navigate={navigate} />
    </>
  );
};

export default AllIncome;
