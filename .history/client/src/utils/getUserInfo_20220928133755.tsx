const axios = require('axios').default;

async function getUserInfo (username: string) {
    const user = await axios.get(`http://localhost:4000/users/${username}`);
    return user;
}

export default getUserInfo;