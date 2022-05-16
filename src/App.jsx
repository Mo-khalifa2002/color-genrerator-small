import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js"; //the colors library

function App() {
  const [color, setColor] = useState(""); //for colors
  const [error, setError] = useState(false); //handle the errors
  const [list, setList] = useState([]); //containes the colors

  const handleSubmit = (e) => {
    e.preventDefault();

    //try and catch is to handle the errors
    //try => you will put the regular code
    //catch => when error happens, the hole app won't crash. only the specific piece of component
    try {
      //this code is from the Values.js library to genrate the main color and
      //the shade colors = 10 , and the tint colors = 10 "the value in .all()"
      let colors = new Values(color).all(0.5);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} index={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;

