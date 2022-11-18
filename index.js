import express from 'express'
import mongoose from 'mongoose'
import router from './src/router/router.js'

const PORT = 5000;
const DB_URL = 'mongodb+srv://o-da-oxy:user@cluster0.ap1c95j.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(express.json());
app.use('/notes', router);

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
