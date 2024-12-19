import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Stiluri globale
import App from './App'; // Componenta principala a aplicatiei

// Radacina aplicatiei React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


