import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li>
          <Link to="/dashboard/settings">App Settings</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
};

export default DashboardPage;
