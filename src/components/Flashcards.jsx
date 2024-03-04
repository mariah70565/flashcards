import React from "react";
import Flashcard from "./Flashcard";

import BirthdaySnoopy from "../images/BirthdaySnoopy.png";
import CharlesSnoopy from "../images/CharlesSnoopy.jpg.webp";
import CharlieSnoopy from "../images/CharlieSnoopy.png";
import HouseSnoopy from "../images/HouseSnoopy.png";
import HugWoodstockSnoopy from "../images/HugWoodstockSnoopy.png";
import JoeCoolSnoopy from "../images/JoeCoolSnoopy.webp";
import LilaSnoopy from "../images/LilaSnoopy.webp";
import PilotSnoopy from "../images/PilotSnoopy.png";
import RedBaron from "../images/RedBaron.png";
import Snoopy from "../images/Snoopy.png";
import WoodstockSnoopy from "../images/WoodstockSnoopy.png";

const Flashcards = ({cardIndex}) => {
    const flashcards = [
        {question: "When is Snoopy's birthday?", answer: "August 10 🎂", image: BirthdaySnoopy},
        {question: "Who is Snoopy's current owner?", answer: "Charlie Brown!", image: CharlieSnoopy},
        {question: "Who is Snoopy's best friend?", answer: "Woodstock ❤️", image: WoodstockSnoopy},
        {question: "What kind of pilot does Snoopy pretend to be?", answer: "A World War 1 flying ace! 🫡", image: PilotSnoopy},
        {question: "Who is Snoopy's enemy in his pilot fantasies?", answer: "The Red Baron ✈", image: RedBaron},
        {question: "Who is Joe Cool?", answer: "Snoopy! As a cool and hip college student! 😎", image: JoeCoolSnoopy},
        {question: "Who created Snoopy?", answer: "Charles M. Schultz ✍️", image: CharlesSnoopy},
        {question: "Before his current owner, who used to be the owner of Snoopy?", answer: "Lila ☀️", image: LilaSnoopy},
        {question: "What kind of dog is Snoopy?", answer: "A beagle! The cutest of course! 🫶", image: Snoopy},
        {question: "What color is Snoopy's house?", answer: "Red! ♦️", image: HouseSnoopy}
    ]

    return (
        <div className='Flashcard'>
            <Flashcard {...flashcards[cardIndex]}/>
        </div>
    )
}

export default Flashcards;