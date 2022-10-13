


const ArticleBlock = ({ article }: any) => {
    return (
        <div className="flex flex-col">
            <div></div>
            <div>{article.title}</div>
            <div>
                {article.tags.map}
            </div>
            <div></div>
        </div>
    )
}
export default ArticleBlock 