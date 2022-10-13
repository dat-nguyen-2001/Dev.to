const axios = require('axios').default;

const getArticles = async () => {
    const res = await axios.get('http://localhost:4000/articles')
    return res.data;
};

const createArticlesByUser = async function (username:s tring) {
    await axios.post('http://localhost:4000/articles/create', {title, content, tags, coverImage}, {headers: {Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`}})
}

const createArticle = async function (title: string, content: string, tags: string, coverImage: string) {
    await axios.post('http://localhost:4000/articles/create', {title, content, tags, coverImage}, {headers: {Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`}})
}

const articlesApi = {getArticles, createArticle}
export default articlesApi