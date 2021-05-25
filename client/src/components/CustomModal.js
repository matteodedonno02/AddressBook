import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function CustomModal(props) {
    const [visible, setVisible] = useState(true);
    return (
        <Modal centered autoFocus={true} show={visible}>
            <Modal.Header closeButton>
                <Modal.Title>Edit {props.contact.name} {props.contact.surname}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                        props.destroyModal();
                    }, 300)
                }}>Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}