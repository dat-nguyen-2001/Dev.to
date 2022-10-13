import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const ArticlePage = () => {
    const { username, title } = useParams();
    const [article, setArticle] = useState<any>()
    const { getArticlesByUser } = articlesApi
    useEffect(() => {
        username !== undefined && getArticlesByUser(username).then(data => {
            const filter(data.filter((article: any) => article.title === title))
        })
    }, [])

    console.log(article, ":HERE")
    return (
        <Layout title={title}>
            <div>
            </div>
        </Layout>

    )
}

export default ArticlePage