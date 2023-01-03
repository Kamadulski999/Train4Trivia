import React from 'react';
import './modal.css'

function Modal() {
    return(
        <div className="game-start">
            <div className="select-container">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Choose a Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>             
            </div>
            <div className="select-container">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Choose the number of Questions</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select> 
            </div>
        </div>
    )
}

export default Modal;