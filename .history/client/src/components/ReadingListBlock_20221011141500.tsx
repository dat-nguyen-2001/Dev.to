
const ReadingListBlock = ({ article }: any) => {

    return (
        <div className="flex flex-col space-y-2 bg-white rounded-md mx-auto border-[#d3d3d3] border-[.2px] pb-8">
            {article.title}
        </div>
    )
}
export default ReadingListBlock 