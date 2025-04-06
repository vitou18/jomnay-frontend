import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqGetIncome } from "./request";
import { resetIncomeInfo, setIncome, setIncomeInfo } from "./slice";

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

  const onChangeAdd = (e) =>
    dispatch(setIncomeInfo({ name: e.target.name, value: e.target.value }));

  const onResetAdd = () => dispatch(resetIncomeInfo());

  return { ...income, fetchIncome, navigate, onChangeAdd, onResetAdd };
};

export default useIncome;
