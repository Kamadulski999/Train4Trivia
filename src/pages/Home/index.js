import React, {useState} from 'react';
import './home.css';
import Game from '../../components/Game'
import Modal from '../../components/Modal';



const Home = ({ gameOn, setGameOn, questions, setQuestions}) => {   
       return (
        <>
      
        <div className="container">  
        <div className="banner neonText">
            Trivia Trainer</div>         
            {/* display the landing page modal */}
        <div className="start-modal mt-2">
        {!gameOn && <Modal
        gameOn={gameOn}
        setGameOn={setGameOn}
        questions={questions}
        setQuestions={setQuestions}>
        </Modal>}
        </div>

        {/* display the game modal */}
        {gameOn && <Game
        gameOn={gameOn}
        setGameOn={setGameOn}
        questions={questions}
        setQuestions={setQuestions}>
        </Game>}          
        </div>
        


        
        </>
    )
}

export default Home;