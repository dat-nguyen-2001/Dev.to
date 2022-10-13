import articlesApi from '../api/articles.api'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const ArticlePage = () => {
    const { username, title } = useParams();
    const [articles, setArticles] = useState<any[]>([])
  const {getArticles} = articlesApi
  useEffect(() => {
    getArticles().then(data => {
      setArticles(data)
    })
  }, [])

    return (
        <Layout title={title}>
            <div>
            </div>
        </Layout>

    )
}

export default ArticlePage