import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function AddModal(props) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const closeModal = () => {
        props.setAddModalVisible(false);
    }

    const addContact = () => {
        fetch("http://localhost:3030/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, surname, phoneNumber})
        }).then(data => data.json()).then(data => props.setContacts(data));
        closeModal();
    }

    return (
        <Modal centered autoFocus={true} show={props.visible}>
            <Modal.Header closeButton>
                <Modal.Title>Add Contact</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" onChange={(e) => {
                        setSurname(e.target.value);
                    }}/>
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" onChange={(e) => {
                        setPhoneNumber(e.target.value);
                    }}/>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="primary" onClick={addContact}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}