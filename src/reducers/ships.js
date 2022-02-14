import shipService from '../services/ships'

const reducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT':
    return action.data
  default:
    return state
  }
}

// Get all
export const initializeShips = () => {
  return async dispatch => {
    const data = await shipService.getAll()
    dispatch({
      type: 'INIT',
      data
    })
  }
}

export default reducer