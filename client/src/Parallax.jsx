import React, {useState, useEffect} from "react";
import M from 'materialize-css';

const welcomeStyle = {
  fontFamily: 'Graduate',
    textAlign: "center",
  };
  

const pStyle = {
    textAlign: "center",
    fontFamily: 'Graduate',
    fontSize: "15px"
  };


  

const Parallax = props => {
    useEffect(()=>{
let elements = document.querySelectorAll(".parallax");
M.Parallax.init(elements);
    },[]);

    return (
        <div className="parallax-container is-fluid">
          <div className="row">

            <div className="parallax">
               <img src={props.url} alt="parallax_1"/> 
            </div>
            <div className="section white">
            <h3 style={welcomeStyle}>
              {props.title}
            </h3>
            
                <p style={pStyle}>
                {props.paragraph}
                </p>
            </div>
          </div>

            

            
        </div>
        
    );
};

export default Parallax;