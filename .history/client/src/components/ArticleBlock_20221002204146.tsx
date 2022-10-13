import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';

import articlesApi from '../api/articles.api';

const ArticleBlock = ({ article }: any) => {
    const tags = article.tags.split(',');
    const [isSaved, setIsSaved] = useState(false);

    // calculate the minute read of an article
    const {calMinuteRead} = articlesApi
    const minuteRead = calMinuteRead(article.content)

    return (
        <div className="flex flex-col space-y-2 bg-white rounded-md mx-auto border-[#d3d3d3] border-[.2px] pb-8">
            {article.coverImage !== "" && <img src={article.coverImage} className='rounded-t-md h-[150px] w-auto sm:h-[200px] md:h-[250px] lg:h-[300px]' />}
            <a href={`/${article.user.username}`} className='flex items-center space-x-1 cursor-pointer px-3 py-1'>
                <div className='w-8 h-8 rounded-full cursor-pointer'>
                    <img src={article.user.profile_pic ? article.user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} className='rounded-full' />
                </div>
                <div className='font-semibold'><i>@{article.user.username}</i></div>
            </a>
            <a href={``}>

            </a>
            <div className='px-4 text-[1.3em] font-bold hover:text-blue-700 cursor-pointer md:pl-8'>{article.title}</div>
            <div className='px-3 flex space-x-2 flex-wrap text-[.9rem] md:pl-8'>
                {tags.map((tag: string) => (
                    <span className='hover:bg-[#e5e5e5] border-[white] border-[.2px] hover:border-[#d3d3d3] rounded-md cursor-pointer px-1 py-1'>#{tag}</span>
                ))}
            </div>
            <div className='px-3 flex space-between items-center md:pl-8'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex space-x-2'>
                        <FavoriteBorderIcon className='cursor-pointer mt-1' />
                        <p className='lg:hover:bg-[#f5f5f5] px-2 rounded cursor-pointer py-1'>{article.reactions}
                            <span className='hidden lg:inline'> Reactions</span></p>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='w-5 h-5'>
                            <ChatBubbleOutlineIcon className='cursor-pointer mt-1' />
                        </div>
                        <p className='lg:hover:bg-[#f5f5f5] px-2 rounded cursor-pointer py-1'>{article.comments.length}<span className='hidden lg:inline'> Comments</span></p>
                    </div>
                </div>
                <div className='flex space-x-3 items-center'>
                    <div>{minuteRead} min read</div>
                    <div>
                        {isSaved ? <BookmarkIcon className='cursor-pointer' onClick={() => setIsSaved(false)} /> : <BookmarkBorderIcon className='cursor-pointer' onClick={() => setIsSaved(true)} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ArticleBlock 