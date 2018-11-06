import { actionTypes } from '../../constants'
export const createUser = (name, password, passwordConfirm, email) => {
  return {
    type: actionTypes.REGISTER,
    payload: {
      name,
      password,
      passwordConfirm,
      email,
    },
  }
}
