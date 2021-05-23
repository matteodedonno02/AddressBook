import React from "react";
import { Table } from "react-bootstrap";
import customIcon from "../img/trash.png";
import editIcon from "../img/edit.png";

export default function CustomTable(props) {
    return (
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
                {props.contacts.map((contact, key) => {
                    return (
                        <tr key={key}>
                            <td>{contact.name}</td>
                            <td>{contact.surname}</td>
                            <td>{contact.phoneNumber}</td>
                            <td className="td-icon"><img src={editIcon} alt="Edit icon" className="edit-icon"/></td>
                            <td className="td-icon"><img src={customIcon} alt="Delete icon" className="trash-icon"/></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}