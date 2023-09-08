import { useState } from 'react';

// challenge 1
export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}

// challenge 2
import {useState} from 'react';
export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [fstName, setFstName] = useState('Jane');
  const [lstName, setLstName] = useState('Jacobs');


  function onFstNameChange(e){
    setFstName(e.target.value);
  }
  function onLstNameChange(e){
    setLstName(e.target.value);
  }

  return (
    <form>
      <label>
        First name:{' '}
        {isEditing ? (<input value={fstName} onChange={onFstNameChange}/>) : (<b>{fstName}</b>)}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (<input value={lstName} onChange={onLstNameChange}/>) : (<b>{lstName}</b>)}
        
      </label>
      <button type="submit" onClick={(e)=>{
      e.preventDefault();
      setIsEditing(!isEditing)}}>
        {isEditing ? 'Save':'Edit'} Profile
      </button>
      <p><i>Hello, {fstName} {lstName}!</i></p>
    </form>
  );
}
