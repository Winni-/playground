import { take, call, put } from 'redux-saga/effects'
import { actionTypes } from '../../constants'
import { api } from '../../api'

export function* watchRegistration(action) {
  while (true) {
    const { payload } = yield take(actionTypes.REGISTER)
    console.log(payload)
    const response = yield call(api.register, payload)
    response.error
      ? yield put(actionTypes.REGISTER_ERROR, response)
      : yield put(actionTypes.REGISTER_SUCCESS, response)
  }
}
