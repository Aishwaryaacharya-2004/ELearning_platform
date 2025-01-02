import React from 'react';
import YouTube from 'react-youtube';

const CourseCard = ({ title, description, videoUrl }) => {
    const videoId = extractVideoId(videoUrl); // Extract the video ID from the URL

    return (
        <div style={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            {videoId ? (
                <YouTube videoId={videoId} />
            ) : (
                <p>No video available</p>
            )}
        </div>
    );
};

// Function to extract video ID from YouTube URL
const extractVideoId = (url) => {
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    return match ? match[1] : null; // Return the video ID or null if not found
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        textAlign: 'center',
        width: '250px',
        transition: 'transform 0.2s', // Animation effect
    },
};

export default CourseCard;
