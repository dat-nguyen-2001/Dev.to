import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import {useState, useEffect} from 'react'
function User() {

    let { username } = useParams();
    const [user, setUser] = useState<any>(null)
    get
    // useEffect(() => {
    //     username !== undefined && getUserInfo(username).then(data => {
    //         setUser(data)
    //     })
    // }, [])
    console.log(user)
    return (
        <div>
            <h3>ID: {username}</h3>
        </div>
    );
}

export default User