const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password  
    })
    res.json({
        message: "Admin created successfully"; 
    });

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

});

module.exports = router;