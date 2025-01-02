import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const subjects = [
        { title: "Physics", description: "Explore the fundamentals of physics." },
        { title: "Chemistry", description: "Dive into the world of chemical reactions." },
        { title: "Biology", description: "Learn about living organisms and life processes." },
        { title: "Mathematics", description: "Understand mathematical concepts and theories." }
    ];

    return (
        <section id="courses">
            <h2>Available Subjects</h2>
            <div style={styles.container}>
                {subjects.map(subject => (
                    <Link to={`/subject/${subject.title.toLowerCase()}`} key={subject.title} style={styles.link}>
                        <div style={styles.card}>
                            <h3>{subject.title}</h3>
                            <p>{subject.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
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
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        width: '200px',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit', // Inherit color from parent
    },
};

export default CourseList;
