const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const PORT = 3000;

mongoose.connect(
    "mongodb+srv://nstsrka04:12345@cluster0.eoed1.mongodb.net/User_app"
);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
});

const user = new User({
    name: "harkirat singh",
    username: "harkirat@gmail.com",
    password: "123",
})

user.save();

const app = express();
app.use(express.json());

function userExists(username, password) {

};


app.post("/sign-in", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username}, jwtPassword);
    return res.json({
        token,
    });
    
});



app.post('signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        username: username,
        password: password
    });

    user.save();
    res.json({
        "msg" : "User created successfully"
    })
    
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of usres other than this username
        res.json({
            users: ALL_USERS.filter(function(value) {
                if (value.username == username) {
                    return false
                } else
                {
                    return true;
                }
            })
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid Token",
        });
    }
});


app.listen(PORT, () => {
    console.log(`Backend Server Running with MongoDB in PORT ${PORT}`);
});