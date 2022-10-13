const axios = require('axios').default;

const signIn = async (email: string, password: string) => {
    const res = await axios.post('http://localhost:4000/users/signin', { email, password });
    const token = res.data.accessToken;
    if (token) {
        return token
    } else {
        alert('Invalid credentials!')
    }
};

export default signIn