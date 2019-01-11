import { actionTypes } from '../constants'

const initialState = []

const hasID = id => product => product._id === id;

export const products = ( state = initialState, action ) =>{
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST_SUCCESS:
      return [
        ...action.payload
      ]
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      if(state.findIndex(hasID(action.payload._id)) === -1)
        return [
          ...state,
          action.payload
        ]
    default:
      return state
  }
}