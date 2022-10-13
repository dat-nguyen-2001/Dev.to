import Layout from '../components/Layout';
import usersApi from '../api/users.api';

import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';
import { useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';


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
                <div className="">
                    <input
                        placeholder="Search..."
                        className={`w-[90%] h-[100%] outline-none ml-3`}></input>
                    <SearchIcon fontSize='large' />
                </div>
            </div>
        </Layout>
    )
}

export default ReadingList
