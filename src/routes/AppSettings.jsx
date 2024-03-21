import { Link } from "react-router-dom";

const AppSettingsPage = () => {
  return (
    <>
      <h1>App Settings page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
};

export default AppSettingsPage;
