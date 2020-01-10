import React, { Component } from "react";
// import Chatroom from "../Chat/Chat";
import SignIn from "../Join/Join"

 class Modal extends Component {
  render() {
    if(!this.props.show){
      return null;
  }
    return <div>
      <SignIn />
      </div>;
  }
}

export default Modal;