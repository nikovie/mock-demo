import articleService from '../services/articles'

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ARTICLES':
      return action.data
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


export default articleReducer
