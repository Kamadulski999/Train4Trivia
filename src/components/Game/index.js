import React, {useState} from 'react';
import './game.css';

function Game({gameOn,setGameOn, questions, setQuestions}) {
    const quitGame = () => {
        setGameOn(false)
    }
   
return (
   
    <>
    {!questions && <div className="loading neonText">Loading....</div>}
    <div className="quit-game">
            <button type="button" onClick={quitGame} className="btn btn-primary">Quit Game</button>
            </div>
    </>
)
}

export default Game;