const axios = require('axios').default;

const signUp = async (email: string, password: string) => {
    const result = await axios.post('http://localhost:4000/users/signup', { email, password })
    if(!result) return false;
    return true;
};

export default signUp