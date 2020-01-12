import React, { Component } from "react";
import Parallax from "../../Parallax";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const pStyle = {
  textAlign: "left",
  fontFamily: "Teko, sans-serrif",
  fontSize: "30px"
};

const hStyle = {
  fontFamily: "Teko, sans-serrif"
};

class Landing extends Component {
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <Parallax
          paragraph="Duke it out with 4 of your friends or foes, in this turned based,tactical, and unpredictable game experience!"
          title="Welcome to Footballadamus"
          url="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/blackgreyfootball.jpg?raw=true"
        />

        <Parallax
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.!"
          title="Make the call!"
          url="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/standingfootball.jpg?raw=true"
        />

        <Parallax
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.!"
          title="Live Action, Live Updates!"
          url="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/live.jpg?raw=true"
        />

        <Parallax
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.!"
          title="Live Action, Live Updates!"
          url="https://i.ytimg.com/vi/MzIIh5UwR-U/maxresdefault.jpg"
        />

       <Parallax
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.!"
          title="Gain Braggin Rights!"
          url="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/04/786630-new-england-patriots-reuters.jpg"
        />

        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Ready</b> to{" "}
                <span style={{ fontFamily: "monospace" }}>Get Started?</span>
              </h4>
              <p className="flow-text grey-text text-darken-1">
                Once you start , you cannot go back
              </p>
              <br />

              <div className="row">
                <div className="col"></div>
              </div>
            </div>
            <br />

            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Landing;

Landing.propTypes = {
  // loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps
  // { loginUser }
)(Landing);
