import { combineReducers } from 'redux'
import { location } from './locationReducer'
import { products } from './index/reducer'
import { session } from './index/user/reducers'

export const rootReducer = combineReducers({ location, products, session })
