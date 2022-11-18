import Router from 'express';
import NoteController from "../controllers/NoteController.js";

const router = new Router();

router.get('/', NoteController.getAllNotes);
router.get('/:id', NoteController.getNoteById);
router.post('/', NoteController.createNote);
router.put('/', NoteController.updateNote);
router.delete('/:id', NoteController.deleteNote);

export default router;