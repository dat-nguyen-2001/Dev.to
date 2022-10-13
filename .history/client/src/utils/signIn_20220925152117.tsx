const axios = require('axios')

const signIn = async (email: string, password: string) => {
    const res = await axios.post('http://localhost:4000/users/signin', {email, password})
        const token = res.data.accessToken;
        console.log(token)
  };

  export default signIn