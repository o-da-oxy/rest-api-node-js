import mongoose from 'mongoose';

const Note = new mongoose.Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        date: {type: String, default: new Date().toTimeString()} //не меняется при последующих create
    }
);

export default mongoose.model('Note', Note);