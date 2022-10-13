import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import { useState, useEffect } from 'react'
import Layout from "../components/Layout";
function User() {

    // Get the user info
    let { username } = useParams();
    const [user, setUser] = useState<any>(null);
    const [profile_pic ,setProfilePic] = userS
    useEffect(() => {
        username !== undefined && getUserInfo(username).then(data => {
            setUser(data.data);
        })
    }, [])
    console.log(user)
    const articles = user === null ? [] : user.articles;
    const comments = user === null ? [] : user.comments;

    return (
        <Layout title={`${username} - DEV Community 👩‍💻👨‍💻`}>
            <div>
                <div>
                    <img src={user !== null  ? user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'}  width={500} height={500}/>
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