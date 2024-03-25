import React from "react";
import { StyledNavbar, StyledNavbarContainer } from "./styles";
import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  SettingOutlined,
  DeleteOutlined,
  HomeOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarContainer>
        <div className="user">
          <UserButton showName={true} />
          <Divider />
          <NavLink className="nav-item" to={"/"}>
            <HomeOutlined />
            <p>home</p>
          </NavLink>
        </div>
        <div className="notebooks">
          <h3>notebooks</h3>
          <ul>
            <li>
              <NavLink className="nav-item" to={"/notebooks"}>
                <BookOutlined />
                <p>notebooks</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="settings">
          <h3>settings</h3>
          <ul>
            <li>
              <NavLink className="nav-item" to={"/account"}>
                <UserOutlined />
                <p>account management</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to={"/settings"}>
                <SettingOutlined />
                <p>app settings</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to={"/bin"}>
                <DeleteOutlined />
                <p>trash</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="version">
          <h3>by koevort.</h3>
          <h3>1.0.0</h3>
        </div>
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
