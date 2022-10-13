import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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
                <div className='flex lg:px-10'>
                    {/* // Left side */}
                    <div className='hidden md:flex flex-col h-full sticky top-[100px] z-[50] space-y-8 px-10 pt-[50px] lg:px-0'>
                        <div className='flex flex-col items-center '>
                            <span className="articleIcon hover:bg-[pink] hover:text-[red]">
                                <FavoriteBorderIcon />
                            </span>
                            <span>{article.reactions}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='articleIcon hover:bg-[#f5ecdd] hover:text-[#f59e0b]'>

                                <ChatBubbleOutlineIcon />
                            </span>
                            <span>{article.comments.length}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='articleIcon hover:bg-[#e4e3f3] hover:text-[#4f46e5]'>
                                <BookmarkBorderIcon />

                            </span>
                            <span>{article.listed_users.length}</span>
                        </div>
                    </div>
                    {/* // Content wrapper */}
                    <div className='mt-[-20px] bg-white flex flex-col space-y-3 px-3 md:mt-0 rounded-lg md:mr-5 pb-10'>
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
                    <div className='hidden lg:inline rounded-lg bg-white px-3 py-5 h-full xl:px-8 '>
                        <a href={`/${article.user.username}`} className='flex items-center space-x-1 cursor-pointer mb-3'>
                            <div className='w-8 h-8 rounded-full cursor-pointer'>
                                <img src={article.user.profile_pic ? article.user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} className='rounded-full' />
                            </div>
                            <div className='font-semibold'><i>@{article.user.username}</i></div>
                        </a>
                        <p className='text-lg font-semibold'>More from <a href={`/${article.user.username}`} className='text-[blue] cursor-pointer'>{article.user.username}</a></p>

                    </div>
                </div>
            }
        </Layout>

    )
}

export default ArticlePage