
export class ArticleAPI {

    public static async getArticles() {
        const res = await fetch('http://localhost:4000/articles', {method: 'GET'})
        const data = await res.json()
        return data;
    }
}