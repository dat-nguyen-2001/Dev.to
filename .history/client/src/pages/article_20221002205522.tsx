import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const ArticlePage = () => {
    const { username, title } = useParams();
    const [articles, setArticles] = useState<any[]>([])
    const { getArticlesByUser } = articlesApi
    useEffect(() => {
        getArticlesByUser().then(data => {
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