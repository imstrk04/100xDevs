const jwt = require("jsonwebtoken");

// decode, verify and generate
const value = {
    name : "harkirat",
    accountNumber: 123123123
}


// jwt
const token = jwt.sign(value, "secret");
console.log(token);

// this token has been generated using this secret, and hence this token
// can only be verified using this secret

// verify => jwt.verify(value, "secret");
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTczMzY0MTcwMH0.uFzW5TJ2kacjE0FqmLUTyvssRxtXJalMMUJ7cFzmgAo", 
                                    "secret");
console.log(verifiedValue); 