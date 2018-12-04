import { actionTypes } from '../constants'

const initialState = {}

export const products = ( state = initialState, action ) =>{
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}