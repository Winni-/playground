import { watchRegistration } from './index/user/sagas'
import { all } from 'redux-saga/effects'
export function* rootSaga(action) {
  yield all([watchRegistration(action)])
}
