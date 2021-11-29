import React from 'react'
import { useParams } from "react-router-dom"
import { Button } from 'react-bootstrap'


const Article = ({ articles, users, activeUser, removeArticle }) => {
  const { id } = useParams()

  // console.log(`articles`, articles)
  const article = articles.find(article => article.id === Number(id))
  console.log(`article`, article)
  
  return (
    <div>
      { !article
        ? <div>loading...</div> 
        : <>
          <h1>{article.title}</h1>
          <div className='bg-white pa4'>
            <div className='mb4'>
              {article.body}
            </div>
            <div>
              <span>Written by: {users.find(u => u.id === article.userId).name}</span>
            </div>
            {!activeUser ? null : <Button variant='danger' onClick={() => removeArticle(article)}>Remove</Button>}
          </div>
        </>
      }

    </div>
  )
}

export default Article
