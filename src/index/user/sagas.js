import { take, call, put } from 'redux-saga/effects'
import { actionTypes } from '../../constants'
import { api } from '../../api'

export function* watchRegistration(action) {
  while (true) {
    const data = yield take(actionTypes.REGISTER)
    const response = yield call(api.register, [...data])
    response.error
      ? yield put(actionTypes.REGISTER_ERROR, response)
      : yield put(actionTypes.REGISTER_SUCCESS, response)
  }
}
