import articleService from '../services/articles'
import { notifyWith } from './notificationReducer'

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ARTICLES':
      return action.data
    case 'CREATE_NEW':
      console.log(`state`, state)
      console.log(`action.data`, action.data)
      return [...state, action.data]
    case 'REMOVE_ARTICLE': 
      const deletedArticle = state.find(article => article.id === action.id)
      console.log(`deletedArticle`, deletedArticle)
      console.log(`state after`, state.filter(article => article !== deletedArticle))
      return state.filter(article => article !== deletedArticle)

    default: 
      return state
  }
}

export const initArticles = () => {
  return async dispatch => {
    const articles = await articleService.getAll()
    dispatch({
      type: 'INIT_ARTICLES',
      data: articles
    }) 
  }
}

export const createArticle = (articleObject) => {
  return async dispatch => {
    const newArticle = await articleService.create(articleObject)
    dispatch({
      type: 'CREATE_NEW',
      data: newArticle
    }) 
    dispatch(notifyWith(`A new article "${newArticle.title}" has been added`)) 
  }
}

export const removeArticle = (title, id) => {
  console.log(`removeArticle reducer`, title, id)
  return async dispatch => {    
    if (window.confirm(`Are you sure to delete "${title}"`)) {
      dispatch({
        type: 'REMOVE_ARTICLE',
        id
      })
      await articleService.remove(id)
      dispatch(notifyWith('Article removed'))
    }
  }
}

export default articleReducer
