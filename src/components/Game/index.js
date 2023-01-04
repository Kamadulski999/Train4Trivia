import React, {useState} from 'react';
import './game.css';

function Game({gameOn,setGameOn, questions, setQuestions}) {
    const quitGame = () => {
        setGameOn(false)        
    }
    
    // replace unicode characters
    function unEscape(htmlStr) {
        htmlStr = htmlStr.replace(/&lt;/g , "<");	 
        htmlStr = htmlStr.replace(/&gt;/g , ">");     
        htmlStr = htmlStr.replace(/&quot;/g , "\"");  
        htmlStr = htmlStr.replace(/&#039;/g , "\'");   
        htmlStr = htmlStr.replace(/&amp;/g , "&");
        return htmlStr;
    }  
    
    var questStr = ""
    if (questions) {
        questStr = unEscape(JSON.stringify(questions[0].question))             
        }
        
    const checkAnswer = () => {
        console.log("checking answer")
    }
        
   
        
    

    
  
    return (
   
    <>
    {!questions && <div className="loading neonText">Loading....</div>}
    <div className="quit-game">
            <button type="button" onClick={quitGame} className="btn btn-primary">Quit Game</button>
            </div>
    {questions && <div className="game-modal">
        <div className="question-container">{questStr}</div>
        <div className='answer-container'>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 1</button></div>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 2</button></div>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 3</button></div>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 4</button></div>
        </div> 
    </div> }
    </>
)
}

export default Game;