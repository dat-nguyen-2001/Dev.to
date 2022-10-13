
const ReadingListBlock = ({ article }: any) => {
    console.log(article)
    return (
        <div className="flex flex-col space-y-2 bg-white rounded-md mx-auto border-[#d3d3d3] border-[.2px] pb-8">
            <div className="w-">
                <img src={article.user.profile_pic} />
            </div>
            <div>
                <div>
                    {article.title}
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default ReadingListBlock 