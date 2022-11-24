import { initState } from '../initState'

export const postsReducer = (state = initState, action) => {

  const { type, payload } = action;
  console.log(action)
  switch (type) {
    case 'SET_ALL_POSTS':
      return payload
    case 'SET_POST':
      return [...state, payload]

    default:
      return state
  }
}