import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

// Derek note: remember that "props" can hold multiple items. What else do we want to pass in? Does it necessarily have to be used here, or could we pass it as a prop *again*?
function Question(props) {
  return (
  <div className="question"> 
  
    {props.name}    
    <Answer/>
  </div>
  );
}
// Derek note: Answer is supposed to take a prop "name", are you passing it in when you create an instance?
function Answer(props) {
return <p className="answer"> {props.name} </p>;
}

function NextQuestion() {
  return <button> button </button>;
}

function App() {
  let current_question = 0;
  // Derek note: Does it make sense to create two Question instances to represent the text and the corresponding choices?
  // The Question component should be able to handle everything
  return (
    <div className="app">
      Trivia!
      <Question name={data[current_question].question.text} />
    
      <NextQuestion/>
      
    </div>
  );
}

export default App;

