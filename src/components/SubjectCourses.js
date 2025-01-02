import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Youtubeplayer from './Youtubeplayer';
import { useParams } from 'react-router-dom';

const SubjectCourses = () => {
    const { subject } = useParams(); // Get the subject from URL parameters
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/courses/${subject}`);
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, [subject]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>{subject.charAt(0).toUpperCase() + subject.slice(1)} Courses</h2>
            {courses.length > 0 ? (
                <ul>
                    {courses.map(course => (
                        <li key={course._id} style={{ marginBottom: '20px' }}>
                            <h3>{course.title}</h3>
                            <p><strong>Description:</strong> {course.description}</p>
                            <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
                            {course.videoUrl && <Youtubeplayer videoUrl={course.videoUrl} />}
                            {course.captionsUrl && (
                                <p><a href={course.captionsUrl}>Download Captions</a></p>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No courses available for this subject.</p>
            )}
        </div>
    );
};

export default SubjectCourses;
