import React, {useState} from 'react'
import './App.css';
import Home from "./pages/Home";



function App() {
  const [gameOn, setGameOn] = useState(false)

  return (
    <>
    <div className="App"> 
    <Home
    gameOn= {gameOn}
    setGameOn = {setGameOn}
    ></Home>
 </div>
 </>
  );
}

export default App;
