import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from '../Modal';

class Navbar extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };

  render() {
    return (
      <div>
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
      <nav>
        <div class="nav-wrapper">
          {/* <a href="#!" class="brand-logo">
      <img src="../../../assets/images/Footballimage.png" height="50px"/>
    </a> */}
          <ul class="brand-logo navbar-ul">
            <li><Link
              to="/login"
              style={{
                fontFamily: "monospace"
              }}
              className="white-text"
            >My Game
            </Link></li>
            <li><a href="/login">Lobby</a></li>
            <li>
                <img src="../../../assets/images/Footballimage.png" alt="football-icon" height="56px" />
            </li>
            <li onClick={e => {this.showModal()}}>Chat</li>
            {/* <!-- Dropdown Trigger --> */}
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="medium material-icons right ">account_circle</i></a></li>
          </ul>
        </div>
      </nav>
      <Modal show={this.state.show} />
    </div>
    );
  }
}
export default Navbar;