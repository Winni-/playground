import { call, put, take } from 'redux-saga/effects'
import { actionTypes } from '../constants'
import { api } from '../api'

export function* watchGetProductDetails(){
  while (true) {
    const { payload: { id } } = yield take(actionTypes.GET_PRODUCT_DETAILS)
    const response = yield call(api.getProductDetails, id)
    response.error
      ? yield put({ type: actionTypes.NETWORK_ERROR, payload: response })
      : yield put({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: response })
  }
}