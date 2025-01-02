import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoUrl }) => {
    // Extract video ID from the YouTube URL
    const videoId = videoUrl.split('v=')[1]?.split('&')[0];

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <YouTube videoId={videoId} opts={opts} />
    );
};

export default YouTubePlayer;
