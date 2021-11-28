import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { initArticles } from './reducers/articleReducer'
import Header from './components/Header'
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

  console.log(`articles`, articles)

  return (
    <div>
      <Header />
      <div className="row container">
        <Routes>
          <Route path="/articles/:id" element={ <h1>Article</h1> } />
          <Route path="/articles" element={ <h1>Articles</h1> } />
          <Route path="/add" element={ <h1>Add new</h1> } />
          <Route path="/" element={ <h1>Hi there! </h1> } />
        </Routes>
      
      </div>
    </div>
    
  );
}

export default App;
