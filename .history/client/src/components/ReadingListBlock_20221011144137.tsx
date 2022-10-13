import articlesApi from '../api/articles.api';
const { calMinuteRead } = articlesApi

const ReadingListBlock = ({ article }: any) => {
    const tags = article.tags.split(',');
    // calculate the minute read of an article
    const minuteRead = calMinuteRead(article.content)
    return (
        <div className="flex space-x-2 px-3 bg-white rounded-md mx-auto border-[#d3d3d3] border-[.2px] pb-8">
            <div className="min-w-[30px] min-h-[30px] max-w-[35px] max-h-[35px] rounded-full">
                <img src={article.user.profile_pic ? article.user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} className='rounded-full' />
            </div>
            <div className='flex flex-col space-y-1'>
                <div className='font-bold'>
                    {article.title}
                </div>
                <div className='flex space-x-2'>
                    <span className='font-semibold'><i></i></span>
                    <span>{minuteRead} minutes read</span>
                </div>
                <div className='px-3 flex space-x-2 flex-wrap text-[.9rem] md:pl-12'>
                    {tags.map((tag: string) => (
                        <a href={`./?tag=${tag}`} className='hover:bg-[#e5e5e5] border-[white] border-[.2px] hover:border-[#d3d3d3] rounded-md cursor-pointer px-1 py-1'>#{tag}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ReadingListBlock 