const express = require(`express`);
const router = express.Router();
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

// Return all the db.json file
router.get(`/notes`, (req, res) => {
    const dataBase = JSON.parse(fs.readFileSync(`./db/db.json`));
    console.log(`${req.method} request to ${req.url}`);
    res.json(dataBase);
});

// Return all the db.json file
router.post(`/notes`, (req, res) => {
    const newData = {
        id: generateUniqueId(),
        title: req.body.title,
        text: req.body.text
    };
    const storedDataBase = JSON.parse(fs.readFileSync(`./db/db.json`))
    storedDataBase.push(newData);
    fs.writeFileSync(`./db/db.json`, JSON.stringify(storedDataBase, null, 4));
    console.log(`${req.method} request to ${req.url}`);
    res.json(newData);
});

module.exports = router;