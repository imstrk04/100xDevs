// const mongoose = require('mongoose');

// // defining the schema

// const UserSchema = new mongoose.Schema({
//     email: String,
//     password1: String, 
//     purchasedCourses: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Course' // Relati0nship between User and Course
//     }]
// })

// const CourseSchema = new mongoose.Schema({
//     title: String, 
//     price: Number,
// })

// const User = mongoose.model('User', UserSchema);
// const Course = mongoose.model('Course', CourseSchema);  


// // create

// User.create({
//     username: req.body.username,  
//     password: req.body.password     
// })

// // reading
// User.findById("1");
// User.findOne({
//     username: "sada@gmail.com"
// })
// User.find({
//     username: "sada@gmail.com"
// })

// // update
// User.updateOne(
//     { "id" : "1" },
//     { $push: { purchasedCourses: courseId}}
// )

// // delete
// User.deleteOne({
//     id: "1"
// })

// User.deleteMany({})
// User.deleteOne({
//     username: "sada@gmail.com"
// })