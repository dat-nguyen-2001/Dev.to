const axios = require('axios').default;

const getUser = async (id: number) => {
    const res = await axios.post('http://localhost:4000/users/signin', { email, password })
        .catch(() => {
            alert('Invalid credentials!');
            return null
        });
    const token = res.data.accessToken;
    return token;
};

export default signIn