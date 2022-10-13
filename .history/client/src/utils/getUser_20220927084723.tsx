const axios = require('axios').default;

const getUser = async ()) => {
    const res = await axios.get(`http://localhost:4000/users`)
        .catch(() => {
            alert('Invalid credentials!');
            return null
        });
    console.log(res)
    return res;
};

export default getUser