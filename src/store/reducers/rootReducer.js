import { combineReducers } from 'redux'
import { postInputReducer } from './postInputReducer'
import { postsReducer } from './postsReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  postInputs: postInputReducer
})