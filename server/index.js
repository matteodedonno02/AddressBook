const express = require("express");
const fs = require("fs");
const cors = require("cors");
const db = require("./dbmanager.js");
require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());

app.get("/contacts", (request, response) => {
    response.send(db.getContacts());
})

app.post("/add", (request, response) => {
    db.addContact(request.body.name, request.body.surname, request.body.phoneNumber);
    response.send(db.getContacts());
});

app.post("/edit", (request, response) => {
    db.editContact(request.body.id, request.body.name, request.body.surname, request.body.phoneNumber);
    response.send(db.getContacts());
})

app.delete("/remove/:id", (request, response) => {
    db.removeContact(request.params.id);
    response.send(db.getContacts());
});

app.get("/search", (request, response) => {
    response.send(db.findContacts(request.query.searchField));
});

app.listen(process.env.PORT, () => {
    console.log("Server started!");
});