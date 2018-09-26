import { combineReducers } from 'redux'
import { location } from './locationReducer'
import { products } from './index/reducer'

export const rootReducer = combineReducers({ location, products })
