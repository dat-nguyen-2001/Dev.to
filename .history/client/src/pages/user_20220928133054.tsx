import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import {useState, useEffect} from 'react'
function User() {

    let { username } = useParams();
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        getArticles().then(data => {
            setArticles(data)
        })
    }, [])
    const user = username !== undefined ? getUserInfo(username) : null;
    console.log(user)
    return (
        <div>
            <h3>ID: {username}</h3>
        </div>
    );
}

export default User