import React, {useState} from 'react';
import './game.css';

function Game({gameOn,setGameOn, questions, setQuestions}) {
    
    // counter determines the question that is displayed
    const [counter, setCounter] = useState(0)
   
    // reformat unicode escape characters from API
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
        questStr = unEscape(JSON.stringify(questions[counter].question))             
        }
        
    const checkAnswer = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    const quitGame = () => {
        setGameOn(false)        
    }                  
  
    return (   
    <>
    {/* show loading screen until fetch is complete */}
    {!questions && <div className="loading neonText">Loading....</div>}
    
    {/* after fetch show questions */}
    {questions && <div className="game-modal">
        <div className="question-container">{questStr}</div>
        <div className='answer-container'>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 1</button></div>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 2</button></div>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 3</button></div>
            <div className="answer-btn"><button type="button" onClick={checkAnswer} className="btn btn-primary">Answer 4</button></div>
        </div> 
    </div> 
    }
    <div className="quit-game">
            <button type="button" onClick={quitGame} className="btn btn-primary">Quit Game</button>
            </div>
    </>
)
}

export default Game;