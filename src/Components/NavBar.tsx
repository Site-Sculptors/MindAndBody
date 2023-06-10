import "../Styles/Header.css";
//import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/mind_and_body_logo.png";

export default function NavBar() {
  const isActive = (path: string) => window.location.pathname === path;

  const location = useLocation();
  /* const [extendNavbar, setExtendNavbar] = useState(false);
  useEffect(() => {
    setExtendNavbar(false);
  }, [location]); */

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md p-1">
        <p className="my-0 align-middle ms-3 ">Mind</p>
        <img
          src={logo}
          alt="Mind and Body Logo"
          className="flex-start m-0"
          height="30px"
        />
        <p className="my-0 align-middle">Body</p>
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end px-5"
          id="navbarTogglerDemo03">
          <NavLink
            to="/"
            className={`nav-item nav-link mx-4 ${
              isActive("/") ? "active" : ""
            }`}>
            Home
          </NavLink>
          <NavLink
            to="/eatRight"
            className={`nav-item nav-link mx-4 ${
              isActive("/eatRight") ? "active" : ""
            }`}>
            Eat Right
          </NavLink>
          <NavLink
            to="/workouts"
            className={`nav-item nav-link mx-4 ${
              isActive("/workouts") ? "active" : ""
            }`}>
            Workouts
          </NavLink>
          <NavLink
            to="/about"
            className={`nav-item nav-link mx-4 ${
              isActive("/about") ? "active" : ""
            }`}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={`nav-item nav-link mx-4 ${
              isActive("/contact") ? "active" : ""
            }`}>
            Contact
          </NavLink>
          <NavLink
            to="/signin"
            className={`nav-item nav-link me-2 ms-5 ${
              isActive("/signin") ? "active" : ""
            }`}>
            Sign In
          </NavLink>
        </div>
      </nav>
    </>
  );
}
