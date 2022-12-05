
import { initState } from '../initState'

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHECKBOX':
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}