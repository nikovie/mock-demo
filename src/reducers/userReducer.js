import userService from '../services/users'


const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_USERS':
      const pocFeature = [ ...action.data
        .map(user => (
          { ...user, active: false }
        )) 
      ]
      return pocFeature
    case 'SET_USER':
      const setUserActive = state.find(user => user.id === Number(action.data))
      const activeUser = { ...setUserActive, active: !setUserActive.active }
      // console.log(`SET_USER setUserActive`, setUserActive)
      // console.log(`SET_USER activeUser`, activeUser)
      return state.map(user => user.id !== setUserActive.id ? user : activeUser)

    default: 
      return state
  }
}

export const initUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: users
    })
  }
}

export const setUser = (user) => {
  // console.log(`setUser reducer`, user)
  return dispatch => {
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}

export default userReducer
