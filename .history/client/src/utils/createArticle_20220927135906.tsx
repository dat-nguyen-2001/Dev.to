const axios = require('axios').default;

interface ArticleInfo {
    title: string;
    content: string;
    tags: string;
}

const createArticle = async function (title, content, tags, coverImage): Ari {
    await axios.post('http://localhost:4000/articles/create' {title, content, tags, coverImage})
}

export default createArticle