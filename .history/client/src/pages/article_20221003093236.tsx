import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const { getArticlesByUser } = articlesApi

const ArticlePage = () => {
    const { username, title } = useParams();
    const [article, setArticle] = useState<any>()
    const [tagsList, setTagsList] = useState([])
    useEffect(() => {
        username !== undefined && getArticlesByUser(username).then(data => {
            const filteredArticle = data.filter((article: any) => article.title === title);
            setArticle(filteredArticle[0]);
            setTagsList(filteredArticle[0].tags.split(','))
        })
    }, [])
    console.log(article, tagsList)
    return (
        <Layout title={title}>
            {article !== undefined &&
                <div className='flex'>
                    {/* // Left side */}
                    <div className='flex flex-col space-y-3 px-10'>
                        <div >
                            <FavoriteBorderIcon />
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    {/* // Content wrapper */}
                    <div>
                    <div className='mt-[-20px] bg-white flex flex-col space-y-3 px-3'>
                        {article.coverImage !== "" && <img src={article.coverImage} className="border-b-[1px] " />}
                        <a href={`/${article.user.username}`} className='flex items-center space-x-1 cursor-pointer'>
                            <div className='w-8 h-8 rounded-full cursor-pointer'>
                                <img src={article.user.profile_pic ? article.user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} className='rounded-full' />
                            </div>
                            <div className='font-semibold'><i>@{article.user.username}</i></div>
                        </a>
                        <div className='font-bold text-2xl'>{article.title}</div>
                        <div className='flex space-x-3'>
                            {tagsList.map((tag: string) => (
                                // Set a random background color for a tag
                                <div className={`px-2 py-1 rounded flex space-x-2 bg-[#e5e5e5]`}>
                                    <span>#{tag}</span>
                                </div>
                            ))}
                        </div>
                        <div>{article.content}</div>
                    </div>
                    {/* Right side */}
                    <div></div>
                    </div>
                </div>
            }
        </Layout>

    )
}

export default ArticlePage