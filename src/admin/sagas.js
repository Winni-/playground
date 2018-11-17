import { take, call, put } from 'redux-saga/effects'
import { types } from './actions'
import { api } from './api'

export function* watchLogin() {
  while (true) {
    const { payload } = yield take(types.LOGIN)
    const response = yield call(api.login, payload)
    response.error
      ? yield put({ type: types.LOGIN_ERROR, payload: response })
      : yield put({ type: types.LOGIN_SUCCESS, payload: response })
  }
}
export function* watchCreateProduct() {
  while (true) {
    const { payload } = yield take(types.CREATE_PRODUCT)
    const response = yield call(api.createProduct, payload)
    response.error
      ? yield put({ type: types.CREATE_PRODUCT_ERROR, payload: response })
      : yield put({ type: types.CREATE_PRODUCT_SUCCESS, payload: response })
  }
}
