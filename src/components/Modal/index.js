import { number } from 'prop-types';
import React, {useState} from 'react';
import './modal.css'

function Modal({  gameOn, setGameOn, questions, setQuestions}) { 
        
      const fetchQuestions = (questions) => {             
               var openTDBRequest = fetch("https://opentdb.com/api.php?amount="+questionNumber.value+"&category="+category.value).then(function(openTDBRequest){
            openTDBRequest.json().then(function(data){                          
                setQuestions(data.results)              
            })
            .catch(function(error) {
                console.log("Houston we have a problem")            
            })    
    })
}
      
            
        
         
        const startGame = () => {
        if(category.value && questionNumber.value) {            
        fetchQuestions(questions);                             
        setGameOn(true);
        }
    }
    return(
        <div className="game-start">
            <div className="select-label neonText">
                Choose your Category
            </div>
            <div className="select-container">
            <select className="form-select form-select-lg mb-3" id="category">
            <option value="">Categories</option>            
            <option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="13">Musical Theater</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="16">Board Games</option>            
            <option value="17">Science and Nature</option>
            <option value="18">Computers</option>
            <option value="19">Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>            
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Comics</option>
            <option value="30">Gadgets</option>
            <option value="31">Anime and Manga</option>
            <option value="32">Animation</option>         
            </select>             
            </div>
            <div className="select-label neonText">
                Choose the Number of Questions
            </div>
            <div className="select-container">
            <select className="form-select form-select-lg mb-3" id="questionNumber">
            <option value="">Questions</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>       
            <option value="50">50</option>
            </select> 
            </div>
            <div className="start-button">
            <button type="button" onClick={startGame} className="btn btn-primary">Start Training!</button>
            </div>
        </div>
    )
}

export default Modal;