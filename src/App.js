import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CourseList from './components/Courselist'; // Ensure the case matches your file name
import SubjectPage from './components/SubjectCourses'; // Import SubjectPage component
import About from './components/About'; // Import About component
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="/subject/:subject" element={<SubjectPage />} /> {/* Route for Subject page */}
                    <Route path="/about" element={<About />} /> {/* Route for About page */}
                    {/* Add other routes as needed */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
