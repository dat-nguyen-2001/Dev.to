


const ArticleBlock = ({ article }: any) => {
    const tags = article.tags.split(',')
    return (
        <div className="flex flex-col">
            <div></div>
            <div>{article.title}</div>
            <div>
                {article.t(tag => (
                    <span>#tag</span>
                ))}
            </div>
            <div></div>
        </div>
    )
}
export default ArticleBlock 