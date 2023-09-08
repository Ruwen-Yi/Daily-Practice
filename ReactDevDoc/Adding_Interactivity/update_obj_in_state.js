
// replace the obj in state instead of mutating it
const [position, setPosition] = useState({
    x: 0,
    y: 0
});
let onPointerMove = (e)=> {
    setPosition({       // 传入一个新对象，替代旧的state值
      x: e.clientX,
      y: e.clientY
    });
}


// copy a flat obj
const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
});

let onFirstNameChange = (e)=>{ 
    setPerson({
        ...person,  // 复制上一个 person 中的所有字段
        firstName: e.target.value   // 但是覆盖 firstName 字段 
    });
}
// or:
function handleChange(e) {
    setPerson({
      ...person,    // 复制上一个 person 中的所有字段
      [e.target.name]: e.target.value   // 但是覆盖 目标 字段 
    });
}


// copy a nested obj
const [user, setUser] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
});
function handleNameChange(e) {
    setUser({
      ...user,
      name: e.target.value
    });
}
function handleArtworkChange(e) {
    setUser({
        ...user,
        artwork: {
          ...user.artwork,
          [e.target.name]: e.target.value
        }
    });
}



// challenge 1
import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}

