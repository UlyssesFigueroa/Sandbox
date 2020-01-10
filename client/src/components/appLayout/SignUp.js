import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  fontSize: '30px',
  textAlign: 'center'

};

function SignUp() {
  return (
    <div classNameName="jumbotron">
      <h1 style={divStyle}>Create an account!</h1>
      <div className="field">
        {/* <label className="label">Name</label> */}
        <div className="control">
          {/* <input className="input" type="text" placeholder="Your Name"/> */}
        </div>
      </div>

      <div className="field">
        <label className="label">New Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="New Username" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>

      <div className="field">
        <label className="label">New Password</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="password"
            placeholder="New Password"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </div>
        {/* <p className="help is-danger">This email is invalid</p> */}
      </div>

      <div className="field">
        <label className="label">Avatar</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Options Below*/}

      {/* <div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div> */}

      {/* <div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div> */}

      {/* <div className="field">
  <div className="control">
    <label className="radio">
      <input type="radio" name="question"/>
      Yes
    </label>
    <label className="radio">
      <input type="radio" name="question"/>
      No
    </label>
  </div>
</div> */}

      <div className="field is-grouped">
        <div className="control">
          <button className="button"><Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>Sign Up
            
        </Link></button>
        </div>
        <div className="control">
          <button className="button is-link is-light"><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Cancel
        </Link></button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
