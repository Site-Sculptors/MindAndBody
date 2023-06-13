import "../Styles/Header.css";
import { Button, Nav, Navbar, Stack } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import logo from "/mind_and_body_logo.png";

export default function NavBar() {
  const isActive = (path: string) => window.location.pathname === path;

  const location = useLocation();

  const [extendNavbar, setExtendNavbar] = useState(false);
  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);

  return (
    <>
      <Nav className="navbar navbar-expand-md fixed-top mb-0 p-0 p-md-3 align-items-center">
        <Stack direction="horizontal" gap={0} mx-0 >
          <p className="my-0 align-middle">Mind</p>
          <img
            src={logo}
            alt="Mind and Body Logo"
            className="flex-start m-0"
            height="30px"
          />
          <p className="my-0 align-middle">Body</p>
        </Stack>
        <Button
          className="navbar-toggler ms-2"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            //  setExtendNavbar((curr) => !curr);
          }}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div
          className="collapse navbar-collapse justify-content-end px-5 ms-1"
          id="nav">
          <NavLink
            to="/"
            className={`nav-item nav-link mx-1 ${isActive("/") ? "active" : ""
              }`}>
            Home
          </NavLink>
          <NavLink
            to="/eatRight"
            className={`nav-item nav-link  mx-1  ${isActive("/eatRight") ? "active" : ""
              }`}>
            Eat Right
          </NavLink>
          <NavLink
            to="/workouts"
            className={`nav-item nav-link  mx-1  ${isActive("/workouts") ? "active" : ""
              }`}>
            Workouts
          </NavLink>
          <NavLink
            to="/about"
            className={`nav-item nav-link  mx-1  ${isActive("/about") ? "active" : ""
              }`}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={`nav-item nav-link  mx-1  ${isActive("/contact") ? "active" : ""
              }`}>
            Contact
          </NavLink>
          <NavLink
            to="/signin"
            className={`nav-item nav-link me-2 ms-5 ${isActive("/signin") ? "active" : ""
              }`}>
            Sign In
          </NavLink>
        </div>
      </Nav>
    </>
  );
}
