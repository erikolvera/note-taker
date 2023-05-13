const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');

router.get('/notes', (req, res) => {
    const notes =  JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;

