import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <!-- Dropdown Structure -->
    <div>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
      <nav
        style={{
          backgroundColor: "#2e36ad",
          fontFamily: "monospace"
        }}
      >
        <div class="nav-wrapper">
          <ul class="brand-logo navbar-ul">
            <li>
              <Link
                to="rules"
                style={{
                  backgroundColor: "#266BF1"
                }}
                // className="btn"
                type="submit"
                name="action"
              >
                Rules
              </Link>
            </li>
            <li>
              <Link
                to="Share"
                style={{
                  backgroundColor: "#266BF1"
                }}
                // className="btn"
                type="submit"
                name="action"
              >
                Share
              </Link>
            </li>
            <li>
              <img
                src="../../../assets/images/Footballimage.png"
                alt="football-icon"
                height="56px"
              />
            </li>
            <li>
              <Link
                to="register"
                style={{
                  backgroundColor: "#266BF1"
                }}
                // className="btn"
                type="submit"
                name="action"
              >
                Sign
              </Link>
            </li>

            <li>
              <Link
                to="login"
                style={{
                  backgroundColor: "#266BF1"
                }}
                // className="btn"
                type="submit"
                name="action"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
