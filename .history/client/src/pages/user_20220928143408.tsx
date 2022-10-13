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
    console.log(user)
    const articles = user === null ? [] : user.articles;
    const profile_pic = user === null ? '' : user.profile_pic;
    const comments = user === null ? [] : user.comments;

    return (
        <Layout title={`${username} - DEV Community 👩‍💻👨‍💻`}>
            <div>
                <div>
                    <img src={profile_pic !== '' ? profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'}  width={500} height={}/>
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