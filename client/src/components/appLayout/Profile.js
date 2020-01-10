import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  fontSize: "30px",
  textAlign: "center"
};

function Profile() {
  return (
    <div className="container">
      <h1 style={divStyle}> Profile Page</h1>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">BigDaddyKane078</p>
            </div>
          </div>

          <div className="content">
            <p>Wins:0, Loses:2</p>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
      <br />

      <div class="buttons">
        <button class="button is-primary"><Link to="/playerque" className={window.location.pathname === "/playerque" ? "nav-link active" : "nav-link"}>
                    Create a Game
        </Link></button>
        <button class="button is-link">Search for a Game</button>
      </div>
    </div>
  );
}

export default Profile;
