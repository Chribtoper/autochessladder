    const defaultState = {
        user: null,
        loggedIn: false,
        error: null,
        chessData: null
    }
  
  const UsersReducer = (state=defaultState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return { ...state, user: action.payload, loggedIn: true }
        case 'SET_CHESS_DATA':
        return { ...state, chessData: action.payload }
      case 'LOG_OUT':
        return {
          ...state,
          user: null,
          loggedIn: false,
          error: null
        }
        case 'FAILED_AUTH':
        return {
          ...state,
          user: null,
          loggedIn: false,
          error: true,
          chessData: null
        }
      default:
        return state
    }
  }
  
  export default UsersReducer