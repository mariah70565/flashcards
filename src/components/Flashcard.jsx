import React, { useState } from "react";

const Flashcard = (props) => {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="Flashcard" onClick={flipCard}>
            {flipped ? (
                <div>
                    <h4>{props.answer}</h4>
                    {props.image && <img className="AnswerImages" src={props.image}/>}
                </div>
            ) : (
                <h4>{props.question}</h4>
            )}
        </div>
    )
}

export default Flashcard;