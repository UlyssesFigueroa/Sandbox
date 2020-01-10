import React, { useReducer } from "react";

const divStyle = {
  fontSize:'30px',
  textAlign:'center'
  
};


function PlayerQue() {
  return (
    <div className="jumbotron">
     
      <div class="buttons">
  <button class="button is-info is-small">{use}</button>
  <button class="button is-success is-small">Player-2</button>
  <button class="button is-warning is-small">Player-3</button>
  <button class="button is-danger is-small">Player-4</button>
</div>

<div class="buttons">
<button class="button is-primary is-outlined">READY?</button>
</div>

<div class="control">
  <textarea class="textarea" placeholder="Normal textarea"></textarea>
</div>
      
    </div>
  );
}

export default PlayerQue;
