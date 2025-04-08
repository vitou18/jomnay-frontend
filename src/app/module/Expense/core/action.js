import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqGetExpense } from "./request";
import { setExpense } from "./slice";

const useExpense = () => {
  const expense = useSelector((state) => state.expense);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return { fetchExpense, ...expense, navigate };
};

export default useExpense;
