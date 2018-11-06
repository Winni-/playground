import { actionTypes } from '../../../constants'
const initialState = {}
export const session = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return state
    case actionTypes.REGISTER_ERROR:
      return state
    case actionTypes.LOGIN_SUCCESS:
      return state
    case actionTypes.LOGIN_ERROR:
      return state
    default:
      return state
  }
}
