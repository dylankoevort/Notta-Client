import { Link, useNavigate } from "react-router-dom";
import { Divider } from "antd";
import { StyledDashboard } from "./styles";
import { useEffect } from "react";

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/notes");
  }, []);

  return (
    <StyledDashboard>
      <h1>Dashboard</h1>
      <Divider />
      <h2>recently opened</h2>
      <Divider />
      <h2>collections</h2>
      <h3>new collection +</h3>
    </StyledDashboard>
  );
};

export default DashboardPage;
