import './App.css';
import Flashcards from './components/Flashcards';
import React, { useState } from "react";

import JoeCool from "./images/JoeCool.png"

const App = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const getRandomCard = () => {
    let index = cardIndex;
    while (index === cardIndex) {
      index = Math.floor(Math.random() * 10)
    }
    setCardIndex(index);
  };

  const getNextCard = () => {
    let index = (cardIndex + 1) % 10;
    setCardIndex(index);
  };

  const getPrevCard = () => {
    let index = (cardIndex - 1) % 10;
    if (index < 0) {
      index = 9;
    }
    setCardIndex(index);
  };

  return (
    <div className="App">
      <div className='Header'>
        <h1>Learn All About <span style={{color: 'red'}}>Snoopy</span>!</h1>
        <h2>Think you love Snoopy? Take this quiz to test your knowledge on everything Snoopy!</h2>
      </div>

      <div className='Flashcard'>
        <Flashcards cardIndex={cardIndex}/>
      </div>

      <div className='buttons'>
        <button className="arrowButton" onClick={getPrevCard}>←</button>
        <button className='shuffleButton' onClick={getRandomCard}>Shuffle Cards</button>
        <button className="arrowButton" onClick={getNextCard}>→</button>
      </div>

      <img className='JoeCool' src={JoeCool}></img>
    </div>
  )
}

export default App