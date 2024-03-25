import { Link } from "react-router-dom";
import { Divider } from "antd";
import { StyledDashboard } from "./styles";

const DashboardPage = () => {
  return (
    <StyledDashboard>
      <h1>Dashboard</h1>
      <Divider />
      <h2>recently opened</h2>
      <Divider />
      <h2>notebooks</h2>
      <h3>new notebook +</h3>
    </StyledDashboard>
  );
};

export default DashboardPage;
