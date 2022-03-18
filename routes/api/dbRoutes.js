const router = require('express').Router(); 
const fs = require('fs');
const notes = require('../../data/notes'); 
const { v4: uuid4 } = require('uuid');
const { createNewNote, validatePost, reloadNotes } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes; 
    req.body.id = notes.length.toString();

    res.json(results);
});

router.post('/notes', (req, res) => {
    // new note, new ID
    req.body.id = uuid4();

    if(!validatePost(req.body)) {
        res.status(404).send('Your note is improperly formatted!')
    }
    else {
        const note = createNewNote(req.body, notes);
        res.json(note)
    }
});

router.delete('/notes/:id', (req, res) => {
    const notesId = req.params.id; 
    const note = req.body; 

    const reproducedArray =  notes.filter((item) => item.id !== notesId);

    // console.log(reproducedArray);

    fs.writeFileSync('data/notes.json', JSON.stringify(reproducedArray, null, 2))

});


module.exports = router; 