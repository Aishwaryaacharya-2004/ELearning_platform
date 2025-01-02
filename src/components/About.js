import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/generate', { prompt: input });
            setResponse(res.data.response);
        } catch (error) {
            console.error("Error generating response:", error);
            setResponse("Sorry, I couldn't generate a response.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>About Us</h2>
            <p>This platform provides e-learning resources for students in Physics, Chemistry, Biology, and Mathematics.</p>
            <p>Our mission is to make quality education accessible to everyone.</p>
            <h3>Ask our AI Agent!</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Ask</button>
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                response && <div style={styles.response}>{response}</div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    form: {
        marginTop: '20px',
    },
    input: {
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 15px',
        marginLeft: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    response: {
        marginTop: '20px',
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: '#f0f8ff',
    },
};

export default About;
