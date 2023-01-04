import React, {useState} from 'react';
import './home.css';
import Game from '../../components/Game'
import Modal from '../../components/Modal';



const Home = ({gameOn, setGameOn}) => {
   
    return (
        <>
        <div className="container">
          <div className="banner neonText">
            Trivia Trainer</div>           
        </div>
        {/* display the landing page modal */}
        {!gameOn && <Modal
        gameOn={gameOn}
        setGameOn={setGameOn}>
        </Modal>}

        {/* display the game modal */}
        {gameOn && <Game
        gameOn={gameOn}
        setGameOn={setGameOn}>
        </Game>}


        
        </>
    )
}

export default Home;