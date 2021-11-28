import React from 'react'
import { useParams } from "react-router-dom"

const Article = ({ articles }) => {
  const { id } = useParams()

  console.log(`articles`, articles)
  const article = articles.find(article => article.id === Number(id))
  console.log(`article`, article)
  
  return (
    <div>
      { !article
        ? <div>loading...</div> 
        : <>
          <h1>{article.title}</h1>
          <div className='bg-white pa4'>
            {article.body}
          </div>
        </>
      }

    </div>
  )
}

export default Article
