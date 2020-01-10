import React from "react";
import { Link } from "react-router-dom";

// will link styles later
const headerStyle = {
  fontSize: "35px",
  textAlign: "center"
};

const divStyle = {
  fontSize: "30px",
  textAlign: "center"
};

const ruleStyle = {
  fontSize: "15px",
  textAlign: "center"
};

function Welcome() {
  return (
    <div className="jumbotron">
      <h1 style={headerStyle}>Welcome to Footballadamus</h1>

      <img src="https://sportshub.cbsistatic.com/i/r/2019/09/26/f81faf11-54b5-4c2f-9d7f-d129b9e45803/thumbnail/640x360/9848805b319ccb9c8891ee149e020ce7/college-football-general.jpg" />

      {/* rules go under here*/}

      <div style={ruleStyle} className="container">
        <h2 style={divStyle}>Rules</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <h2>Ready to begin?</h2>

        <div style={ruleStyle} className="buttons">
          <button className="button">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/signup"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Create an account
            </Link>
          </button>

          <button className="button">
            <Link
              to="/signin"
              className={
                window.location.pathname === "/signin"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign back in
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
