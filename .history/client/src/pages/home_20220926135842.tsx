import  getArticles  from '../api/articles.api'
import Layout from '../components/Layout'

const HomePage = () => {
  let data
  const getPosts = async function () {
    data = await getArticles()
  }
  getSpaceUntilMaxLength
  console.log('articles:',data)

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
    </Layout>
  )
}

export default HomePage

