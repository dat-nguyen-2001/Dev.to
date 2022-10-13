const axios = require('axios').default;

const signUp = async (email: string, password: string) => {
    await axios.post('http://localhost:4000/users/signup', { email, password }).then((data) => return data)
        .catch(() => {
            alert('Invalid credentials!');
            return null
        });
};

export default signUp