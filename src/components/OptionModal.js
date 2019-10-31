import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=> (
    <Modal 
    isOpen={!!props.selectedOption} //true boolean no undefined
    onRequestClose={props.handleClearSelectedOption} //on esc or clicking outise the modal
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className='modal__title'>Selected Option</h3>
    {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>} 
    <button className='button' onClick={props.handleClearSelectedOption}>Okay </button>
    </Modal> //&& op to check if props.selectedOption is true 

 ); 

 export default OptionModal;
