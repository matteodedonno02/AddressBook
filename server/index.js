const express = require("express");
const fs = require("fs");
const cors = require("cors");
const db = require("./dbmanager.js");

const app = express();


app.use(cors());

app.get("/contacts", (request, response) => {
    response.send(db.getContacts());
})

app.post("/add", (request, response) => {
    db.addContact(request.query.name, request.query.surname, request.query.phoneNumber);
    response.send(db.getContacts());
});

app.delete("/remove/:id", (request, response) => {
    db.removeContact(request.params.id);
    response.send(db.getContacts());
});

app.listen(3030, () => {
    console.log("Server started!");
});