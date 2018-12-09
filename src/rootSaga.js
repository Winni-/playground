import { watchRegistration, watchLogin } from './index/user/sagas'
import { all } from 'redux-saga/effects'
import { watchCreateProduct, watchGetProduct } from './admin/sagas'
import { watchStatePersistence } from './persistentStateSaga'
export function* rootSaga(action) {
  yield all([
    watchRegistration(action),
    watchLogin(action),
    watchStatePersistence(),
    watchCreateProduct(),
    watchGetProduct()
  ])
}
