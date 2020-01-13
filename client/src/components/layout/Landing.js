import React, { Component } from "react";
import Parallax from "../../Parallax";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../appLayout/Navbar";


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
        <Navbar />

        {/* <div className="col"> */}
        <Parallax
          paragraph="Duke it out with 4 of your friends or foes, in this turned based,tactical, and unpredictable game experience!"
          title="Welcome to Footballadamus!"
          url="https://github.com/UlyssesFigueroa/Sandbox/blob/jorge/client/public/assets/images/theBoys.jpg?raw=truee"
        />
        {/* </div> */}

        {/* <div className="col"> */}
        <Parallax
          paragraph="Each player will be allowed to make once choice on a possible play or outcome  during a LIVE GAME (Tackle, Pass, Run , Field Goal, ETC) that will be active for the current play/drive and another that will be placed in que, the latter will then come up on the next play"
          title="Make the call!"
          url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/back-view-shot-of-the-beautiful-professional-gamer-royalty-free-image-1010650900-1564417674.jpg?crop=0.757xw:1.00xh;0.109xw,0&resize=640:*"
        />
        {/* </div> */}

        {/* <div className="col"> */}
        <Parallax
          paragraph="Using advance updates via API, live gameplay action will be provided via our feed and if your selection matches the play or Outcome you had decided on, then you shall be awarded a point towards your score"
          title="Live Action, Live Updates!"
          url="https://cdn.vox-cdn.com/thumbor/9ovEcbVj59oLaNMOxK4H02tlNGI=/0x0:4272x2524/1200x800/filters:focal(1875x700:2557x1382)/cdn.vox-cdn.com/uploads/chorus_image/image/65905530/usa_today_11987845.0.jpg"
        />
        {/* </div> */}

        {/* <div className="col"> */}
        <Parallax
          paragraph="Whats the point of playing and getting dub's if you cant trash talk it up a bit, if you are an expert in the art of getting under someones skin, then you will love the LIVE CHAT feature. With this option you can keep spitting out the insults or perhaps giving excuses for the lesser players on the scoreboard"
          title="Trash Talk!"
          url="https://github.com/UlyssesFigueroa/Sandbox/blob/jorge/client/public/assets/images/fans-fighting.jpg?raw=true"
        />
        {/* </div> */}

        {/* <div className="col"> */}
        <Parallax
          paragraph="Whoever said winning is not everything obviously never won big or was to afraid to take what is theirs. With our stats tracker and profile options you can make sure your victories are written in a digital stone tablet for all to see and admire "
          title="Gain Braggin Rights!"
          url="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/04/786630-new-england-patriots-reuters.jpg"
        />
        {/* </div> */}

        {/* buttons start down here */}

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
