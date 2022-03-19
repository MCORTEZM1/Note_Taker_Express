const fs = require('fs');
const path = require('path');

function createNewNote (body, notesArray) {
    const newNote = body; 
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes:notesArray }, null, 2)
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

// const readFile = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, "utf8", (err, data) => {
//             if(err){
//                 reject(err);
//                 return;
//             }
//             resolve(data);
//         })
//     });
// };  

function deleteNote(notesArray, id) {
    let deleteId = parseInt(id);
    notesArray.splice(deleteId, 1);

    for(let i = deleteId; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    };

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({
            notes:notesArray
        }, null, 2)
    )

};



module.exports = {createNewNote, validatePost, deleteNote}; 