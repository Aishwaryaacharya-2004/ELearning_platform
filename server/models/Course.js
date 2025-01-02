const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    subject: { type: String, enum: ['Physics', 'Chemistry', 'Biology', 'Mathematics'], required: true },
    prerequisites: { type: String },
    videoUrl: { type: String }, // URL for the video
    captionsUrl: { type: String },
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model('Course', courseSchema);
