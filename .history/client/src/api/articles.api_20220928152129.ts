const axios = require('axios').default;

const getArticles = async () => {
    const res = await axios.get('http://localhost:4000/articles')
    return res.data;
};

const createArticle = async function (title: string, content: string, tags: string, coverImage: string) {
    await axios.post('http://localhost:4000/articles/create', {title, content, tags, coverImage}, {headers: {Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`}})
}

export default {getArticles, cr}