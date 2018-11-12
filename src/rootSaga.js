import { watchRegistration, watchLogin } from './index/user/sagas'
import { all } from 'redux-saga/effects'
import { watchLogin as adminWatchLogin } from './admin/sagas'
import { saveSession } from './persistentStateSaga'
export function* rootSaga(action) {
  yield all([
    watchRegistration(action),
    watchLogin(action),
    adminWatchLogin(action),
    saveSession(action),
  ])
}
