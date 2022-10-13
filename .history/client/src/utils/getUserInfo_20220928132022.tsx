const axios = require('axios').default;

function getUserInfo (username: string) {
    const user = await axios.get(`https://localhost:4000/users/${username}`)
}

export default getUserInfo;