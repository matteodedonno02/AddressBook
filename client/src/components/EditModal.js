import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function EditModal(props) {
    const [visible, setVisible] = useState(true);

    const {id} = props.contact;
    const [name, setName] = useState(props.contact.name);
    const [surname, setSurname] = useState(props.contact.surname);
    const [phoneNumber, setPhoneNumber] = useState(props.contact.phoneNumber);

    const closeModal = () => {
        setVisible(false);
        setTimeout(() => {
            props.destroyModal();
        }, 300)
    }

    const saveChanges = () => {
        fetch("http://localhost:3030/edit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                name,
                surname,
                phoneNumber
            })
        }).then(data => data.json()).then(data => props.setContacts(data));
        closeModal();
    }

    return (
        <Modal centered autoFocus={true} show={visible}>
            <Modal.Header closeButton>
                <Modal.Title>Edit {props.contact.name} {props.contact.surname}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" value={surname} onChange={(e) => {
                        setSurname(e.target.value);
                    }}/>
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" value={phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value);
                    }}/>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="primary" onClick={saveChanges}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}