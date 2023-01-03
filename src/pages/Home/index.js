import './home.css';
import Modal from '../../components/Modal';



const Home = () => {

    // gameOn is a placeholder for a state function to be added later. 
    // gameOn false will render the homepage modal. gameOn true will render the game modal.
    const gameOn = true;
    return (
        <>
        <div className="container">
          <div className="banner neonText">
            Trivia Trainer</div>           
        </div>
        {gameOn && <Modal/>}
        </>
    )
}

export default Home;