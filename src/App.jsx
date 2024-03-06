import './App.css';
import Flashcards from './components/Flashcards';
import React, { useState } from "react";

import JoeCool from "./images/JoeCool.png"

const App = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const getRandomCard = () => {
    let index = cardIndex;
    while (index === cardIndex || index === 0) {
      index = Math.floor(Math.random() * 11)
    }
    setCardIndex(index);
  };

  const getPrevCard = () => {
    if (cardIndex === 0) {
      return;
    }
    const index = cardIndex - 1;
    setCardIndex(index);
  };

  return (
    <div className="App">
      <div className='Header'>
        <h1>Learn All About <span style={{color: 'red'}}>Snoopy</span>!</h1>
        <h2>Think you love Snoopy? Take this quiz to test your knowledge on everything Snoopy!</h2>
      </div>

      <h3>Number of cards: 10 + Intro</h3>
      <div className='Flashcard'>
        <Flashcards cardIndex={cardIndex}/>
      </div>

      <div className='Arrows'>
        <button onClick={getPrevCard}>←</button>
        <button onClick={getRandomCard}>→</button>
      </div>

      <img className='JoeCool' src={JoeCool}></img>
    </div>
  )
}

export default App