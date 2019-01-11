import { actionTypes } from '../constants'

export const getProductDetails = id => ({
  type: actionTypes.GET_PRODUCT_DETAILS,
  payload: {
    id,
  },
})