import React, { useEffect } from "react";
import Container from "../../layout/components/Container";
import useReport from "./core/action";
import AllReport from "./components/AllReport";

const Report = () => {
  const { report, fetchReport } = useReport();

  useEffect(() => {
    fetchReport();
  }, []);

  // console.log(report);

  return (
    <Container title="Report">
      <AllReport data={report} />
    </Container>
  );
};

export default Report;
