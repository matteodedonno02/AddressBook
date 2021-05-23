const fs = require("fs");
module.exports = {
    getContacts: () => {
        return JSON.parse(fs.readFileSync("./db.json").toString());
    }
};