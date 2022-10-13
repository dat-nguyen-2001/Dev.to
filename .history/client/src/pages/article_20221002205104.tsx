
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const ArticlePage = () => {
    const { username, title } = useParams();

    return (
        <Layout title={title}>
            <div>
                {username}
            </div>
        </Layout>

    )
}

export default ArticlePage