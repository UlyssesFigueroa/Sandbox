import React, {useState, useEffect} from "react";
import M from 'materialize-css';

const pStyle = {
    textAlign: "left",
    fontFamily: "Teko, sans-serrif",
    fontSize: "30px"
  };
  

const Parallax = () => {
    useEffect(()=>{
let elements = document.querySelectorAll(".parallax");
M.Parallax.init(elements);
    },[]);

    return (
        <div className="parallax-container">
            <div className="parallax">
               <img src="https://github.com/UlyssesFigueroa/Sandbox/blob/master/client/public/assets/images/blackgreyfootball.jpg?raw=true" alt="parallax_1"/> 
            </div>
            <div className="section white">
            <h4>
              <b>Welcome</b> to{" "}
              <span style={{ fontFamily: "monospace" }}>Footballadamus</span>
            </h4>
            <br/>
                <p style={pStyle}>
                Duke it out with 4 of your friends or foes, in this turned based,
              tactical, and unpredictable game experience!
                </p>
            </div>

            

            
        </div>
        
    );
};

export default Parallax;