import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  reqCreateIncome,
  reqDeleteIncome,
  reqGetIncome,
  reqGetIncomeById,
  reqUpdateIncome,
} from "./request";
import {
  resetIncomeInfo,
  setIncome,
  setIncomeDetails,
  setIncomeDetailsInfo,
  setIncomeInfo,
} from "./slice";
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
    } catch (e) {
      console.log("Error fetching income...");
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
      fetchIncome();
    } catch {
      toast.error("Error adding income");
    } finally {
      setLoading(false);
    }
  };

  const onDeleteIncome = async (id, category) => {
    return reqDeleteIncome(id)
      .then(() => {
        toast.success(`${category} has been deleted...`);
        fetchIncome();
      })
      .catch(() => {
        toast.error("Error deleting income...");
      });
  };

  const fetchIncomeById = (payload) => dispatch(setIncomeDetails(payload));

  const onChangeEdit = (e) => {
    const { name, value } = e.target;
    dispatch(setIncomeDetailsInfo({ name, value }));
  };

  const onUpdateIncome = async () => {
    const data = income.incomeDetails;

    setLoading(true);

    try {
      await reqUpdateIncome(data._id, data);
      toast.success(`${data?.category} has been updated...`);

      fetchIncome();
    } catch {
      toast.error("Error updating income");
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
    onDeleteIncome,
    fetchIncomeById,
    onChangeEdit,
    onUpdateIncome,
  };
};

export default useIncome;
