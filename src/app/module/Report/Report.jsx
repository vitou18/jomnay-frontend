import React from "react";
import Container from "../../layout/components/Container";
import useReport from "./core/action";

const Report = () => {
  const { report } = useReport();

  console.log(report);

  return <Container title="Report"></Container>;
};

export default Report;
