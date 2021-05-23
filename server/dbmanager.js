const fs = require("fs");

module.exports = {
    getContacts: () => {
        return JSON.parse(fs.readFileSync("./db.json").toString());
    },
    addContact: (name, surname, phoneNumber) => {
        const db = module.exports.getContacts();
        const temp = {id: db[db.length - 1].id + 1, name: name, surname: surname, phoneNumber: phoneNumber};
        if(db.filter(t => t.phoneNumber == temp.phoneNumber || (t.name == temp.name && t.surname) == temp.surname).length == 0)
        {
            db.push(temp);
            module.exports.saveDatabase(db);
        }
    },
    saveDatabase: (db) => {
        fs.writeFileSync("./db.json", JSON.stringify(db));
    }
};