import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqGetReport } from "./request";
import { setReport } from "./slice";

const useReport = () => {
  const report = useSelector((state) => state.report);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchReport = async () => {
    return reqGetReport()
      .then((res) => {
        // console.log(res.data.report);
        dispatch(setReport(res.data.report));
      })
      .catch((e) => {
        console.log("Error fetching report...");
      });
  };

  return {
    ...report,
    fetchReport,
    navigate,
  };
};

export default useReport;
