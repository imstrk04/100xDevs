const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

function calculateSum(n) {
    let ans = 0;

    for (let i = 0; i <= n; i++) {
        ans = ans + i;
    }

    return ans;
}

app.use(bodyParser.json());

app.get('/', function(req, res) {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
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