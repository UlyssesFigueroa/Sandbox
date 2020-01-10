import React from "react";

const divStyle = {
    fontSize: '30px',
    textAlign: 'center'

};


function PlayerChoices(props) {
    const listItems = gameChoices.map((item) =>
      <li key={item.id}>
         {item.value}
       </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

const gameChoices = [
    {id: 1, value: "Rushing TD"}, 
    {id: 2, value: "Passing TD"},
    {id: 3, value: "Field Goal < 33yd"}, 
    {id: 4, value: "Field Goal > 33yd"}
];




// function Selection() {
//     return (
//         <div className="container">

//             <h1 style={divStyle}>Room 1</h1>
//             <h2 style={divStyle}>WAS vs PHI</h2>

//             <article class="message">
//                 <div class="message-header">
//                     <p>Live Updates</p>
//                     <button class="delete" aria-label="delete"></button>
//                 </div>
//                 <div class="message-body">
//                     "Case Keenum passed to Vernon Davis to the right for 48 yard touchdown"
//   </div>
//             </article>



//             <div id="listitem"></div>

//         </div>

//     )
// }

export default Selection;