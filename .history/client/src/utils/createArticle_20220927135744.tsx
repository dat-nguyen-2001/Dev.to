const axios = require('axios').default;



const createArticle = async function (title, content, tags, coverImage) {
    await axios.post('http://localhost:4000/articles/create')
}

export default createArticle