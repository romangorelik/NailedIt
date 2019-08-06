const initialState = {
  basic: 45,
  premium: 105,
  vip: 15
}

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_BASIC') {
    return Object.assign({}, state, {
      basic: state.basic + 1
    })
  }

  if (action.type === 'ADD_PREMIUM') {
    return Object.assign({}, state, {
      premium: state.premium + 1
    })
  }

  if (action.type === 'ADD_VIP') {
    return Object.assign({}, state, {
      vip: state.vip + 1
    })
  }
  
  return state
}

export default rootReducer