import articlesApi from '../api/articles.api';
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import ArticleBlock from '../components/ArticleBlock'
import SideBar from '../components/SideBar'
import RightSideBar from '../components/RightSideBar'
import { useLocation } from 'react-router-dom';
import React from "react";
import usersApi from '../api/users.api'
import { useRecoilState, useRecoilValue } from 'recoil';
import { usernameState } from '../atoms/usernameAtom';


const {getLikedArticles, getUserInfo} = usersApi
const {getArticles, getArticlesByTag, getArticlesBySearch} = articlesApi;

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const HomePage = () => {

  const curUsername = useRecoilValue(usernameState)

  //Extract filter, search if any
  let query = useQuery();
  const tag = query.get('tag');
  const search = query.get('search');
  // Fetch articles from the database
  const [articles, setArticles] = useState<any[]>([])

  // Handle sorting artic
  const [sortByLatest, setSortByLatest] = useState<Boolean>(true)
  const sortLatest = (data: Array<any>) => {
    return data.sort(function(a: any,b: any){return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()})
  }
  const sortPopularity = (data: Array<any>) => {
    return data.sort(function(a: any,b: any){return b.reactions - a.reactions})
  }

  function handleSortByLatest() {
    setSortByLatest(true)
  }

  function handleSortByPopularity() {
    setSortByLatest(false)
  }

  //Get all the articles liked by current user
  const [likedArticles, setLikedArticles] = useState<number[]>([])
  useEffect(() => {

    // Fetch articles liked by current user
    getLikedArticles().then(data => setLikedArticles(data))

    if(tag) {
      getArticlesByTag(tag).then(data => {
        setArticles(sortByLatest ? sortLatest(data) : sortPopularity(data))
      })
    } else if(search) {
      getArticlesBySearch(search).then(data => {
        setArticles(sortByLatest ? sortLatest(data) : sortPopularity(data))
      })
    } else {
      getArticles().then(data => {
        setArticles(sortByLatest ? sortLatest(data) : sortPopularity(data))
      })
    }
  }, [sortByLatest])

  const [readingListNumber, setReadingListNumber] = useState<number>(0)
  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <Layout title="DEV Community 👩‍💻👨‍💻">
      <div className='md:grid grid-cols-7 lg:grid-cols-10 2xl:px-32'>
        <div className='hidden md:inline col-span-2'>
          <SideBar />
        </div>
        <div className='col-span-5 px-2'>
          <div className='flex space-x-2 text-[1.2rem] font-semibold'>
            <div className={`cursor-pointer hover:text-blue-700 px-2 py-2 mb-2 sm:hover:bg-white rounded-md ${sortByLatest ? 'font-bold': ''}`} onClick={handleSortByLatest}>Latest</div>
            <div className={`cursor-pointer hover:text-blue-700 px-2 py-2 mb-2 sm:hover:bg-white rounded-md ${!sortByLatest ? 'font-bold': ''}`} onClick={handleSortByPopularity}>Top</div>
          </div>
          <div className='flex flex-col space-y-2'>
            {articles.map(article => {
              return (
                <div key={article.id}>
                  <ArticleBlock article={article} liked = {likedArticles.includes(Number(article.id))}/>
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


