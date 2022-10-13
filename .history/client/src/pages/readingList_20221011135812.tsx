import Layout from '../components/Layout';
import usersApi from '../api/users.api';

import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';
import { useEffect, useState } from 'react';


const { getUserInfo } = usersApi

const ReadingList = () => {

    const [reading_list, setReadingList] = useState([])
    const curUsername = useRecoilValue(usernameState)
    useEffect(() => {
        getUserInfo(curUsername).then(res => setReadingList(res.data[0].reading_list))
    }, [])
    return (
        <Layout title="Reading List - DEV Community 👩‍💻👨‍💻">
            <div className="">
                <h1>Reading list ({reading_list.length})</h1>
                <div className=" w-full md:flex items-center text-center h-[40px] border-[1.5px] border-black/50 rounded-md">
                    <input
                        placeholder="Search..."
                        className={`w-[90%] h-[100%] outline-none ml-3`} />
                </div>
            </div>
        </Layout>
    )
}

export default ReadingList
