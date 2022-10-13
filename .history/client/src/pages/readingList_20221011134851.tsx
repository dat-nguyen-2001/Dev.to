import Layout from '../components/Layout';
import usersApi from '../api/users.api';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';
import { useEffect, useState } from 'react'
const { getUserInfo } = usersApi



const ReadingList = () => {

    const [reading_list, setReadingList] = useState()
    const curUsername = useRecoilValue(usernameState)
    useEffect(() => {
        getUserInfo(curUsername).then(res => console.log(res.data))
    }, [])

    return (
        <Layout title="Reading List - DEV Community 👩‍💻👨‍💻">
            <div className="">

            </div>
        </Layout>
    )
}

export default ReadingList
