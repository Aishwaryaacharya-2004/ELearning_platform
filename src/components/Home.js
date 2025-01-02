import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to the E-Learning Platform</h1>
            <p style={styles.description}>Explore our courses in Physics, Chemistry, Biology, and Mathematics.</p>
            <Link to="/courses">
                <button style={styles.button}>View Courses</button>
            </Link>
            <div style={styles.imagesContainer}>
                <img src={`${process.env.PUBLIC_URL}/physics.jpg`} alt="Physics" style={styles.image} />
                <img src={`${process.env.PUBLIC_URL}/chemistry.jpg`} alt="Chemistry" style={styles.image} />
                <img src={`${process.env.PUBLIC_URL}/biology.png`} alt="Biology" style={styles.image} />
                <img src={`${process.env.PUBLIC_URL}/math.jpg`} alt="Mathematics" style={styles.image} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#f0f8ff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
    },
    title: {
        animation: 'fadeIn 2s',
    },
    description: {
        animation: 'fadeIn 3s',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    imagesContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    image: {
        width: '100px', // Adjust size as needed
        height: 'auto',
        margin: '0 10px',
    }
};

export default Home;
