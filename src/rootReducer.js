import { combineReducers } from 'redux'
import { location } from './locationReducer'
import { products } from './index/reducer'
import { session } from './index/user/reducers'
import { session as _session } from './admin/reducers'

export const rootReducer = combineReducers({
  location,
  products,
  session,
  _session,
})
