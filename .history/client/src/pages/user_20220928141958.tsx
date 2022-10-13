import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import {useState, useEffect} from 'react'
import Layout from "../components/Layout";
function User() {

    let { username } = useParams();
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        username !== undefined && getUserInfo(username).then(data => {
            setUser(data.data);
        })
    }, [])
    console.log(user)
    return (
        <Layout title={``}>
            <h3>ID: {username}</h3>
        </Layout>
    );
}

export default User