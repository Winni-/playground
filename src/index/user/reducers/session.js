import { actionTypes } from '../../../constants'
const initialState = {
  sessionID: '',
  id: '',
  firstName: '',
  lastName: '',
  username: '',
  email: '',
}
export const session = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        id: action.payload._id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        username: action.payload.username,
        email: action.payload.email,
      }
    case actionTypes.REGISTER_ERROR:
      return state
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...session,
        sessionID: action.payload.sessionID,
      }
    case actionTypes.LOGIN_ERROR:
      return state
    default:
      return state
  }
}
