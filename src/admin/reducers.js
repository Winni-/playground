import { types } from './actions'
const initialState = {
  sessionID: '',
}
export const session = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...session,
        sessionID: action.payload.sessionID,
      }
    case types.LOGIN_ERROR:
      return state
    default:
      return state
  }
}
