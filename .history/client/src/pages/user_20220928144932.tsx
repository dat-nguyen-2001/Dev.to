import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import { useState, useEffect } from 'react'
import Layout from "../components/Layout";
function User() {

    // Get the user info
    let { username } = useParams();
    const [user, setUser] = useState<any>(null);
    const [profile_pic, setProfilePic] = useState<string>('')
    useEffect(() => {
        username !== undefined && getUserInfo(username).then(data => {
            setUser(data.data[0]);
            setProfilePic(data.data[0].profile_pic)
        })
    }, [])

    console.log(user)


    return (
        <Layout title={`${username} - DEV Community 👩‍💻👨‍💻`}>
            <div className="bg-white rounded-lg py-10">
                <div className="mx-auto w-[40]">
                    <img className="rounded-full w-20 h-20" src={profile_pic !== '' && profile_pic !== undefined ? profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} />
                    <h3>{username}</h3>
                </div>
            </div>
        </Layout>
    );
}

export default User