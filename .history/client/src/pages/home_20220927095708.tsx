import getArticles from '../api/articles.api'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import ArticleBlock from '../components/ArticleBlock'

const HomePage = () => {
  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    getArticles().then(data => {
      setArticles(data)
    })
  }, [])
  console.log('All Articles:', articles)
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
      <div class>
        {articles.map(article => {
          return (
            <div key={article.id}>
              <ArticleBlock article={article} />
            </div>
          )
        })}
      </div>

    </Layout>
  )
}

export default HomePage


