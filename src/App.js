import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { initArticles } from './reducers/articleReducer'
import Header from './components/Header'
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
  // const message = useSelector(state => state.notification)

  useEffect(() => {
    dispatch(initArticles())
  }, [dispatch])

  

  return (
    <div>
      <Header />
      <div className="row container">
        { !articles.length 
            ? <div>loading...</div> 
            : <div className="row col-lg-12">
              <Routes>
                <Route path="/articles/:id" element={ <ViewArticle articles={articles} /> } />
                <Route path="/articles" element={ <Articles data={articles} /> } />
                <Route path="/add" element={ <AddNew /> } />
                <Route path="/" element={ <Home articles={articles} /> } />
              </Routes>
            </div>
        }
      </div>
    </div>
    
  );
}

export default App;
