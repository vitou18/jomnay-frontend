import React, { useEffect, useState } from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useIncome from "../core/action";
import Container from "../../../layout/components/Container";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import toast from "react-hot-toast";

const EditIncome = () => {
  const { id } = useParams();
  const {
    navigate,
    loading,
    onChangeEdit,
    incomeDetails,
    fetchIncomeById,
    onUpdateIncome,
  } = useIncome();
  const [verify, setVerify] = useState(null);

  useEffect(() => {
    fetchIncomeById(id);
    setVerify(incomeDetails);
  }, [id]);

  let { category, amount, date } = incomeDetails;
  // console.log(incomeDetails);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (incomeDetails === verify) {
      toast.error("No Changes Detected...");
    }

    await onUpdateIncome();
    navigate("/income");
  };

  return (
    <Container title="Income - Edit" navigate={navigate}>
      <div className="bg-[#fff] shadow-[0_0_8px_0_rgba(0,0,0,0.09)] rounded-lg p-[20px]">
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
              text={loading ? "Updating Income..." : "Update Income"}
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditIncome;
