import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";


import BirthdaySnoopy from "../images/BirthdaySnoopy.png";
import CharlesSnoopy from "../images/CharlesSnoopy.jpg.webp";
import CharlieSnoopy from "../images/CharlieSnoopy.png";
import HouseSnoopy from "../images/HouseSnoopy.png";
// import LoveSnoopy from "../images/LoveSnoopy.png";
import JoeCoolSnoopy from "../images/JoeCoolSnoopy.webp";
import LilaSnoopy from "../images/LilaSnoopy.webp";
import PilotSnoopy from "../images/PilotSnoopy.png";
import RedBaron from "../images/RedBaron.png";
import Snoopy from "../images/Snoopy.png";
import WoodstockSnoopy from "../images/WoodstockSnoopy.png";

const Flashcards = ({cardIndex}) => {
    const flashcards = [
        // {question: "--+-- Before you begin taking this quiz --+-- Snoopy has a REALLY important question to ask! How much do you love him? You better be right! Click the card to reveal the correct answer.", answer: "SO MUCH!! ❤️ Isn't he just the BEST dog to exist? Click the card again to bring back the question. Click the '→' to randomly swap the next 10 cards.", image: LoveSnoopy},
        {question: "When is Snoopy's birthday?", answer: "August 10", image: BirthdaySnoopy},
        {question: "Who is Snoopy's current owner?", answer: "Charlie Brown", image: CharlieSnoopy},
        {question: "Who is Snoopy's best friend?", answer: "Woodstock", image: WoodstockSnoopy},
        {question: "What kind of pilot does Snoopy pretend to be?", answer: "A World War 1 flying ace", image: PilotSnoopy},
        {question: "Who is Snoopy's enemy in his pilot fantasies?", answer: "The Red Baron", image: RedBaron},
        {question: "Who is Joe Cool?", answer: "Snoopy", image: JoeCoolSnoopy},
        {question: "Who created Snoopy?", answer: "Charles M. Schultz", image: CharlesSnoopy},
        {question: "Before his current owner, who used to be the owner of Snoopy?", answer: "Lila", image: LilaSnoopy},
        {question: "What kind of dog is Snoopy?", answer: "Beagle", image: Snoopy},
        {question: "What color is Snoopy's house?", answer: "Red", image: HouseSnoopy}
    ]

    const [userAnswer, setUserAnswer] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [isFlipped, setFlipped] = useState(false);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [recordStreak, setRecordStreak] = useState(0);

    const flipCard = () => {
        setFlipped(!isFlipped);
    };

    const handleInputChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const resetInput = () => {
        setUserAnswer('');
        setIsAnswerCorrect(null);
    }

    const checkAnswer= () => {
        const currentFlashcard = flashcards[cardIndex];
        if (userAnswer.trim().toLowerCase() === currentFlashcard.answer.toLowerCase()) {
            setIsAnswerCorrect(true);
            setCurrentStreak(currentStreak + 1);
            if (currentStreak === recordStreak) {
                setRecordStreak(currentStreak + 1);
            }
        }
        else {
            setIsAnswerCorrect(false);
            setCurrentStreak(0);
        }
    };

    useEffect(() => {
        resetInput(); // Reset input field when cardIndex changes
        setFlipped(false);
    }, [cardIndex]);

    return (
        <div className="FlashcardsContainer">
            <h3>Number of cards: 10</h3>
            <div className="Streaks">
                <h4>Current Streak: {currentStreak}</h4>
                <h4>Record Streak: {recordStreak}</h4>
            </div>
            <div className='Flashcard'>
                <Flashcard {...flashcards[cardIndex]} isFlipped={isFlipped} flipCard={flipCard}/>
            </div>
            <div className="AnswerInput">
                <input className={`entry ${isAnswerCorrect === true ? 'correctAnswer' : isAnswerCorrect === false ? 'wrongAnswer' : ''}`} type="text" value={userAnswer} onChange={handleInputChange} placeholder="Type what you think the answer might be in here!"/>
                <button className="submitButton" onClick={checkAnswer} disabled={isFlipped}>Submit</button>
            </div>
        </div>
    )
}

export default Flashcards;