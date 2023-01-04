import React, {useState} from 'react';
import './game.css';

function Game({gameOn,setGameOn, questions, setQuestions}) {
    const quitGame = () => {
        setGameOn(false)
        console.log(questions)
    }
    
   
return (
   
    <>
    {!questions && <div className="loading neonText">Loading....</div>}
    <div className="quit-game">
            <button type="button" onClick={quitGame} className="btn btn-primary">Quit Game</button>
            </div>
    {questions && <div className="game-modal">question</div> }
    </>
)
}

export default Game;