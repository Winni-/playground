import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) => components[action.type] || state

const components = {
  HOME: 'index/index',
  LIST: 'List',
  ITEM: 'Item',
  [NOT_FOUND]: 'NotFound',
}
