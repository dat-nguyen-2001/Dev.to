import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
const { getArticlesByUser } = articlesApi

const ArticlePage = () => {
    const { username, title } = useParams();
    const [article, setArticle] = useState<any>()
    const [tagsList, setTagsList] = useState([])
    useEffect(() => {
        username !== undefined && getArticlesByUser(username).then(data => {
            const filteredArticle = data.filter((article: any) => article.title === title);
            setArticle(filteredArticle[0]);
            setTagsList(filteredArticle[0].tags.spit(','))
        })
    }, [])
    console.log(article, tagsList)
    return (
        <Layout title={title}>
            {article !== undefined && <div>
                {article.coverImage !== "" && <img src={article.coverImage} />}
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>{article.title}</div>
                <div className='absolute top-0 flex space-x-3'>
                    {tagsList.map((tag: string) => (
                        // Set a random background color for a tag
                        <div className={`px-2 py-1 rounded flex space-x-2`} style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                            <span>#{tag}</span>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>}
        </Layout>

    )
}

export default ArticlePage