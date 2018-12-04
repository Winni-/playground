import { sendJSON } from '../../api/sendJSON'
import { login } from '../../api/login'

const createProduct =  async product => {
  return await sendJSON('/v1/product/create', 'POST', product)
}

const getProducts = async () => {
  return await sendJSON('/v1/product/list', 'POST')
}

export const api = {
  login,
  createProduct,
  getProducts
}
