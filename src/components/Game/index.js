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
    // questStr is the question string that will be displayed and the answerArr contains a randomized array of answers
    // the state determining whihc question is displayed is controlled by the question counter. As the user clicks on an answer
    // the checkAnswer function will be called to determine if the answer is correct and it will also increment the counter

    var questStr = ""
    var answerArr = []
    if (questions) {
        // retrieve question at the index of questions[counter] and run it through unEscape 
        // function to get rid of escape charter formatting then set result to questStr variable
        questStr = unEscape(JSON.stringify(questions[counter].question));

        // API returns an object with a correct_answer key:value pair where the correct answer is a single value
        // and the incorrect_answers key:value pair has a value that is an array with multiple answer strings
        // add the correct and incorrect answers to the answerArr
        answerArr.push(...questions[counter].incorrect_answers)
        answerArr.push(questions[counter].correct_answer)
        console.log(answerArr)

        // Fisher-Yates Shuffle of answerArr to randomize
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
          
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }
        shuffle(answerArr);
        console.log(answerArr)
        
        }
        
    const checkAnswer = () => {
        setCounter(counter + 1);
        console.log(questions[counter]);
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
        <div className="question-container neonText">{questStr}</div>
        <div className='answer-container'>
            {answerArr.map((answer, index)=>{
                return (
                    <div className="answer-btn" key={index}><button type="button" onClick={checkAnswer} className="btn answer neonBtn">{answer}</button></div>  
                )
            })}           
        </div> 
    </div> 
    }
    <div className="quit-game">
            <button type="button" onClick={quitGame} className="btn neonBtn">Quit Game</button>
            </div>
    </>
)
}

export default Game;