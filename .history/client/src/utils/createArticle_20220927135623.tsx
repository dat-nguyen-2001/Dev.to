const axios = require('axios');



const createArticle = async function (title, content, tags, coverImage) {
    await axios.post('local')
}

export default createArticle