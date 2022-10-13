import Layout from '../components/Layout';
import usersApi from '../api/users.api';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';

const {get}
const curUsername = useRecoilValue(usernameState)

const ReadingList = () => (
  <Layout title="Reading List - DEV Community 👩‍💻👨‍💻">
    <div className="">
      
    </div>
  </Layout>
)

export default ReadingList
