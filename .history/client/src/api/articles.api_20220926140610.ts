const axios = require('axios').default;

const getArticles = async () => {
    const res = await axios.get('http://localhost:4000/articles')

    console.log(res.data)
    return res.data;
};

export default getArticles