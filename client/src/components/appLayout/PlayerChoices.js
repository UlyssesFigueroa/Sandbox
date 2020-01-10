import React from "react";

function PlayerChoices() {
  const gameChoices = [
    { id: 1, value: "Rushing TD" },
    { id: 2, value: "Passing TD" },
    { id: 3, value: "Field Goal < 33yd" },
    { id: 4, value: "Field Goal > 33yd" }
  ];

  function updateValue(item) {
    if (item.id === 1) {
      console.log(item.value);
    }
    if (item.id === 2) {
      console.log('2');
    }
    if (item.id === 3) {
      console.log('3');
    }
    if (item.id === 4) {
      console.log('4');
      // setState({isNavActive: true})
    }
  }
  return (
    <ul>{gameChoices.map(item => (
      <li key={item.id}>
        <button onClick={() => updateValue(item)}>
          {item.value}
        </button>
      </li>
    ))}
    </ul>
  );
}



export default PlayerChoices;