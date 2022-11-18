import Note from "../models/Note.js";

class NoteController {
    async createNote (req, res) {
        try {
            const {title, content} = req.body;
            const note = await Note.create({title, content});
            note.date = new Date().toLocaleString();
            return res.json(note);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllNotes(req, res) {
        try {
            const notes = await Note.find();
            return res.json(notes);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async getNoteById(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).send('ID is not found!');
            }
            const note = await Note.findById(id);
            return res.json(note);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async updateNote(req, res) {
        try {
            const note = req.body;
            if (!note._id) {
                res.status(400).send('ID is not found!');
            }
            let updatedNote = await Note.findByIdAndUpdate(note._id, note, {new: true});
            updatedNote.date = new Date().toLocaleString();
            return res.json(updatedNote);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteNote(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).send('ID is not found!');
            }
            const note = await Note.findByIdAndDelete(id);
            return res.json(note);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new NoteController();