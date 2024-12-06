const express = require("express");
const jwt = require("jsonwebtokens");
const jwtPassword = "123456";

const PORT = 3000;

const app = express();

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    }
]


function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
}

app.post("/sign-in", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username}, "shhhh");
    return res.json({
        token,
    });

});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of usres other than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid Token",
        });
    }
});


app.listen(port, () => {
    console.log("Running the Backend!!");
});