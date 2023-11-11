const express = require(`express`);
const router = express.Router();
const fs = require('fs');

// Return all the db.json file
router.get(`/notes`, (req, res) => {
    const dataBase = JSON.parse(fs.readFileSync(`./db/db.json`));
    console.log(`${req.method} request to ${req.url}`);
    res.json(dataBase);
});

module.exports = router;