import React, { useState } from "react";
import quotes from "../quotes.json";

const colors = ["rgb(90, 10, 10)", "lightblue", "rgb(198, 198, 22)", "lightgreen", "lightcoral", "purple", "darkorange", "rgb(90, 68, 41)"] 

const QuoteBox = () => {

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(randomIndex)

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  }

  const randomColor = Math.floor(Math.random() * colors.length) 
  document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="card" style={{color: colors[randomColor]}}>
      <h1  className="quote"> <i className="fa-solid fa-quote-left fa-3x"></i> {quotes[index].quote} </h1>
      <h1 className="author">{quotes[index].author}</h1>
      <i alt="" className="fa-solid fa-forward fa-3x button" onClick={changeQuote}></i>
    </div>
  );
};

export default QuoteBox;
