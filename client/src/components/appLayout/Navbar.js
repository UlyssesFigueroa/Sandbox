import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // const [isNavActive, setNavActive] = useState(false);
  // state = {
  //   show: false
  // };
  // showModal = e => {
  //   this.setState({
  //     show: true
  //   });
  // };

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
      <nav style={{
                  backgroundColor:"#2e36ad",
                  fontFamily: "monospace"
                }}>
        <div class="nav-wrapper">
          <ul class="brand-logo navbar-ul">
            <li>
              <Link
                to="/rules"
                className="white-text"
              >
                Rules
              </Link>
            </li>
            <li>
              <a href="#">Share</a>
            </li>
            <li>
              <img
                src="../../../assets/images/Footballimage.png"
                alt="football-icon"
                height="56px"
              />
            </li>
            <li>
              <a href="https://github.com/UlyssesFigueroa/Sandbox">Github</a>
            </li>
            {/* <!-- Dropdown Trigger --> */}
            <li>
              <a class="dropdown-trigger" href="/login" data-target="dropdown1">
                <i class="medium material-icons right ">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
