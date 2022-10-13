import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"



const ArticleBlock = ({ article }: any) => {
    const tags = article.tags.split(',')
    return (
        <div className="flex flex-col">
            <div></div>
            <div>{article.title}</div>
            <div>
                {tags.map((tag: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => (
                    <span>#{tag}</span>
                ))}
            </div>
            <div></div>
        </div>
    )
}
export default ArticleBlock 