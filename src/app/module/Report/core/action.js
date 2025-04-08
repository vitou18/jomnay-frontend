import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useReport = () => {
  const report = useSelector((state) => state.report);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return {
    ...report,
  };
};

export default useReport;
