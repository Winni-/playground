import { watchLogin, watchRegistration } from './index/user/sagas'
import { all } from 'redux-saga/effects'
import { watchCreateProduct, watchGetProduct } from './admin/sagas'
import { watchStatePersistence } from './persistentStateSaga'
import { watchAddSlot } from './user/sellProduct/sagas'
import { watchGetProductDetails } from './product/sagas'

export function* rootSaga( action ){
  yield all([
    watchRegistration(action),
    watchLogin(action),
    watchStatePersistence(),
    watchCreateProduct(),
    watchGetProduct(),
    watchAddSlot(),
    watchGetProductDetails(),
  ])
}
