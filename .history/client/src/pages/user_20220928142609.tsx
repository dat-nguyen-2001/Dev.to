import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import { useState, useEffect } from 'react'
import Layout from "../components/Layout";
function User() {

    // Get the user info
    let { username } = useParams();
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        username !== undefined && getUserInfo(username).then(data => {
            setUser(data.data);
        })
    }, [])

    const { articles, comments, profile_pic } = user;
    return (
        <Layout title={`${username} - DEV Community 👩‍💻👨‍💻`}>
            <div>
                <div>

                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default User