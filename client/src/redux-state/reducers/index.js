const initialState = {
  basic: 45,
  premium: 105,
  vip: 15
}

function rootReducer(state = initialState, action) {
  if (action.type === 'SET_USERS') {
    return Object.assign({}, state, {
      basic: action.payload.basic,
      premium: action.payload.premium,
      vip: action.payload.vip
    })
  }

  if (action.type === 'ADD_BASIC') {
    return Object.assign({}, state, {
      basic: state.basic + 1
    })
  }

  
  
  return state
}

export default rootReducer