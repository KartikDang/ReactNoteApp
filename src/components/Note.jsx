import React from "react";

function Note(props) {
  function handleClick() {
    props.Del(props.id);
  }

  return (
    <div className="note">
      <h1> {props.title} </h1>
      <p> {props.text}</p>
      <button className="Del" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Note;
