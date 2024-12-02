const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send("<button>Hello World!</button>");
})

app.post('/conversations', (req, res) => {
    const message = req.body.message;
    console.log(message);
    res.send({
        output: "2 + 2 = 4"
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})