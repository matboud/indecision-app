import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        
    <Modal
        isOpen={!!props.open}
        contentLabel='selected option'
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.open && <p className='modal__body'>{props.open}</p>}
        <button className='button' onClick={props.handleCloseModal}>Okay!</button>
    </Modal>
);

export default OptionModal;
