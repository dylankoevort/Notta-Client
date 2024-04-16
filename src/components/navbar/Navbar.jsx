import React, { useEffect, useState } from "react";
import { StyledNavbar, StyledNavbarContainer } from "./styles";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import {
  UserOutlined,
  SettingOutlined,
  DeleteOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { SlNotebook } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { Divider } from "antd";
import { UserButton } from "@clerk/clerk-react";
import { getNotesByUserId } from "../../api";

const Navbar = () => {
  const { user } = useUser();
  const location = useLocation();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, [user, location]);

  const fetchNotes = async () => {
    if (!user) return;
    try {
      const data = await getNotesByUserId(user?.id);
      if (data) {
        setNotes(data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const openPortfolio = () => {
    window.open("https://dylankoevort.com", "_blank");
  };

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
        <div className="nav-section">
          <h3>notes</h3>
          <ul>
            <li>
              <NavLink className="nav-item" to={"/notes"}>
                <SlNotebook />
                <p>notes</p>
              </NavLink>
            </li>
            {notes.map((note) => (
              <li key={note.noteId}>
                <NavLink className="nav-item" to={`/notes/${note.noteSlug}`}>
                  <CgNotes />
                  <p className="note-title">{note.noteTitle}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-section">
          <h3>settings</h3>
          <ul>
            <li>
              <NavLink className="nav-item" to={"/account"}>
                <UserOutlined />
                <p>account management</p>
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="nav-item" to={"/settings"}>
                <SettingOutlined />
                <p>app settings</p>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink className="nav-item" to={"/bin"}>
                <DeleteOutlined />
                <p>trash</p>
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="version">
          <h3 className="koevort" onClick={openPortfolio}>
            by koevort.
          </h3>
          <h3>1.0.0</h3>
        </div>
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
