import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import articleReducer from './reducers/articleReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  users: userReducer,
  articles: articleReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
