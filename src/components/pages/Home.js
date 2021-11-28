import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ articles }) => {
  return (
    <div>
      <h1>Total articles: {articles.length} </h1>
      <div className='bg-white pa4'>
        <span className='f3'>
          Latest article: 
        </span>
        <div>
          <Link to={`/articles/${articles.at(-1).id}`}>"{articles.at(-1).title}" </Link></div>
        </div>
        
    </div>
  )
}

export default Home
