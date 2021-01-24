import { createStore } from 'redux'

export default createStore((state, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: action.user
      }
    
    case 'LOG_OUT':
      return {
        ...state,
        user: null
      }

    default:
      return state
  }
}, { user: null })