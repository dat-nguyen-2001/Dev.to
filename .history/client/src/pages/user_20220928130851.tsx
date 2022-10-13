import { useParams } from "react-router-dom";

function User() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { username } = useParams();

    return (
        <div>
            <h3>ID: {username}</h3>
        </div>
    );
}

export default User