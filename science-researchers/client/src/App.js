import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResearchersList from './components/ResearchersList';
import ArticlesList from './components/ArticlesList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ResearchersList />} />
                <Route path="/articles" element={<ArticlesList />} />
            </Routes>
        </Router>
    );
}

export default App;
