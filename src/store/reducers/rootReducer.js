import { combineReducers } from 'redux'
import { postInputReducer } from './postInputReducer'
import { postsReducer } from './postsReducer'
import {profileReducer} from "./profileReducer";
import {chatListReducer} from "./chatListReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  postInputs: postInputReducer,
  profileCheck: profileReducer,
  chatList:chatListReducer,
})