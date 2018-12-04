import {actionTypes} from '../constants'
export const types = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
}
export const authenticateUser = (email, password) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      email,
      password,
    },
  }
}
export const createProduct = (product) => {
  return {
    type: types.CREATE_PRODUCT,
    payload: product
  }
}
export const getProductList = () => {
  return {
    type: actionTypes.GET_PRODUCT_LIST
  }
}
