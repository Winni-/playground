import { call, put, take } from 'redux-saga/effects'
import { actionTypes } from '../../constants'
import { api } from '../../api'

export function* watchAddSlot() {
  while (true) {
    const { payload } = yield take(actionTypes.CREATE_SLOT)
    const response = yield call(api.createSlot, payload)
    response.error
      ? yield put({ type: actionTypes.NETWORK_ERROR, payload: response })
      : yield put({ type: actionTypes.CREATE_SLOT_SUCCESS, payload: response })
  }
}