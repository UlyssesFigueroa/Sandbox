import React, {useState, useEffect} from "react";
import M from 'materialize-css';

const welcomeStyle = {
    fontFamily: "Teko, sans-serrif",
    textAlign: "center",
    // fontSize: "40px"
  };
  

const pStyle = {
    textAlign: "center",
    fontFamily: "Teko, sans-serrif",
    fontSize: "30px"
  };


  

const Parallax = props => {
    useEffect(()=>{
let elements = document.querySelectorAll(".parallax");
M.Parallax.init(elements);
    },[]);

    return (
        <div className="parallax-container">
            <div className="parallax">
               <img src={props.url} alt="parallax_1"/> 
            </div>
            <div className="section white">
            <h1 style={welcomeStyle}>
              {props.title}
            </h1>
            
                <p style={pStyle}>
                {props.paragraph}
                </p>
            </div>

            

            
        </div>
        
    );
};

export default Parallax;