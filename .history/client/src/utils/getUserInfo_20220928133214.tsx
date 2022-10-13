const axios = require('axios').default;

async function getUserInfo (username: string) {
    const user = await axios.get(`https://localhost:4000/users/${username}`);
    console.log(user)
    return user;
}

export default getUserInfo;