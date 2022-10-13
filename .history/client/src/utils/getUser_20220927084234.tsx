const axios = require('axios').default;

const getUser = async (id: number) => {
    const res = await axios.get(`http://localhost:4000/users?id=${id}`)
        .catch(() => {
            alert('Invalid credentials!');
            return null
        });
    console.log(res)
    return token;
};

export default signIn