
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const ArticlePage = () => {
    const { article, title } = useParams();

    return (
        <Layout title={title}>
            <div>
                
            </div>
        </Layout>

    )
}

export default ArticlePage