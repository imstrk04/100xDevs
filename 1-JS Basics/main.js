// Objects
/*

const allUsers = [
    {
        firstName: "sada",
        gender: "male"
    },
    {
        firstName: "rama",
        gender: "male"
    },
    {
        firstName: "priya",
        gender: "female "
    }
]

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"]);
    }
}

*/


// function findSum(a,b) {
//     return a + b;;
// }

// const value = findSum(5, 4);

// console.log(value);

// // setTimeout
// function greet() {
//     console.log("hello world")
// }
// setTimeout(greet, 3 * 1000)

const fs = require("fs");
const { func } = require("prop-types");

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// }) 

// console.log("hi there")

// function sadaReadFile() {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, 2000)
//     })
// }

// function onDone(data) {
//     console.log("data");
// }

// sadaReadFile().then(onDone)

// Async Await

function sadaAsyncFunction() {
    let p = new Promise(function(resolve) {
        resolve(2) ;
    });

    return p;
}

async function main() {
    const value = await sadaAsyncFunction();
    let a = 10;
    console.log("a is " + a);
    a += value;
    console.log("a is now: "+ a);
}

main();