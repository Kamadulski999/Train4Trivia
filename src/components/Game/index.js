import React, {useState} from 'react';
import './game.css';

function Game({gameOn,setGameOn}) {
    const quitGame = () => {
        setGameOn(false)
    }
return (
    <>
    <div className="loading">Loading....</div>
    <div className="quit-game">
            <button type="button" onClick={quitGame} className="btn btn-primary">Quit Game</button>
            </div>
    </>
)
}

export default Game;