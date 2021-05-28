import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import customIcon from "../img/trash.png";
import editIcon from "../img/edit.png";
import CustomModal from "./CustomModal";

export default function CustomTable(props) {
    const [contacts, setContacts] = useState([]);
    const [editModal, setEditModal] = useState(null);

    useEffect(() => {
        setContacts(props.contacts);
    }, [props.contacts]);

    const removeContact = (id) => {
        fetch("http://localhost:3030/remove/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json()).then(data => setContacts(data));
    }

    const destroyModal = () => {
        setEditModal(null);
    }

    const editContact = (contact) => {
        setEditModal(<CustomModal contact={contact} destroyModal={destroyModal} setContacts={setContacts}/>);
    }

    

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, key) => {
                        return (
                            <tr key={key}>
                                <td>{contact.name}</td>
                                <td>{contact.surname}</td>
                                <td>{contact.phoneNumber}</td>
                                <td className="td-icon"><img src={editIcon} alt="Edit icon" className="edit-icon" onClick={() => {
                                    editContact(contact);
                                }} /></td>
                                <td className="td-icon"><img src={customIcon} alt="Delete icon" className="trash-icon" onClick={() => {
                                    removeContact(key);
                                }} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {editModal}
        </div>
    );
}