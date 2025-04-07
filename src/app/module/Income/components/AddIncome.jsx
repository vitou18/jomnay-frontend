import React from "react";
import Icon from "../../../layout/components/Icon";
import { RiWalletLine } from "react-icons/ri";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useIncome from "../core/action";
import Container from "../../../layout/components/Container";

const AddIncome = () => {
  const { onChangeAdd, incomeInfo, navigate, onCreateIncome, loading } =
    useIncome();
  const { category, amount, date } = incomeInfo;

  const onSubmit = async (e) => {
    e.preventDefault();
    await onCreateIncome();
    navigate("/income");
  };

  return (
    <Container title="Income - Add" navigate={navigate}>
      <div className="bg-[#fff] shadow-[0_0_8px_0_rgba(0,0,0,0.09)] rounded-lg p-[20px]">
        <form onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 gap-y-[10px] md:gap-y-[20px] md:gap-x-[30px]">
            <Input
              placeholder="Enter your category"
              name="category"
              type="text"
              value={category}
              onChange={onChangeAdd}
            />

            <Input
              placeholder="Enter your amount"
              name="amount"
              type="number"
              value={amount}
              onChange={onChangeAdd}
            />

            <Input
              placeholder="Enter your date"
              name="date"
              type="date"
              value={date}
              onChange={onChangeAdd}
            />

            <Button
              text={loading ? "Adding Income..." : "Add Income"}
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddIncome;
