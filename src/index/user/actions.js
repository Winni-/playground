import { actionTypes } from '../../constants'
export const createUser = (username, password, passwordConfirm, email) => {
  return {
    type: actionTypes.REGISTER,
    payload: {
      username,
      password,
      passwordConfirm,
      email,
    },
  }
}
