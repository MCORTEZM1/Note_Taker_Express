const fs = require('fs');
const { createNewNote, validatePost } = require('../lib/notes')
const notes = require('../data/notes');
jest.mock('fs');

test('creates new note object', () => {
    const note = createNewNote(
        { title: 'Noted', text: 'dualy noted'},
        notes
    );

    expect(note.title).toBe('Noted')
    expect(note.text).toBe('dualy noted')
});

test('validates note input', () => {
    const validNote = {
        title: 'Note',
        text: 'text example'
    };
    const invalidNote = {
        title: 'Nope'
    };

    const validResult = validatePost(validNote);
    const invalidResult = validatePost(invalidNote);

    expect(validResult).toBe(true);
    expect(invalidResult).toBe(false);
});