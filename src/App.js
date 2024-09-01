import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import BarChartPage from './pages/BarChartPage';
import PyramidChartPage from './pages/PyramidChartPage';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bar" element={<BarChartPage />} />
                <Route path="/pyramid" element={<PyramidChartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
