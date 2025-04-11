import React, { useEffect, useState } from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useIncome from "../core/action";
import toast from "react-hot-toast";
import moment from "moment/moment";

const Edit = ({ onClick }) => {
  const { loading, onChangeEdit, incomeDetails, onUpdateIncome } = useIncome();
  const [verify, setVerify] = useState(null);

  useEffect(() => {
    setVerify(incomeDetails);
  }, []);

  let { category, amount, date } = incomeDetails;

  // console.log(incomeDetails);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (incomeDetails === verify) {
      toast.error("No Changes Detected...");

      return;
    }

    await onUpdateIncome();
    onClick();
  };

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
          text={loading ? "Updating Income..." : "Update Income"}
          type="submit"
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default Edit;
