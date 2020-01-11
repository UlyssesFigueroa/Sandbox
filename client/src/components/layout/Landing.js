import React, { Component } from "react";
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
      
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            {/* <h4>
              <b>Welcome</b> to{" "}
              <span style={{ fontFamily: "monospace" }}>Footballadamus</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Duke it out with 4 of your friends or foes, in this turned based,
              tactical, and unpredictable game experience!
            </p> */}
            <br />

            {/* <div className="parallax-container">
                  <div className="parallax">
                    <img src="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/blackgreyfootball.jpg?raw=true" alt="" className="responsive-img"/>

                    </div>
                  </div> */}
               

            <div className="row">
              <div className="col">
                {/* <h2 style={hStyle}>Make the call!</h2>
                <p style={pStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p> */}

             

                {/* <h2 style={hStyle}>Live Action, Live Updates</h2>
                <p style={pStyle}>
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>

                <h2 style={hStyle}>Trash Talk</h2>
                <p style={pStyle}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                <h2 style={hStyle}>Gain Braggin Rights</h2>
                <p style={pStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p> */}
              </div>
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
