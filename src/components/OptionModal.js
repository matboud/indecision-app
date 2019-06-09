import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        
    <Modal
        isOpen={!!props.open}
        contentLabel='selected option'
        onRequestClose={props.handleCloseModal}
    >
        <h3>Selected Option</h3>
        {props.open && <p>{props.open}</p>}
        <button onClick={props.handleCloseModal}>Okay!</button>
    </Modal>
);

export default OptionModal;
