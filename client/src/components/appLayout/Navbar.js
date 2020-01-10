import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // const [isNavActive, setNavActive] = useState(false);
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };

  return (
    // <!-- Dropdown Structure -->
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
            <li><a href="#">Lobby</a></li>
            <li>
                <img src="../../../assets/images/Footballimage.png" alt="football-icon" height="56px" />
            </li>
            <li onClick={e => {this.showModal()}}><a href="#">Chat</a></li>
            {/* <!-- Dropdown Trigger --> */}
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="medium material-icons right ">account_circle</i></a></li>
          </ul>
        </div>
      </nav>
    </div>

    // <nav className="navbar is-transparent">
    //   <div className="navbar-brand">
    //     <a className="navbar-item" href="/l">
    //       <img
    //         src="https://github.com/UlyssesFigueroa/Footballadamus/blob/jorge/assets/images/Footballimage.png?raw=true"
    //         alt="Football: a modern CSS framework based on Flexbox"
    //         height="500"
    //       />
    //     </a>
    //     <div
    //       className={"navbar-burger burger " + (isNavActive ? "is-active": "")}
    //       onClick={() => setNavActive(!isNavActive)}
    //       data-target="navbarExampleTransparentExample"
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </div>
    //   </div>

    //   <div
    //     id="navbarExampleTransparentExample"
    //     className={"navbar-menu " + (isNavActive ? "is-active": "")}
    //   >
    //     <div className="navbar-start">
    //       <a className="navbar-item" href="https://bulma.io/">
    //         Home
    //       </a>
    //       <a className="navbar-item" href="https://bulma.io/">
    //         Chat
    //       </a>
    //       <div className="navbar-item has-dropdown is-hoverable">
    //         <a className="navbar-link" href="blank">
    //           Profile
    //         </a>
    //         <div className="navbar-dropdown is-boxed">
    //           <a className="navbar-item" href="blank">
    //             Games
    //           </a>
    //           <a className="navbar-item" href="blank">
    //             Friends
    //           </a>
    //           {/* <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
    //           Layout
    //         </a>
    //         <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
    //           Form
    //         </a> */}
    //           {/* <hr className="navbar-divider"/>
    //         <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
    //           Elements
    //         </a>
    //         <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
    //           Components
    //         </a> */}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="navbar-end">
    //       <div className="navbar-item">
    //         <div className="field is-grouped">
    //           <p className="control">
    //             {/* <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
    //             <span className="icon">
    //               <i className="fab fa-twitter"></i>
    //             </span>
    //             <span>
    //               Tweet
    //             </span>
    //           </a> */}
    //           </p>
    //           <p className="control">
    //             <a
    //               className="button is-primary"
    //               href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
    //             >
    //               <span className="icon">
    //                 <i className="fas fa-download"></i>
    //               </span>
    //               <span>SignUp</span>
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
