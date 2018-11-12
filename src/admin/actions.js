export const types = {
  LOGIN: '_LOGIN',
  LOGIN_ERROR: '_LOGIN_ERROR',
  LOGIN_SUCCESS: '_LOGIN_SUCCESS',
}
export const authenticateUser = (email, password) => {
  return {
    type: types.LOGIN,
    payload: {
      email,
      password,
    },
  }
}
