
import { initState } from '../initState'

export const chatListReducer = (state = initState, action) => {

    switch (action.type) {
        case 'ADD_CHAT':
            return {...state, chatList:[...state.chatList, action.payload]}
        case 'DEL_CHAT':
            return {...state,chatList: state.chatList.filter(chatList => chatList.id !==action.payload)}
        default:
            return state
    }
}