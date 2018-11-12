//import { sendJSON } from '../../api/sendJSON'

const login = async ({ password, email }) => {
  console.log('Api')
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ sessionID: '234534jk4hui' })
    }, 50)
  })
  // return await sendJSON('', 'POST', {
  //   password,
  //   email,
  // })
}

export const api = {
  login,
}
