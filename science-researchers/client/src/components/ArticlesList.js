import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArticlesList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/articles')
            .then(response => setArticles(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        {article.title} - {new Date(article.publicationDate).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticlesList;
