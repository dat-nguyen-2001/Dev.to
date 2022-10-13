import articlesApi from '../api/articles.api'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';

const { getArticlesByUser, likeArticle, saveArticle } = articlesApi

const ArticlePage = () => {

    // States
    const { username, title } = useParams();
    const signedInUsername = useRecoilValue(usernameState)
    const [article, setArticle] = useState<any>()
    const [otherArticles, setOtherArticles] = useState<any>()
    const [tagsList, setTagsList] = useState([])
    // Render the main article and other articles from the same author / user
    useEffect(() => {
        username !== undefined && getArticlesByUser(username).then(data => {
            // Set the main article
            const filteredArticle = data.filter((article: any) => article.title === title);
            setArticle(filteredArticle[0]);

            //Set 3 other articles of the user
            const others = data.filter((article: any) => article.title !== title);
            setOtherArticles(others.slice(0, 3));

            setTagsList(filteredArticle[0].tags.split(','))

            // Set listed_username
            const listed_usernames = filteredArticle[0].listed_users.map((user: any) => user.username);
            setIsSaved(listed_usernames.include(signedInUsername))
        })
    }, [])

    // Handle reacting (like) to the article
    const [liked, setLiked] = useState<boolean>(false)
    const handleLikeArticle = async (title: string) => {
        await likeArticle(title);
        setLiked(true)
    }

    // Handle saving article to the reading list
    // First, check if the article is already in the reading list
    const [isSaved, setIsSaved] = useState<Boolean>(false)
    const handleSaveArticle = async () => {
        setIsSaved((prevState) => !prevState)
        const articleId = Number(article.id);
        await saveArticle(articleId)
    }

    return (
        <Layout title={title}>
            {article !== undefined &&
                <div className='flex lg:px-10 2xl:px-32'>
                    {/* // Left side */}
                    <div className='hidden md:flex flex-col h-full  sticky top-[100px] z-[1] space-y-8 px-10 pt-[50px] lg:px-0 lg:pr-10'>
                        <div className='flex flex-col items-center '>
                            {!liked ? <span className="articleIcon hover:bg-[pink] hover:text-[red]" onClick={() => handleLikeArticle(article.title)}>
                                <FavoriteBorderIcon />
                            </span>
                                :
                                <span className="articleIcon bg-[pink] text-[red]">
                                    <FavoriteBorderIcon />
                                </span>}
                            <span>{article.reactions}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='articleIcon hover:bg-[#f5ecdd] hover:text-[#f59e0b]'>

                                <ChatBubbleOutlineIcon />
                            </span>
                            <span>{article.comments.length}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            {isSaved? 
                            <span className='articleIcon bg-[#e4e3f3] text-[#4f46e5] border-[1px] border-[#4f46e5]' onClick={handleSaveArticle}>
                                <BookmarkIcon />
                            </span> : 
                            <span className='articleIcon hover:bg-[#e4e3f3] hover:text-[#4f46e5]' onClick={handleSaveArticle}>
                                <BookmarkBorderIcon />
                            </span>}
                            <span>{article.listed_users.length}</span>
                        </div>
                    </div>
                    {/* // Content wrapper */}
                    <div className='mt-[-20px] pt-5 bg-white flex flex-col space-y-3 px-3 md:mt-0 rounded-lg md:mr-5 pb-10 lg:basis-[70%]'>
                        {article.coverImage !== "" && <img src={article.coverImage} className="border-b-[1px] " />}
                        <a href={`/${article.user.username}`} className='flex items-center space-x-1 cursor-pointer'>
                            <div className='w-8 h-8 rounded-full cursor-pointer'>
                                <img src={article.user.profile_pic ? article.user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} className='rounded-full' />
                            </div>
                            <div className='font-semibold'><i>@{article.user.username}</i></div>
                        </a>
                        <div className='font-bold text-2xl md:pl-10'>{article.title}</div>
                        <div className='flex space-x-3 md:pl-10'>
                            {tagsList.map((tag: string) => (
                                <div className={`px-2 py-1 rounded flex space-x-2 bg-[#e5e5e5]`}>
                                    <a href={`../?tag=${tag}`} className="cursor-pointer">#{tag}</a>
                                </div>
                            ))}
                        </div>
                        <div className='md:px-10'>{article.content}</div>
                    </div>
                    {/* Right side */}
                    <div className='hidden lg:inline sticky top-[80px] rounded-lg bg-white px-3 py-5 h-full xl:px-8 basis-[30%] z-[0]'>
                        <a href={`/${article.user.username}`} className='flex items-center space-x-1 cursor-pointer mb-3'>
                            <div className='w-8 h-8 rounded-full cursor-pointer'>
                                <img src={article.user.profile_pic ? article.user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} className='rounded-full' />
                            </div>
                            <div className='font-semibold'><i>@{article.user.username}</i></div>
                        </a>
                        <p className='text-lg font-semibold'>More from <a href={`/${article.user.username}`} className='text-[blue] cursor-pointer'>{article.user.username}</a></p>
                        {/* Other articles from the same user */}
                        <div>
                            {otherArticles.length === 0 ?
                                <p>Nothing to show here!</p>
                                :
                                <>
                                    {otherArticles.map((article: any) => (
                                        <div className='border-t-[1px] mt-3'>
                                            <a href={`/${article.user.username}/${article.title}`} className='text-lg text-[gray] hover:text-blue-800 cursor-pointer'>{article.title}</a>
                                            <div className='flex space-x-1'>
                                                {article.tags.split(',').map((tag: string) => (
                                                    <div >#{tag}  </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </>
                            }
                        </div>
                    </div>
                </div>
            }
        </Layout>

    )
}

export default ArticlePage