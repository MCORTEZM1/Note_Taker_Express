const router = require('express').Router(); 
const notes = require('../../data/notes'); 
const { createNewNote, validatePost } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes; 
    res.json(results);
});

router.post('/notes', (req, res) => {
    if(!validatePost(req.body)) {
        res.status(404).send('Your note is improperly formatted!')
    }
    else {
        const note = createNewNote(req.body, notes);
        res.json(note)
    }
});

module.exports = router; 