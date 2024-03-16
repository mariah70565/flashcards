import React, { useState } from "react";

const Flashcard = (props) => {

    return (
        <div className="Flashcard" onClick={props.flipCard}>
            {props.isFlipped ? (
                <div>
                    <h4>{props.answer}</h4>
                    <img className="AnswerImages" src={props.image}/>
                </div>
            ) : (
                <h4>{props.question}</h4>
            )}
        </div>
    )
}

export default Flashcard;