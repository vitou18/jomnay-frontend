import React, { useEffect, useState } from "react";
import useExpense from "../core/action";
import moment from "moment/moment";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";

const Edit = ({ onClick }) => {
  const { loading, onChangeEdit, expenseDetails, onUpdateExpense } =
    useExpense();
  const [verify, setVerify] = useState(null);

  useEffect(() => {
    setVerify(expenseDetails);
  }, []);

  let { category, amount, date } = expenseDetails;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (expenseDetails === verify) {
      toast.error("No Changes Detected...");

      return;
    }

    await onUpdateExpense();
    onClick();
  };

  //   console.log(expenseDetails);

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-y-[10px] md:gap-y-[20px] mt-[20px]">
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
  );
};

export default Edit;
