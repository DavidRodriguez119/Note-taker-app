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

// Delete a specific note
router.delete(`/notes/:id`, (req, res) => {
    const dataBase = JSON.parse(fs.readFileSync(`./db/db.json`));
    const id = req.params.id
    console.log(`${req.method} request to ${req.url}`);
    for (let i = 0; i < dataBase.length; i++){
        if(dataBase[i].id == id){
            console.log(dataBase[i]);
            dataBase.splice(i, 1);
            fs.writeFileSync(`./db/db.json`, JSON.stringify(dataBase, null, 4));
            return res.json(dataBase);
        }
    }
    return res.status(404).send("sorry, no such note")
})

module.exports = router;