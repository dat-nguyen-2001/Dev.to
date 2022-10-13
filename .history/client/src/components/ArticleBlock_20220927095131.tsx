import PersonIcon from '@mui/icons-material/Person';

const ArticleBlock = ({ article }: any) => {
    const tags = article.tags.split(',')
    return (
        <div className="flex flex-col">
            <div className='flex items-center space-x-2'>
                <div>
                    <PersonIcon />
                </div>
                <div><i>{article.user.username}</i></div>
            </div>
            <div>{article.title}</div>
            <div>
                {tags.map((tag: string) => (
                    <span>#{tag}</span>
                ))}
            </div>
            <div></div>
        </div>
    )
}
export default ArticleBlock 