import React, { useState } from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";


export default function CustomNavbar(props) {
    const [searchField, setSearchField] = useState("");

    const searchFieldChange = (e) => {
        setSearchField(e.target.value);
    }


    const search = (e) => {
        e.preventDefault();
        fetch("http://localhost:3030/search?searchField=" + searchField, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json()).then(data => props.searchContactsResult(data));
    }


    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Address Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Add</Nav.Link>
                </Nav>
                <Form inline onSubmit={search}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchField} onChange={searchFieldChange}/>
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}