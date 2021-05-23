const express = require("express");
const fs = require("fs");
const db = require("./dbmanager.js");

const app = express();

app.get("/contacts", (request, response) => {
    response.send(db.getContacts());
})

app.post("/add", (request, response) => {
    db.addContact(request.query.name, request.query.surname, request.query.phoneNumber);
    response.send(db.getContacts());
});

app.delete("/remove", (request, response) => {
    db.removeContact(request.query.id);
    response.send(db.getContacts());
});

app.listen(3000, () => {
    console.log("Server started!");
});