import { URL } from '../constants'

export const sendJSON = async (address, method, data = {}) => {
  const body = JSON.stringify(data)

  let headers = new Headers()
  headers.append('Content-Type', 'application/json; charset=UTF-8')

  const res = await fetch(URL + address, {
    method,
    headers,
    body,
    mode: 'cors', //TODO: remove cors
  }).catch(error => console.error('Error:', error))

  return res.json()
}
