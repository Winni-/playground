import { sendJSON } from './sendJSON'

export const register = async ({
  username,
  password,
  passwordConfirm,
  email,
}) => {
  return await sendJSON('/v1/user/register', 'POST', {
    username,
    password,
    passwordConfirm,
    email,
  })
}
