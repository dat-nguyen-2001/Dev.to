import PersonIcon from '@mui/icons-material/Person';

const ArticleBlock = ({ article }: any) => {
    const tags = article.tags.split(',')
    return (
        <div className="flex flex-col space-y-2 bg-white rounded w-[98vw] mx-auto border-[#e5e5e5]">
            <div className='flex items-center space-x-1 cursor-pointer'>
                <div>
                    <PersonIcon />
                </div>
                <div className='font-semibold'><i>{article.user.username}</i></div>
            </div>
            <div className='text-xl font-bold hover:text-blue-700 cursor-pointer'>{article.title}</div>
            <div className='flex space-x-2 flex-w'>
                {tags.map((tag: string) => (
                    <span>#{tag}</span>
                ))}
            </div>
            <div></div>
        </div>
    )
}
export default ArticleBlock 