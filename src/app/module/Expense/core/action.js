import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqCreateExpense, reqDeleteExpense, reqGetExpense } from "./request";
import { resetExpenseInfo, setExpense, setExpenseInfo } from "./slice";
import { useState } from "react";
import toast from "react-hot-toast";
import moment from "moment/moment";
import Swal from "sweetalert2";

const useExpense = () => {
  const expense = useSelector((state) => state.expense);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchExpense = async () => {
    return reqGetExpense()
      .then((res) => {
        // console.log(res)
        dispatch(setExpense(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeAdd = (e) =>
    dispatch(setExpenseInfo({ name: e.target.name, value: e.target.value }));

  const onResetAdd = () => dispatch(resetExpenseInfo);

  const onCreateExpense = async () => {
    const { category, amount, date } = expense.expenseInfo;

    if (!category || !amount || !date) {
      toast.error("Please fill in all fields.");
      return;
    }

    const formattedDate = moment(date).toISOString();

    const data = {
      ...expense.expenseInfo,
      date: formattedDate,
    };

    setLoading(true);

    try {
      await reqCreateExpense(data);

      toast.success("Expense added...");
      onResetAdd();
      fetchExpense();
    } catch {
      toast.error("Error adding expense");
    } finally {
      setLoading(false);
    }
  };

  const onDeleteExpense = async (id, category) => {
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
        reqDeleteExpense(id)
          .then(() => {
            toast.success(`${category} has been deleted...`);
            fetchExpense();
          })
          .catch(() => {
            toast.error("Error deleting income...");
          });
      }
    });
  };

  return {
    fetchExpense,
    ...expense,
    navigate,
    onChangeAdd,
    onResetAdd,
    onCreateExpense,
    loading,
    onDeleteExpense,
  };
};

export default useExpense;
