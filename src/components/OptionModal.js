import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=> (
    <Modal 
    isOpen={!!props.selectedOption} //true boolean no undefined
    onRequestClose={props.handleClearSelectedOption} //on esc or clicking outise the modal
    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>} 
    <button onClick={props.handleClearSelectedOption}>Okay </button>
    </Modal> //&& op to check if props.selectedOption is true 

 ); 

 export default OptionModal;
