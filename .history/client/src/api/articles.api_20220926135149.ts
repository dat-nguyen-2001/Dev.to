export async function getArticleAPI() {
    const res = await fetch('http://localhost:4000/articles', { method: 'GET' })
    return await res.json();
}

const axios = require('axios').default;

const getArticles = async (email: string, password: string) => {
    const res = await axios.get('http://localhost:4000/articles')
        .catch((err: any) => {
            alert(err);
            return null
        });
    const token = res.data.accessToken;
    return token;
};

export default getArticles