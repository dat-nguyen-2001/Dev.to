import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const ArticleBlock = ({ article }: any) => {
    const tags = article.tags.split(',')
    return (
        <div className="flex flex-col space-y-2 bg-white rounded w-[98vw] mx-auto border-[#e5e5e5] px-3 py-1">
            <div className='flex items-center space-x-1 cursor-pointer'>
                <div>
                    <PersonIcon />
                </div>
                <div className='font-semibold'><i>@{article.user.username}</i></div>
            </div>
            <div className='text-[1.3em] font-bold hover:text-blue-700 cursor-pointer'>{article.title}</div>
            <div className='flex space-x-2 flex-wrap'>
                {tags.map((tag: string) => (
                    <span className='hover:bg-[#e5e5e5] border-[white] border-[.2px] hover:border-[#d3d3d3] rounded-md cursor-pointer px-1'>#{tag}</span>
                ))}
            </div>
            <div className='flex space-between items-center'>
                    <div className='flex space-x-5 items-center'>
                        <div className='flex space-x-2 items'>
                            <FavoriteBorderIcon />
                            <p>{article.reactions}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <ChatBubbleOutlineIcon />
                            <p>{article.comments.length}</p>
                        </div>
                    </div>
                    <div className='flex space-x-3 items-center'>
                        <div>4 min read</div>
                        <div>
                            <BookmarkBorderIcon />
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default ArticleBlock 