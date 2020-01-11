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

const Parallax4 = () => {
    useEffect(()=>{
let elements = document.querySelectorAll(".parallax");
M.Parallax.init(elements);
    },[]);

    return (
        <div className="parallax-container">
            <div className="parallax">
               <img src="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/live.jpg?raw=true"/> 
            </div>
            <div className="section white">
            <h2 style={hStyle}>Live Action, Live Updates</h2>
                <p style={pStyle}>
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
            </div>

            

            {/* <div className="parallax">
               <img src="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/live.jpg?raw=true" alt="parallax_1" alt="parallax_1"/> 
            </div>
            <div className="section white">
         
            </div>

           {* <div className="parallax">
               <img src="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/blackgreyfootball.jpg?raw=true" alt="parallax_1"/> 
            </div>
            <div className="section white">
            <h2 style={hStyle}>Trash Talk</h2>
                <p style={pStyle}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="parallax">
               <img src="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/blackgreyfootball.jpg?raw=true" alt="parallax_1"/> 
            </div>
            <div className="section white">
            <h2 style={hStyle}>Gain Braggin Rights</h2>
                <p style={pStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
            </div> */}
        </div>
        
    );
};

export default Parallax4;