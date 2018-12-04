import { take, call, put } from 'redux-saga/effects'
import { actionTypes } from '../../constants'
import { api } from '../../api'

export function* watchRegistration() {
  while (true) {
    const { payload } = yield take(actionTypes.REGISTER)
    const response = yield call(api.register, payload)
    response.error
      ? yield put({ type: actionTypes.NETWORK_ERROR, payload: response })
      : yield put({ type: actionTypes.REGISTER_SUCCESS, payload: response })
  }
}

export function* watchLogin() {
  while (true) {
    const { payload } = yield take(actionTypes.LOGIN)
    const response = yield call(api.login, payload)
    response.error
      ? yield put({ type: actionTypes.NETWORK_ERROR, payload: response })
      : yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response })
  }
}