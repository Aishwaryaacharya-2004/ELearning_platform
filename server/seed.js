const mongoose = require('mongoose');
const Course = require('./models/Course'); // Ensure this path is correct

require('dotenv').config();

const courses = [
    {
        title: "Introduction to Physics",
        description: "A basic introduction to physics concepts.",
        subject: "Physics",
        prerequisites: "Basic mathematics",
        videoUrl:"https://www.youtube.com/watch?v=Y-NQOJ3Uz4w",
        captionsUrl: "http://example.com/captions1.vtt"
    },
    {
        title: "Organic Chemistry Basics",
        description: "Fundamentals of organic chemistry.",
        subject: "Chemistry",
        prerequisites: "None",
        videoUrl: "https://www.youtube.com/watch?v=NVbvyApu0-Y",
        captionsUrl: "http://example.com/captions2.vtt"
    },
    {
        title: "Biology of Cells",
        description: "Understanding the basic unit of life.",
        subject: "Biology",
        prerequisites: "Basic biology knowledge",
        videoUrl: "https://www.youtube.com/watch?v=URUJD5NEXC8",
        captionsUrl: "http://example.com/captions3.vtt"
    },
    {
        title: "Calculus 101",
        description: "An introduction to calculus concepts.",
        subject: "Mathematics",
        prerequisites: "Algebra and trigonometry",
        videoUrl: "https://www.youtube.com/watch?v=WsQQvHm4lSw",
        captionsUrl: "http://example.com/captions4.vtt"
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        // Clear existing courses
        await Course.deleteMany({});
        
        // Insert new courses
        await Course.insertMany(courses);
        
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();
