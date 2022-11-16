import mongoose from 'mongoose';

function getDateNow() {
    let date = new Date();
    return date.toLocaleString();
}

const Note = new mongoose.Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        date: {type: String, default: getDateNow()}
    }
);

export default mongoose.model('Note', Note);