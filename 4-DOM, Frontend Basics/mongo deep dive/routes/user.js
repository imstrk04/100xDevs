const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    });
    res.json({
        message: "User created successfully"
    });
   
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({
        courses: courses
    });
 
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        // Extract the courseId and username
        const courseId = req.params.courseId;
        const username = req.headers.username;

        // Update the user's purchasedCourses array
        const result = await User.updateOne(
            { username: username },
            { $push: { purchasedCourses: courseId } }
        );

        // Check if any document was modified
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "User not found or no changes made" });
        }

        // Respond with success
        res.json({ message: "Course purchased successfully" });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred while purchasing the course" });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    console.log(userMiddleware.purchasedCourses);
    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    })
    res.json({
        msg: "Purchased courses fetched successfully",
        courses: courses
    })
});

module.exports = router