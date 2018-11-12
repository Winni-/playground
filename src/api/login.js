import { sendJSON } from './sendJSON'

export const login = async ({ password, email }) => {
  return await sendJSON('/v1/user/enter', 'POST', {
    password,
    email,
  })
}
