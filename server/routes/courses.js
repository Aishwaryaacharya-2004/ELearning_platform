const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get courses by subject
router.get('/:subject', async (req, res) => {
    try {
        const courses = await Course.find({ subject: { $regex: new RegExp(req.params.subject, 'i') } }); // Case insensitive search
        if (!courses.length) return res.status(404).json({ message: 'No courses found for this subject.' });
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
