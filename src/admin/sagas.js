import { take, call, put } from 'redux-saga/effects'
import { types } from './actions'
import { actionTypes } from '../constants'
import { api } from './api'

export function* watchLogin() {
  while (true) {
    const { payload } = yield take(types.LOGIN)
    const response = yield call(api.login, payload)
    response.error
      ? yield put({ type: types.NETWORK_ERROR, payload: response })
      : yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response })
  }
}
export function* watchCreateProduct() {
  while (true) {
    const { payload } = yield take(types.CREATE_PRODUCT)
    const response = yield call(api.createProduct, payload)
    response.error
      ? yield put({ type: types.NETWORK_ERROR, payload: response })
      : yield put({ type: types.CREATE_PRODUCT_SUCCESS, payload: response })
  }
}
export function* watchGetProduct() {
  while (true) {
    const { payload } = yield take(actionTypes.GET_PRODUCT_LIST)
    const response = yield call(api.getProducts, payload)
    response.error
      ? yield put({ type: actionTypes.NETWORK_ERROR, payload: response })
      : yield put({ type: actionTypes.GET_PRODUCT_LIST_SUCCESS, payload: response })
  }
}
