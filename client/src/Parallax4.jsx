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

const Parallax4 = () => {
    useEffect(()=>{
let elements = document.querySelectorAll(".parallax");
M.Parallax.init(elements);
    },[]);

    return (
        <div className="parallax-container">
            <div className="parallax">
               <img src="https://i.ytimg.com/vi/MzIIh5UwR-U/maxresdefault.jpg"/> 
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

            

            
        </div>
        
    );
};

export default Parallax4;