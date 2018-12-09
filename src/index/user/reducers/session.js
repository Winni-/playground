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
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        sessionID: action.payload.sessionID,
      }
    case actionTypes.LOGOUT:
      return initialState;
    case actionTypes.NETWORK_ERROR:
      switch (action.payload?.statusCode) {
        case 401:
          return initialState
      }
    default:
      return state
  }
}
