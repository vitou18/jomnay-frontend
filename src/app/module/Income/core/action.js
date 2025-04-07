import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqCreateIncome, reqDeleteIncome, reqGetIncome } from "./request";
import { resetIncomeInfo, setIncome, setIncomeInfo } from "./slice";
import toast from "react-hot-toast";
import moment from "moment";
import { useState } from "react";
import Swal from "sweetalert2";

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
      fetchIncome();
    } catch {
      toast.error("Error adding income");
    } finally {
      setLoading(false);
    }
  };

  const onDeleteIncome = async (id, category) => {
    Swal.fire({
      title: "Confirm Delete",
      text: `Are you sure you want to delete ${category}?`,
      icon: "warning",
      background: "#fff",
      color: "#3a3a3a",
      showCancelButton: true,
      cancelButtonColor: "gray",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#DC2626",
      confirmButtonText: "Delete",
      customClass: {
        popup: "rounded-lg",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        reqDeleteIncome(id)
          .then(() => {
            toast.success(`${category} has been deleted...`);
            fetchIncome();
          })
          .catch(() => {
            toast.error("Error deleting income...");
          });
      }
    });
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
  };
};

export default useIncome;
