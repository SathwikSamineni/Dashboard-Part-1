import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApplyInstructions() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} tabIndex="-1">
                <Modal.Header closeButton style={{ backgroundColor: '#d9edf7' }}>
                    <Modal.Title style={{ color: 'black' }}>Apply Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: 'black' }}>If you add a link here, all links for locations on the table below will be globally replaced with this link..</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ApplyInstructions;
