import React from "react";
import logo from "../assets/Logo (8).png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" style={{ height: "25px" }} />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Service
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Feature
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Product
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Testimonial
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            style={{ color: "#4caf4f" }}
          >
            Login
          </a>

          <button
            className="btn text-white"
            style={{ backgroundColor: "#4caf4f" }}
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
