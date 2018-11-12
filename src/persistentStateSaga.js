import { saveField } from './util/localStorage'
import { actionTypes } from './constants'
import { types } from './admin/actions'
import { take, call } from 'redux-saga/effects'
export function* saveSession(action) {
  while (true) {
    const { payload } = yield take([
      actionTypes.LOGIN_SUCCESS,
      types.LOGIN_SUCCESS,
    ])
    console.log(payload)
    yield call(saveField, payload, 'session')
  }
}
