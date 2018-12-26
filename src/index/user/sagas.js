import { call, put, take } from 'redux-saga/effects'
import { actionTypes } from '../../constants'
import { api } from '../../api'

export function* watchRegistration(){
  while (true) {
    const { payload } = yield take(actionTypes.REGISTER)
    const response = yield call(api.register, payload)
    response.error
      ? yield put({ type: actionTypes.NETWORK_ERROR, payload: response })
      : yield put({ type: actionTypes.REGISTER_SUCCESS, payload: response })
  }
}

export function* watchLogin(){
  while (true) {
    const { payload, meta } = yield take(actionTypes.LOGIN)
    const response = yield call(api.login, payload)
    if ( response.error ) {
      yield put({ type: actionTypes.NETWORK_ERROR, payload: response })
    } else {
      //redirect to userPage
      meta.history.location.pathname !== 'user' && meta.history.push('/user')
      yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response })
    }
  }
}