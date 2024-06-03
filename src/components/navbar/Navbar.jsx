import React, { useEffect, useState } from "react";
import { StyledNavbar, StyledNavbarContainer } from "./styles";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { SlNotebook } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { Divider } from "antd";
import { UserButton, useClerk } from "@clerk/clerk-react";
import { getNotesByUserId } from "../../api";
import { GrClose } from "react-icons/gr";

const Navbar = ({ toggleNav, navOpen }) => {
  const { user } = useUser();
  const location = useLocation();
  const [notes, setNotes] = useState([]);
  const { signOut } = useClerk();

  useEffect(() => {
    fetchNotes();
  }, [user, location]);

  const fetchNotes = async () => {
    if (!user) return;
    try {
      const res = await getNotesByUserId(user?.id);
      if (res?.data) {
        setNotes(res.data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const openPortfolio = () => {
    window.open("https://dylankoevort.com", "_blank");
  };

  const renderDesktopNav = () => {
    return (
      <StyledNavbarContainer
        id="StyledNavbarContainer-Desktop"
        className="desktop"
      >
        <div className="user">
          <UserButton showName={true} />
          <Divider />
          <NavLink className="nav-item" to={"/notes"} onClick={toggleNav}>
            <SlNotebook />
            <p>all notes</p>
          </NavLink>
        </div>
        <div className="nav-section">
          <h3>notes</h3>
          <ul>
            {notes.map((note) => (
              <li key={note.noteId}>
                <NavLink
                  className="nav-item"
                  to={`/notes/${note.noteId}`}
                  onClick={toggleNav}
                >
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
              <NavLink className="nav-item" to={"/account"} onClick={toggleNav}>
                <UserOutlined />
                <p>account management</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="version">
          <h3 className="koevort" onClick={openPortfolio}>
            by koevort.
          </h3>
          <h3>1.3.0</h3>
        </div>
      </StyledNavbarContainer>
    );
  };

  const renderMobileNav = () => {
    return (
      <StyledNavbarContainer
        id="StyledNavbarContainer-Mobile"
        className="mobile"
      >
        <div className="close-nav">
          <GrClose size={24} onClick={toggleNav} />
        </div>
        <NavLink to={"/notes"} onClick={toggleNav}>
          <h1>notes</h1>
        </NavLink>
        <Divider />
        <NavLink to={"/account"} onClick={toggleNav}>
          <h1>account</h1>
        </NavLink>
        <Divider />
        <NavLink onClick={() => signOut({ redirectUrl: "/web" })}>
          <h1>sign out</h1>
        </NavLink>
        <div className="version">
          <h3 className="koevort" onClick={openPortfolio}>
            by koevort.
          </h3>
          <h3>1.3.0</h3>
        </div>
      </StyledNavbarContainer>
    );
  };

  return (
    <StyledNavbar id="StyledNavbar" className={!navOpen ? "hidden" : ""}>
      {renderDesktopNav()}
      {renderMobileNav()}
    </StyledNavbar>
  );
};

export default Navbar;
