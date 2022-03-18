const fs = require('fs');
const path = require('path');

function createNewNote (body, notesArray) {
    const newNote = body; 
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify(notesArray, null, 2)
    );
    
    return newNote;
};

// validate POST request data input to prevent err 
function validatePost(note){
    if (!note.title) {
        return false;
    }
    if (!note.text) {
        return false;
    }
    return true; 
}

module.exports = {createNewNote, validatePost}; 