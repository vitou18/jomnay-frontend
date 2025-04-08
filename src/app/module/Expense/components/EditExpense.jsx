import React, { useEffect, useState } from "react";
import Container from "../../../layout/components/Container";
import useExpense from "../core/action";
import { useParams } from "react-router-dom";

const EditExpense = () => {
  const { id } = useParams();
  const { navigate, loading, expenseDetails, fetchExpenseById } = useExpense();
  const [verify, setVerify] = useState(null);

  useEffect(() => {
    fetchExpenseById(id);
    setVerify(expenseDetails);
  }, [id]);



  return (
    <Container title="Expense - Edit" navigate={navigate}>
      <div className="bg-[#fff] shadow-[0_0_8px_0_rgba(0,0,0,0.09)] rounded-lg p-[20px]">
        
      </div>
    </Container>
  );
};

export default EditExpense;
