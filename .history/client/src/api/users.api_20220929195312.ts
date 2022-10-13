const axios = require('axios').default;

async function getUserInfo (username: string) {
    const user = await axios.get(`http://localhost:4000/users/${username}`);
    return user;
};

const signIn = async (email: string, password: string) => {
    const res = await axios.post('http://localhost:4000/users/signin', { email, password })
        .catch(() => {
            alert('Invalid credentials!');
            return null
        });
    const token = res.data.accessToken;
    return token;
};

const signUp = async (email: string, password: string) => {
    const result = await axios.post('http://localhost:4000/users/signup', { email, password })
    if(!result) return false;
    return true;
};

const usersApi = {getUserInfo, signIn, sign}