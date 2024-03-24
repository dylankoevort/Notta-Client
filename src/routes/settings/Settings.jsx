import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <>
      <h1>Settings page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      </ul>
    </>
  );
};

export default SettingsPage;
