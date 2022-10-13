const axios = require('axios').default;

const getArticles = async () => {
    const res = await axios.get('http://localhost:4000/articles')
        .catch((err: any) => {
            alert(err);
            return null
        });

    const articles = 
    return 1;
};

export default getArticles