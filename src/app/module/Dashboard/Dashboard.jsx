import React, { useEffect } from "react";
import Container from "../../layout/components/Container";
import useDashboard from "./core/action";

const Dashboard = () => {
  const { dashboard, fetchDashboard } = useDashboard();

  useEffect(() => {
    fetchDashboard();
  }, []);

  console.log(dashboard);

  return (
    <Container title="Dashboard">
      <div className="w-full h-[250px] bg-amber-50"></div>
      <div className="w-full h-[250px] bg-amber-200"></div>
      <div className="w-full h-[250px] bg-amber-300"></div>
      <div className="w-full h-[250px] bg-amber-400"></div>
      <div className="w-full h-[250px] bg-amber-500"></div>
      <div className="w-full h-[250px] bg-amber-600"></div>
    </Container>
  );
};

export default Dashboard;
