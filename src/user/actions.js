import { actionTypes } from '../constants'

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT
  }
}