import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { initArticles, createArticle, removeArticle } from './reducers/articleReducer'
import { initUsers, setUser } from './reducers/userReducer'
import Header from './components/Header'
import Notification from './components/Notification'
import ViewArticle from './components/pages/Article'
import Articles from './components/pages/ArticleList'
import AddNew from './components/pages/AddNew'
import Home from './components/pages/Home'
import {
  Routes, Route
} from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  
  const articles = useSelector(state => state.articles)
  const users = useSelector(state => state.users)
  const message = useSelector(state => state.notification)
  const activeUser = users.find(u => u.active === true)


  useEffect(() => {
    
  }, [dispatch])

  useEffect(() => {
    dispatch(initUsers())
    dispatch(initArticles())
  }, [dispatch])

  // console.log(`users`, users)
  console.log(`activeUser`, activeUser)

  return (
    <div>
      <Header 
        users={users} 
        login={activeUser}
        setUser={(id) => dispatch(setUser(id))} 
      />
      <Notification notification={message}/>
      <div className="row container">
        { !articles.length || !users.length
            ? <div>loading...</div> 
            : <div className="row col-lg-12">
              <Routes>
                <Route path="/articles/:id" element={ 
                  <ViewArticle 
                    articles={articles} 
                    users={users} 
                    activeUser={activeUser} 
                    removeArticle={(article) => dispatch(removeArticle(article.title, article.id))}
                  /> } 
                />
                <Route path="/articles" element={ 
                  <Articles 
                    data={articles} 
                    users={users} 
                    activeUser={activeUser}
                    removeArticle={(article) => dispatch(removeArticle(article.title, article.id))}
                  /> } 
                />
                <Route path="/add" element={ 
                  <AddNew 
                    addNewArticle={(obj) => {
                      dispatch(createArticle(obj)) }
                    }
                    activeUser={activeUser}
                  /> } 
                />
                <Route path="/" element={ 
                  <Home 
                    articles={articles} 
                  /> } 
                />
              </Routes>
            </div>
        }
      </div>
    </div>
    
  );
}

export default App;
