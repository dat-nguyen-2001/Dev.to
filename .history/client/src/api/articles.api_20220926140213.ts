const axios = require('axios').default;

const getArticles = async () => {
    const res = await axios.get('http://localhost:4000/articles')

    const articles = await res.data
    return articles;
};

export default getArticles