import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const ArticlePage = () => {
    const { username, title } = useParams();
    const [articles, setArticles] = useState<any[]>([])
    const { getArticlesByUser } = articlesApi
    useEffect(() => {
        username !== undefined && getArticlesByUser(username).then(data => {
            setArticles(data)
        })
    }, [])

    const article = articles.filter

    return (
        <Layout title={title}>
            <div>
            </div>
        </Layout>

    )
}

export default ArticlePage