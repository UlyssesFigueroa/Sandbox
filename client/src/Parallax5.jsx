import React, {useState, useEffect} from "react";
import M from 'materialize-css';

const pStyle = {
    textAlign: "left",
    fontFamily: "Teko, sans-serrif",
    fontSize: "30px"
  };
  
  const hStyle = {
    fontFamily: "Teko, sans-serrif",
    textAlign: "center",
  };

const Parallax5 = () => {
    useEffect(()=>{
let elements = document.querySelectorAll(".parallax");
M.Parallax.init(elements);
    },[]);

    return (
        <div className="parallax-container">
            <div className="parallax">
               <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/04/786630-new-england-patriots-reuters.jpg"/> 
            </div>
            <div className="section white">
            <h2 style={hStyle}>Gain Braggin Rights</h2>
                <p style={pStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            

            
        </div>
        
    );
};

export default Parallax5;