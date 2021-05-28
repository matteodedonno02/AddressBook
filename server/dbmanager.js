const fs = require("fs");

const saveDatabase = (db) => {
    fs.writeFileSync("./db.json", JSON.stringify(db));
}

module.exports = {
    getContacts: () => {
        return JSON.parse(fs.readFileSync("./db.json").toString());
    },
    addContact: (name, surname, phoneNumber) => {
        const db = module.exports.getContacts();
        const temp = {id: db[db.length - 1].id + 1, name: name, surname: surname, phoneNumber: phoneNumber};
        if(db.filter(t => t.phoneNumber == temp.phoneNumber || (t.name == temp.name && t.surname) == temp.surname).length == 0){
            db.push(temp);
            saveDatabase(db);
        }
    },
    removeContact: (id) => {
        const db = module.exports.getContacts();
        db.splice(id, 1);
        db.forEach((contact) => {
            if(contact.id > id)
                contact.id --;
        });
        saveDatabase(db);
    },
    editContact: (id, name, surname, phoneNumber) => {
        var db = module.exports.getContacts();
        db[id].name = name;
        db[id].surname = surname;
        db[id].phoneNumber = phoneNumber;
        saveDatabase(db);
    },

    findContacts: (searchField) => {
        var db = module.exports.getContacts();
        db = db.filter(contact => contact.name.toLowerCase().includes(searchField.toLowerCase()) 
            || contact.surname.toLowerCase().includes(searchField.toLowerCase()) 
            || contact.phoneNumber.toLowerCase().includes(searchField.toLowerCase()));
        return db;
    } 
};