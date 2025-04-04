import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqGetIncome } from "./request";
import { setIncome } from "./slice";

const useIncome = () => {
  const income = useSelector((state) => state.income);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchIncome = async () => {
    return reqGetIncome()
      .then((res) => {
        // console.log(res);
        dispatch(setIncome(res.data));
      })
      .catch((e) => console.log(e));
  };

  return { ...income, fetchIncome, navigate };
};

export default useIncome;
