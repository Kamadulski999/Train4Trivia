import React, {useEffect, useState} from 'react';
import './game.css';

var correct = 0

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
        htmlStr = htmlStr.replace(/&prime;/g , "\'");
        htmlStr = htmlStr.replace(/&Prime;/g , "\"");
        htmlStr = htmlStr.replace(/&ldquo;/g , "\"");
        htmlStr = htmlStr.replace(/&rdquo;/g , "\"");
        htmlStr = htmlStr.replace(/&lsquo;/g , "\"");
        htmlStr = htmlStr.replace(/&rsquo;/g , "\"");
        htmlStr = htmlStr.replace(/&Eacute;/g , "E");
        htmlStr = htmlStr.replace(/&eacute;/g , "e");

        return htmlStr;
    }  
    // questStr is the question string that will be displayed and the answerArr contains a randomized array of answers
    // the state determining which question is displayed is controlled by the question counter. As the user clicks on an answer
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
        
        }
        
    const checkAnswer = (e) => {      
    // check answer against questions.correct_answer. If button is correct display "CORRECT !", if wrong display correct answer
        if(e.target.innerText == questions[counter].correct_answer) {
           correct = correct + 1
           e.target.innerText = "Correct ! "
           console.log(correct)
           } else {
            e.target.innerText = "The Answer is " + unEscape(questions[counter].correct_answer)
        };

        setTimeout(function() {
            if(counter < questions.length-1){
        setCounter(counter + 1);
        } else {
            quitGame()
        }
    }, 2000);
    }

    const quitGame = () => {
        setGameOn(false)
        correct = 0        
    }                  
  
    return (   
    <>
    {/* show loading screen until fetch is complete */}
    {!questions && <div className="loading neonText">Loading....</div>}
    
    {/* after fetch show questions */}
    {questions && <div className="game-modal">
        <div className="question-container neonText">{questStr.slice(1, -1)}</div>
        <div className='answer-container'>
            {answerArr.map((answer, index)=>{
                return (
                    <div className="answer-btn" key={index}><button type="button" onClick={checkAnswer} className="btn answer neonBtn">{unEscape(answer)}</button></div>  
                )
            })}           
        </div>
        <div className="question-counter neonText"> Question: {counter + 1} / {questions.length} &nbsp; &nbsp; Correct: {correct}</div> 
    </div> 
    }
  
    <div className="quit-game">
        <button type="button" onClick={quitGame} className="btn neonBtn">Quit Game</button>
    </div>
    </>
)
}

export default Game;