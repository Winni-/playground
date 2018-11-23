import {actionTypes} from '../constants'
export const types = {
  LOGIN: '_LOGIN',
  LOGIN_ERROR: '_LOGIN_ERROR',
  LOGIN_SUCCESS: '_LOGIN_SUCCESS',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_ERROR: 'CREATE_PRODUCT_ERROR',
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
