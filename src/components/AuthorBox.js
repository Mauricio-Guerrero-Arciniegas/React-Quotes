import React, { useState } from "react";
import author from "../quotes.json";

const colors = ["rgb(90, 10, 10)", "lightblue", "rgb(198, 198, 22)", "lightgreen", "lightcoral", "purple", "darkorange", "rgb(90, 68, 41)"] 

const AuthorBox = () => {

  const randomIndex = Math.floor(Math.random() * author.length)
  const [index, setIndex] = useState(randomIndex)

  const changeAuthor = () => {
    const randomIndex = Math.floor(Math.random() * author.length);
    setIndex(randomIndex);
  }

  const randomColor = Math.floor(Math.random() * colors.length) 
  document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="card" style={{color: colors[randomColor]}}>
      <h1 className="author">{author[index].author}</h1>
      <i alt="" className="fa-solid fa-forward fa-3x button" onClick={changeAuthor}></i>
    </div>
  );
};

export default AuthorBox;
