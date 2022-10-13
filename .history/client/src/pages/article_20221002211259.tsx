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
            const filteredArticle = data.filter((article: any) => article.title === title);
            setArticle(filteredArticle[0])
        })
    }, [])

    return (
        <Layout title={title}>
            <div>
                <img />
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </Layout>

    )
}

export default ArticlePage