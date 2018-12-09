import { saveField } from './util/localStorage'
import { actionTypes } from './constants'
import { call, take } from 'redux-saga/effects'

export function* watchStatePersistence(){
  while (true) {
    const { payload } = yield take([actionTypes.LOGIN_SUCCESS, actionTypes.LOGOUT])
    yield call(saveField, payload, 'session')
  }
}
