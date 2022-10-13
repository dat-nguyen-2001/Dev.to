import { useParams } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import { useState, useEffect } from 'react'
import Layout from "../components/Layout";
function User() {

    // Get the user info
    let { username } = useParams();
    const [user, setUser] = useState<any>(null);
    const [profile_pic ,setProfilePic] = useState<string>('')
    useEffect(() => {
        username !== undefined && getUserInfo(username).then(data => {
            setUser(data.data);
            setProfilePic(data.data.profile_pic)
        })
    }, []);
    useEffect(() => {
        setProfilePic(user.profile_pic)
        })
    }, [user]);
    console.log(profile_pic)


    return (
        <Layout title={`${username} - DEV Community 👩‍💻👨‍💻`}>
            <div>
                <div>
                    <img src={profile_pic !== '' && profile_pic !== undefined ? profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'}  width={500} height={500}/>
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