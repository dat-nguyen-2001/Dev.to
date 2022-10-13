const axios = require('axios');



const createArticle = async function (title, content, tags, coverImage) {
    await axios.post('http://localhost400')
}

export default createArticle