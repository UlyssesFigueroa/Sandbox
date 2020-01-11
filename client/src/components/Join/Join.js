import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './Join.css';

function SignIn(props) {
  const history = useHistory();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleClick = e => {
    e.preventDefault();
    history.push(`/chat?name=${name}&room=${room}`);
    if(!name || !room){
      return;
    }
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
          <button onClick={handleClick} className={'button mt-20'}>Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
