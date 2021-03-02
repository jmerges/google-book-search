import React from "react";
import { Link } from "react-router-dom";
import Style from "./Style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand" href="#">
        Google Books
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Saved<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
