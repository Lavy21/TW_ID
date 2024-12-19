import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResearchersList() {
    const [researchers, setResearchers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/researchers')
            .then(response => setResearchers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Researchers</h1>
            <ul>
                {researchers.map(researcher => (
                    <li key={researcher.id}>
                        {researcher.name} - {researcher.field}
                        <ul>
                            {researcher.articles.map(article => (
                                <li key={article.id}>{article.title}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResearchersList;
