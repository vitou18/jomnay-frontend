import React, { useEffect, useState } from "react";
import Container from "../../../layout/components/Container";
import useExpense from "../core/action";
import { useParams } from "react-router-dom";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import moment from "moment/moment";
import toast from "react-hot-toast";

const EditExpense = () => {
  const { id } = useParams();
  const {
    navigate,
    loading,
    expenseDetails,
    fetchExpenseById,
    onChangeEdit,
    onUpdateExpense,
  } = useExpense();
  const [verify, setVerify] = useState(null);

  useEffect(() => {
    fetchExpenseById(id);
    setVerify(expenseDetails);
  }, [id]);

  let { category, amount, date } = expenseDetails;

  // console.log(expenseDetails);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (expenseDetails === verify) {
      toast.error("No Changes Detected...");
    }

    await onUpdateExpense();
    navigate("/expense");
  };

  return (
    <Container title="Expense - Edit" onClick={() => navigate("expense")}>
      <div className="bg-[#fff] shadow-[0_0_8px_0_rgba(0,0,0,0.05)] rounded-lg p-[20px]">
        <form onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 gap-y-[10px] md:gap-y-[20px] md:gap-x-[30px]">
            <Input
              placeholder="Enter your category"
              name="category"
              type="text"
              value={category}
              onChange={onChangeEdit}
            />

            <Input
              placeholder="Enter your amount"
              name="amount"
              type="number"
              value={amount}
              onChange={onChangeEdit}
            />

            <Input
              placeholder="Enter your date"
              name="date"
              type="date"
              value={date ? moment(date).format("YYYY-MM-DD") : ""}
              onChange={onChangeEdit}
            />

            <Button
              text={loading ? "Updating Expense..." : "Update Expense"}
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditExpense;
