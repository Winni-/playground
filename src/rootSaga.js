import { watchRegistration, watchLogin } from './index/user/sagas'
import { all } from 'redux-saga/effects'
import { watchLogin as adminWatchLogin, watchCreateProduct, watchGetProduct } from './admin/sagas'
import { saveSession } from './persistentStateSaga'
export function* rootSaga(action) {
  yield all([
    watchRegistration(action),
    watchLogin(action),
    adminWatchLogin(),
    saveSession(action),
    watchCreateProduct(),
    watchGetProduct()
  ])
}
