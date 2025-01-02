import React from 'react';
import { useParams } from 'react-router-dom';
import Coursecard from './Coursecard'; // Ensure this matches your actual file name

const SubjectPage = () => {
    const { subject } = useParams();

    const courses = [
        {
            _id: "677572daab3ff8ba56fd1888",
            title: "Organic Chemistry Basics",
            description: "Fundamentals of organic chemistry.",
            subject: "Chemistry",
            videoUrl: "https://www.youtube.com/watch?v=NVbvyApu0-Y",
        },
        {
            _id: "677572daab3ff8ba56fd1889",
            title: "Biology of Cells",
            description: "Understanding the basic unit of life.",
            subject: "Biology",
            videoUrl: "https://www.youtube.com/watch?v=URUJD5NEXC8",
        },
        {
            _id: "677572daab3ff8ba56fd188a",
            title: "Calculus 101",
            description: "An introduction to calculus concepts.",
            subject: "Mathematics",
            videoUrl: "https://www.youtube.com/watch?v=WsQQvHm4lSw",
        }
    ];

    // Filter courses based on the selected subject
    const filteredCourses = courses.filter(course => course.subject.toLowerCase() === subject);

    return (
        <section id="courses">
            <h2>{subject.charAt(0).toUpperCase() + subject.slice(1)} Courses</h2>
            {filteredCourses.length > 0 ? (
                <div style={styles.container}>
                    {filteredCourses.map(course => (
                        <Coursecard key={course._id} title={course.title} description={course.description} videoUrl={course.videoUrl} />
                    ))}
                </div>
            ) : (
                <p>No courses available for this subject.</p>
            )}
        </section>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
    },
};

export default SubjectPage;
