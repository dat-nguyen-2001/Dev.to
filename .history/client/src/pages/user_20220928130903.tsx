import { useParams } from "react-router-dom";

function User() {
    let { username } = useParams();

    return (
        <div>
            <h3>ID: {username}</h3>
        </div>
    );
}

export default User