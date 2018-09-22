import { NOT_FOUND } from 'redux-first-router'

const initialState = 'HOME'

export const location = (state = initialState, action = {}) =>
  components[action.type] || state

const components = {
  HOME: 'index/index',
  PRODUCT: 'product',
  [NOT_FOUND]: 'Not_found',
}
