import articlesApi from '../api/articles.api'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import ArticleBlock from '../components/ArticleBlock'
import SideBar from '../components/SideBar'
import RightSideBar from '../components/RightSideBar'
import { useLocation } from 'react-router-dom';
import React from "react";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const HomePage = () => {
  let query = useQuery();
  const tag = query.get('tag');
  const search = query.get('search');
  // Fetch articles from the database
  const [articles, setArticles] = useState<any[]>([])
  const {getArticles, getArticlesByTag, getArticlesBySearch} = articlesApi;

  // Handle sorting artic
  const [sortByLatest, setSortByLatest] = useState<Boolean>(true)
  const sortLatest = (data: Array<any>) => {
    return data.sort(function(a: any,b: any){return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()})
  }
  const sortPopularity = (data: Array<any>) => {
    return data.sort(function(a: any,b: any){return a.reactions - b.reactions})
  }
  useEffect(() => {
    if(tag) {
      getArticlesByTag(tag).then(data => {
        setArticles(sortLatest(data))
      })
    } else if(search) {
      getArticlesBySearch(search).then(data => {
        setArticles(sortLatest(data))
      })
    } else {
      getArticles().then(data => {
        setArticles(sortLatest(data))
      })
    }
  }, [])
  return (
    <Layout title="DEV Community 👩‍💻👨‍💻">
      <div className='md:grid grid-cols-7 lg:grid-cols-10 2xl:px-32'>
        <div className='hidden md:inline col-span-2'>
          <SideBar />
        </div>
        <div className='col-span-5 px-2'>
          <div className='flex space-x-2 text-[1.2rem] font-semibold'>
            <div className={`cursor-pointer hover:text-blue-700 px-2 py-2 mb-2 sm:hover:bg-white rounded-md ${sortByLatest ? 'font-bold': ''}`} onClick={() => handleSort}>Latest</div>
            <div className={`cursor-pointer hover:text-blue-700 px-2 py-2 mb-2 sm:hover:bg-white rounded-md ${!sortByLatest ? 'font-bold': ''}`} onClick={() => setSortByLatest(false)}>Top</div>
          </div>
          <div className='flex flex-col space-y-2'>
            {articles.map(article => {
              return (
                <div key={article.id}>
                  <ArticleBlock article={article}/>
                </div>
              )
            })}
          </div>
        </div>
        <div className='hidden lg:inline col-span-3'>
          <RightSideBar />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage


