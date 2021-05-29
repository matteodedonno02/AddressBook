import React, { useEffect, useState } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomTable from "./components/CustomTable";

export default function App(){
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/contacts").then(data => data.json()).then(data => setContacts(data));
    }, [])

    const searchContactsResult = (data) => {
        setContacts(data);
    }

    return (
        <div>
            <CustomNavbar searchContactsResult={searchContactsResult} setContacts={setContacts}/> 
            <CustomTable contacts={contacts}/>
        </div>
    );
}