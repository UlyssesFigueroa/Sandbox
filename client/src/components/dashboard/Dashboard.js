import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PlayerChoices from "../appLayout/PlayerChoices";
import Players from "../appLayout/Players";
import Navbar from "../layout/Navbar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      result: {},
      search: "",
      score: {},
      quarters: {},
      plays: {}
      // getInitialState: function(){
      //   return { active: null}
      // },
      // toggle: function(position){
      //   if (this.state.active === position) {
      //     this.setState({active : null})
      //   } else {
      //     this.setState({active : position})
      //   }
      // },
      // myColor: function(position) {
      //   if (this.state.active === position) {
      //     return "blue";
      //   }
      //   return "";
      // },
    };
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleCheck = e => {
    console.log("hello");
    // alert(e.target.value);
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container center-align">
        <Navbar />
        <div className="row">
          <img
            alt="football-icon"
            height="375px"
            src="https://i.ya-webdesign.com/images/vector-avatars-geometric-2.png"
          />

          <h4 style={{ textAlign: "center" }}>
            <b>Hey there,</b> {user.name.split(" ")[0]}
            <p>Wins:8, Loses:2</p>
            <p className="flow-text grey-text text-darken-1">
              You are logged in and ready for action!
            </p>
          </h4>
        </div>
        <div className="row">
          <div className="col s12 center-align">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Auto Join
            </button>

            <div className="col">
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Create Game
              </button>
            </div>
            <div className="row">
              <ul class="collection with-header">
                <li class="collection-header">
                  <h4>Send Invites</h4>
                </li>
                <li class="collection-item">
                  <div>
                    Alvin
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
                <li class="collection-item">
                  <div>
                    Douglas
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
                <li class="collection-item">
                  <div>
                    Marvin
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
                <li class="collection-item">
                  <div>
                    Ricardo
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="row">
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
