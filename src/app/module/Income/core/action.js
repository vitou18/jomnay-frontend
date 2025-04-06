import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqCreateIncome, reqGetIncome } from "./request";
import { resetIncomeInfo, setIncome, setIncomeInfo } from "./slice";
import toast from "react-hot-toast";
import moment from "moment";
import { useState } from "react";

const useIncome = () => {
  const income = useSelector((state) => state.income);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchIncome = async () => {
    try {
      const res = await reqGetIncome();
      dispatch(setIncome(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeAdd = (e) =>
    dispatch(setIncomeInfo({ name: e.target.name, value: e.target.value }));

  const onResetAdd = () => dispatch(resetIncomeInfo());

  const onCreateIncome = async () => {
    const { category, amount, date } = income.incomeInfo;

    if (!category || !amount || !date) {
      toast.error("Please fill in all fields.");
      return;
    }

    const formattedDate = moment(date).toISOString();

    const data = {
      ...income.incomeInfo,
      date: formattedDate,
    };

    setLoading(true);
    try {
      await reqCreateIncome(data);
      toast.success("Income added...");
      onResetAdd();
      navigate("/income");
    } catch {
      toast.error("Error adding income");
    } finally {
      setLoading(false);
    }
  };

  return {
    ...income,
    loading,
    fetchIncome,
    navigate,
    onChangeAdd,
    onResetAdd,
    onCreateIncome,
  };
};

export default useIncome;
