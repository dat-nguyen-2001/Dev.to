const axios = require('axios').default;

const signUp = async (email: string, password: string) => {
    const result = await axios.post('http://localhost:4000/users/signup', { email, password })
        .catch(() => {
            alert('Invalid credentials!');
            return null
        });
};

export default signUp