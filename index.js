import express from 'express'
import mongoose from 'mongoose'
import Note from './src/models/Note.js'

//load modules and create app
const app = express();
//use json for request.body
app.use(express.json());

const PORT = 5000;
//input your MongoDB URL
const DB_URL = 'mongodb+srv://o-da-oxy:user@cluster0.ap1c95j.mongodb.net/?retryWrites=true&w=majority'

app.get('/', function (request, response) {
    response.status(200).send('Express GET');
    //query url: http://localhost:5000/?test=123&name=get
    console.log(`Get query: ${request.query.test}, ${request.query.name}`);
});

app.post('/', async function (request, response) {
    try {
        const {title, content} = request.body;
        const post = await Note.create({title, content});
        response.json(post);
    }
    catch (e) {
        console.log(e);
    }
});

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('MongoDB is connected!'));
    }
    catch (e) {
        console.log(e);
    }
}

startApp();
