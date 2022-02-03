import React, { useState } from "react";

function Add(props) {
  const [Note, setNote] = useState({
    Title: "",
    Text: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleClick() {
    props.funcAdd(Note);
    setNote({
      Title: "",
      Text: ""
    });

    event.preventDefault();
  }

  return (
    <div className="inputOuter">
      <form>
        <input
          placeholder="Title"
          name="Title"
          onChange={handleChange}
          value={Note.Title}
        />
        <textarea
          placeholder="Take a note..."
          rows="3"
          name="Text"
          onChange={handleChange}
          value={Note.Text}
        />
        <button className="Add" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
