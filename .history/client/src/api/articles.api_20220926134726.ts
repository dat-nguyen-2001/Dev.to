export async function getArticleAPI() {
    const res = await fetch('http://localhost:4000/articles', { method: 'GET' })
    return await res.json();
}
