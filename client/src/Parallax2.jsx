import React, {useState, useEffect} from "react";
import M from 'materialize-css';

const pStyle = {
    textAlign: "left",
    fontFamily: "Teko, sans-serrif",
    fontSize: "30px"
  };
  
  const hStyle = {
    fontFamily: "Teko, sans-serrif"
  };

const Parallax2 = () => {
    useEffect(()=>{
let elements = document.querySelectorAll(".parallax");
M.Parallax.init(elements);
    },[]);

    return (
        <div className="parallax-container">
            <div className="parallax">
               <img src="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/standingfootball.jpg?raw=true"/> 
            </div>
            <div className="section white">
            <h2 style={hStyle}>Make the call!</h2>
                <p style={pStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
        
    );
};

export default Parallax2;