import  getArticles  from '../api/articles.api'
import Layout from '../components/Layout'
import {useState, useEffect} from 'react'

const HomePage = () => {
  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    getArticles().then(data => {
      setArticles(data)
    })
  },[])
  console.log(articles)
  return (
    <Layout title="DEV Community 👩‍💻👨‍💻">
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      <h1 className='text-[red]'>Welcome to Dev.to 👋</h1>
      {articles.map(article => {
        const user = await
        return(
        <div>
          {article.title}
        </div>
      )})}
    </Layout>
  )
}

export default HomePage


