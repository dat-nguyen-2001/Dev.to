import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";

function User() {
    let { username } = useParams();
    if
    const user = getUserInfo(username)
    return (
        <div>
            <h3>ID: {username}</h3>
        </div>
    );
}

export default User