//load module 'express' and create app
const express = require("express");
const app = express();
//use json for request.body
app.use(express.json())

const PORT = 3000;
const HOST = '127.0.0.1'

app.get('/', function (request, response) {
    response.status(200).send('Express GET');
    //query url: http://localhost:3000/?test=123&name=get
    console.log(`Get query: ${request.query.test}, ${request.query.name}`);
});

app.post('/', function (request, response) {
    response.status(200).send('Express POST');
    //body json: { "test" : "100", "name" : "post" }
    console.log(`Post query: ${request.body.test}, ${request.body.name}`);
});

app.listen(PORT, HOST, () => console.log("Express server is working!"));
