import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import Add from "./addNote";

function App() {
  const [Arr, setArr] = useState([]);

  function addNote(note) {
    setArr((prev) => {
      return [...prev, note];
    });
  }

  function Delete(id) {
    setArr((prev) => {
      return prev.filter((Arr, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Add funcAdd={addNote} />
      {Arr.map((N, index) => {
        return (
          <Note
            title={N.Title}
            text={N.Text}
            Del={Delete}
            id={index}
            key={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
