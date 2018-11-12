import { take, call, put } from 'redux-saga/effects'
import { actionTypes } from '../../constants'
import { api } from '../../api'

export function* watchRegistration(action) {
  while (true) {
    const { payload } = yield take(actionTypes.REGISTER)
    console.log(payload)
    const response = yield call(api.register, payload)
    response.error
      ? yield put({ type: actionTypes.REGISTER_ERROR, payload: response })
      : yield put({ type: actionTypes.REGISTER_SUCCESS, payload: response })
  }
}

export function* watchLogin(action) {
  while (true) {
    const { payload } = yield take(actionTypes.LOGIN)
    console.log(payload)
    const response = yield call(api.login, payload)
    response.error
      ? yield put({ type: actionTypes.LOGIN_ERROR, payload: response })
      : yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response })
  }
}
