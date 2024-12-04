// No middleware 

// const express = require("express");

// const app = express();

// const port = 3000;

// app.get('/health-checkup', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;


//     if (!(username === 'sada' && password === 'pass')) {
//         res.status(400).json({"msg": "Something up with ur inputs"});
//         return;
//     }
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({"msg": "Something up with ur inputs"})
//         return;
//     }

//     res.json({
//         msg: "Your kidney is fine!"
//     })

// });

// app.listen(port, () => {
//     console.log("Listening!!")
// })


const express = require("express");

const app = express();

const port = 3000;

let numberOfRequest = 0;

app.use(express.json());

function calculateRequests(req, res, next) {
    numberOfRequest++;
    console.log("Request is now: " + numberOfRequest);
    next();
}

app.use(calculateRequests); // No need to specifically mention in callbacks, this middleware willbe automatically executed



function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "sada" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect Inputs",
        });
    } else {
        console.log("inside user middleware");
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        console.log("inside kidney middleware");
        next();
    }
};

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    // do something with kidney here

    res.send("Your heart is healthy");
});

app.get('/kidney-check', userMiddleware, kidneyMiddleware, (req, res) => {
    // do something with kidney here

    res.send("Your heart is healthy");
});

app.get('/heart-checkup', userMiddleware, (req, res) => {
    // do something with kidney here

    res.send("Your heart is healthy");
});

app.post('/health-checkup', (req, res) => {
    // kidneys = [1, 2] (expecting an array )
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is " + kidneyLength);
});

// global catches

app.use(function(err, req, res, next) {
    res.status(500).send("An Internal server error occured");
});

app.listen(port, () => {
    console.log("Listening!!")
})
