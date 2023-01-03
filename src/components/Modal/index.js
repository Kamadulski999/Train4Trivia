import React from 'react';
import './modal.css'

function Modal() {
    return(
        <div className="game-start">
            <div className="select-label">
                Choose your Category
            </div>
            <div className="select-container">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Categories</option>
            <option value="">Random</option>
            <option value="9">General</option>
            <option value="25">Art & Literature</option>
            <option value="10">Language</option>
            <option value="17">Science and Nature</option>
            <option value="26">People and Places</option>
            <option value="23">History Holidays</option>
            <option value="14">Entertainment</option>
            <option value="16">Toys and Games</option>
            <option value="12">Music</option>
            <option value="20">Religion and Mythology</option>
            <option value="21">Sports and Liesure</option>            
            </select>             
            </div>
            <div className="select-label">
                Choose the Number of Questions
            </div>
            <div className="select-container">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Questions</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            </select> 
            </div>
            <div className="start-button">
            <button type="button" class="btn btn-primary">Start Training!</button>
            </div>
        </div>
    )
}

export default Modal;